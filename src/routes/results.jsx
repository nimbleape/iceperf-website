import { createFileRoute } from '@tanstack/react-router';
import { Results } from '../Pages/Results';

export const Route = createFileRoute('/results')({
  component: Results,
});
