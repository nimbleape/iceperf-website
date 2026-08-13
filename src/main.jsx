import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { AuthKitProvider } from '@workos-inc/authkit-react';
import { UserContextProvider } from './contexts/userContext';

import { routeTree } from './routeTree.gen';

import './index.css';

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <AuthKitProvider
      clientId={import.meta.env.VITE_WORKOS_CLIENT_ID}
      devMode={true}
    >
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </AuthKitProvider>
  </React.StrictMode>
);
