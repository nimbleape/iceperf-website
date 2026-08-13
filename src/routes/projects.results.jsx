import { createFileRoute } from '@tanstack/react-router';
import { Results } from '../Pages/Results';

export const Route = createFileRoute('/projects/results')({
  component: () => <Results select='ossProject' />,
});
