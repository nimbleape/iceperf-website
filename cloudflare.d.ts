import type { CloudflareResponseBody } from 'vite-plugin-cloudflare-functions/worker';

import 'vite-plugin-cloudflare-functions/client';

declare module 'vite-plugin-cloudflare-functions/client' {
  interface PagesResponseBody {
    '/api/**:catchall': {
      ALL: CloudflareResponseBody<typeof import('functions/api/[[catchall]]')['onRequest']>;
    };
    '/api/:provider': {
      ALL: CloudflareResponseBody<typeof import('functions/api/[provider]')['onRequest']>;
    };
  }
}
