import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPolicy } from '../Pages/Privacy-Policy';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
});
