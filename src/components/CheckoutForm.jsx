import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

import { Button } from './Button';
import { PricingCardsGrid } from './PricingCardsGrid';
import { ListGroup } from './ListGroup';
import { ListGroupItem } from './ListGroupItem';
import { useUserContext } from '../contexts/userContext';
import { Typography } from './Typography';

export const CheckoutForm = ({ className = '' }) => {
  const [selectedPriceId, setSelectedPriceId] = useState();
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  const { isLoading, user, signIn, signUp } = useUserContext();
  const location = useLocation();

  // get a list of products and prices from Stripe
  useEffect(() => {
    const getPrices = async () => {
      const resp = await fetch(`${import.meta.env.VITE_API_BASE_URI}/api/get-active-products`);
      const respJson = await resp.json();
      setPrices(respJson.pricesList);
      setProducts(respJson.productsList);
    }
    getPrices();
  }, []);

  return (
    <div className={twMerge('max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center', className)}>
      <PricingCardsGrid
        products={products}
        prices={prices}
        selectedPriceId={selectedPriceId}
        setSelectedPriceId={setSelectedPriceId}
      />

      {!user && (
        <ListGroup className='max-w-full bg-ipblue-100 px-3 rounded-md mb-6'>
          <ListGroupItem className='py-6'>
            <Typography style='h4' className='my-0 w-full text-md sm:text-lg sm:max-w-prose text-left text-ipblue-900'>
              You need to be logged in to purchase a subscription
            </Typography>
            <div className='flex flex-col sm:flex-row gap-3 mt-6 md:mt-0 md:ml-6'>
              <Button
                className='w-full sm:w-32 h-10'
                onClick={() => signIn({ context: location.search, state: { returnTo: location.pathname } })}
                disabled={isLoading}
              >
                Login
              </Button>
              <Button
                className='w-full sm:w-32 h-10'
                onClick={() => signUp()}
                disabled={isLoading}
              >
                Sign Up
              </Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      )}

      <form
        action={`${import.meta.env.VITE_API_BASE_URI}/api/checkout/create-session/${selectedPriceId}/${user?.stripeCustomerId}`}
        className='w-full md:w-52'
      >
        <Button
          className='w-full'
          type='submit'
          disabled={isLoading || !selectedPriceId || !user?.stripeCustomerId || user?.hasActiveSubscription}
          highlight
        >
          Go To Checkout
        </Button>
      </form>
      {user?.hasActiveSubscription && (
        <p className='mt-2 text-sm text-gray-500 dark:text-neutral-500'>
          A subscription is already active for this user
        </p>
      )}
    </div>
  )
};

CheckoutForm.propTypes = {
  className: PropTypes.string,
};
