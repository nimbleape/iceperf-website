import { useAuth } from '@workos-inc/authkit-react';

import { Layout } from '../layout/Layout';

export function Login() {
  const { isLoading, signIn } = useAuth();

  return (
    <Layout>
      <button
        className='btn btn-primary'
        onClick={() => signIn()}
        disabled={isLoading}
      >
        Login
      </button>
    </Layout>
  );
}
