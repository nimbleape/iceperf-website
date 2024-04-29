import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePostHog } from "vite-plugin-posthog";
import tailwindcss from 'tailwindcss'
import svgr from "vite-plugin-svgr";
import CloudflarePagesFunctions from 'vite-plugin-cloudflare-functions';


// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    css: {
      postcss: {
        plugins: [
          tailwindcss()],
      },
    },
    plugins: [
      react(),
      svgr(),
      CloudflarePagesFunctions(),
      vitePostHog({
        apiKey: "phc_mziibLwvn4pTYWYwf9W8QpSvtEOvWVZE2qKkadiLpJS",
        hostUrl: "https://eu.posthog.com",
        isDevModeOn: false,
        config: {
          autocapture: true,
          capture_pageview: true,
        },
      }),
    ],
  });
};
