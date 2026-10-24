import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import guideHandler from './api/guide.js'

// On Vercel, files in /api run as serverless functions. Mount the same handler in
// the Vite dev and preview servers so country pages work locally too.
function localApi() {
  const mount = (server) => {
    server.middlewares.use('/api/guide', (req, res) => {
      guideHandler(req, res).catch((err) => {
        console.error(err);
        res.statusCode = 500;
        res.end('{"error":"server_error"}');
      });
    });
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
