import { createFileRoute } from '@tanstack/react-router';
import { Pricing } from '../Pages/Pricing';

export const Route = createFileRoute('/pricing')({
  component: Pricing,
});
