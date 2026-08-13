import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Settings } from '../Pages/Settings';

export const Route = createFileRoute('/settings')({
  component: () => (
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  ),
});
