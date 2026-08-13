import { createFileRoute } from '@tanstack/react-router';
import { Cookies } from '../Pages/Cookies';

export const Route = createFileRoute('/cookies')({
  component: Cookies,
});
