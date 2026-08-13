import { createContext, useEffect, useContext } from 'react';
import { useAuth } from '@workos-inc/authkit-react';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { decodeJwt } from 'jose';

import entitlements from '../util/entitlements';

const UserContext = createContext(true);

export const UserContextProvider = ({ children }) => {
  const { isLoading, signIn, signUp, signOut, user, getAccessToken } = useAuth();

  // TODO get Stripe customer and sub in a single endpoint!
  const { data: customerData, error: customerError } = useQuery({
    queryKey: ['stripe-customer', user?.id],
    queryFn: async () => {
      const accessToken = await getAccessToken();

      if (!accessToken) {
        return { accessToken: null, stripeCustomerId: null, decodedToken: null, hasAccessToPrivateIce: false };
      }

      const customer = await fetch(`${import.meta.env.VITE_API_BASE_URI}/api/get-customer/${user.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const customerResp = await customer.json();

      if (customerResp.err) {
        throw new Error(customerResp.err);
      }

      const decodedToken = decodeJwt(accessToken);
      const hasAccessToPrivateIce = decodedToken?.entitlements?.find((e) => e === entitlements.PRIVATE_TURN_CREDENTIALS);

      return {
        accessToken,
        stripeCustomerId: customerResp?.id,
        decodedToken,
        hasAccessToPrivateIce,
      };
    },
    enabled: !!user,
  });

  const stripeCustomerId = customerData?.stripeCustomerId;

  const { data: activeSubscription, error: subscriptionError } = useQuery({
    queryKey: ['active-subscription', stripeCustomerId],
    queryFn: async () => {
      const req = await fetch(`${import.meta.env.VITE_API_BASE_URI}/api/get-active-subscription/${stripeCustomerId}`);
      const activeSubJson = await req.json();
      return activeSubJson?.subscription;
    },
    enabled: !!stripeCustomerId,
  });

  useEffect(() => {
    if (customerError) {
      console.error(customerError);
    }
  }, [customerError]);

  useEffect(() => {
    if (subscriptionError) {
      console.error(subscriptionError);
    }
  }, [subscriptionError]);

  const updatedUser = user ? {
    ...user,
    stripeCustomerId,
    activeSubscription,
    hasActiveSubscription: !!activeSubscription,
    accessToken: customerData?.accessToken,
    decodedToken: customerData?.decodedToken,
    hasAccessToPrivateIce: customerData?.hasAccessToPrivateIce,
  } : undefined;

  return (
    <UserContext.Provider
      value={{
        isLoading,
        signIn,
        signUp,
        signOut,
        user: updatedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
