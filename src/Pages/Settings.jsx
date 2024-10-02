import { useAuth } from '@workos-inc/authkit-react';

import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';
import { Layout } from '../layout/Layout';
import { Typography } from '../components/Typography';

export function Settings() {
  const { isLoading, signOut, user } = useAuth();

  return (
    <Layout>
      <Typography style='h2' className='mb-0'>Account Settings</Typography>
      <Typography style='h4' className='text-gray-500 mt-1 mb-8'>{user?.firstName} {user?.lastName}</Typography>
      <ButtonLink
        className='text-ipblue-200 bg-ipblue-800'
        label='Customer Portal'
        to='https://billing.stripe.com/p/login/test_eVa2accDp7pj9c4288'
      />
      <Button
        className='text-red-800'
        onClick={() => signOut()}
        disabled={isLoading}
      >
        Sign Out
      </Button>
    </Layout>
  );
}
