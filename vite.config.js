import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePostHog } from "vite-plugin-posthog";

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    plugins: [
      react(),
      vitePostHog({
        apiKey: "phc_mziibLwvn4pTYWYwf9W8QpSvtEOvWVZE2qKkadiLpJS",
        hostUrl: "https://eu.posthog.com",
        isDevModeOn: true,
        config: {
          autocapture: false,
          capture_pageview: false,
          // ...other posthog config options
        },
      }),
    ],
  });
};
