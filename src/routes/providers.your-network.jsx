import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Provider } from '../Pages/Provider';

export const Route = createFileRoute('/providers/your-network')({
  component: () => (
    <ProtectedRoute>
      <Provider isPrivate />
    </ProtectedRoute>
  ),
});
