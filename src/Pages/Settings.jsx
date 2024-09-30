import { useAuth } from '@workos-inc/authkit-react';
import { useLocation } from 'react-router-dom';

import { Button } from '../components/Button';
import { Layout } from '../layout/Layout';
import { Typography } from '../components/Typography';

export function Settings() {
  const { isLoading, signIn } = useAuth();
  const location = useLocation();

  return (
    <Layout>
      <Typography style='h2'>Account Settings</Typography>
      {/* <Button
        onClick={() => signIn({ context: location.search, state: { returnTo: location.pathname } })}
        disabled={isLoading}
      >
        Login
      </Button> */}
    </Layout>
  );
}
