import { createFileRoute } from '@tanstack/react-router';
import { Terms } from '../Pages/Terms';

export const Route = createFileRoute('/terms')({
  component: Terms,
});
