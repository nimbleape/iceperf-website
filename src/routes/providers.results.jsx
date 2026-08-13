import { createFileRoute } from '@tanstack/react-router';
import { Results } from '../Pages/Results';

export const Route = createFileRoute('/providers/results')({
  component: () => <Results select='provider' />,
});
