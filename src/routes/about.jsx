import { createFileRoute } from '@tanstack/react-router';
import { About } from '../Pages/About';

export const Route = createFileRoute('/about')({
  component: About,
});
