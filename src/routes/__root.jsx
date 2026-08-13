import { useEffect } from 'react';
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import 'preline/preline';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function RootComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {import.meta.env.DEV && <TanStackRouterDevtools position='bottom-right' />}
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
