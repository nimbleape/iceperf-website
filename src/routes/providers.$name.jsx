import { createFileRoute } from '@tanstack/react-router';
import { Provider } from '../Pages/Provider';

export const Route = createFileRoute('/providers/$name')({
  component: Provider,
});
