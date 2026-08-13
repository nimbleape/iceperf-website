import { createFileRoute } from '@tanstack/react-router';
import { PaymentStatus } from '../Pages/PaymentStatus';

export const Route = createFileRoute('/payment-status')({
  component: PaymentStatus,
});
