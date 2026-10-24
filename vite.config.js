import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import adminHandler from './api/admin.js'
import guideHandler from './api/guide.js'
import paystackWebhookHandler from './api/paystack-webhook.js'
import trackHandler from './api/track.js'
import verifyPaymentHandler from './api/verify-payment.js'

const API_ROUTES = {
  '/api/admin': adminHandler,
  '/api/guide': guideHandler,
  '/api/track': trackHandler,
  '/api/verify-payment': verifyPaymentHandler,
  '/api/paystack-webhook': paystackWebhookHandler,
};

// On Vercel, files in /api run as serverless functions. Mount the same handlers in
// the Vite dev and preview servers so the site works locally too.
function localApi() {
  const mount = (server) => {
    for (const [route, handler] of Object.entries(API_ROUTES)) {
      server.middlewares.use(route, (req, res) => {
        handler(req, res).catch((err) => {
          console.error(err);
          res.statusCode = 500;
          res.end('{"error":"server_error"}');
        });
      });
    }
  };
  return { name: 'local-api', configureServer: mount, configurePreviewServer: mount };
}

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [react(), localApi()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
