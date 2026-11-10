import { defineConfig } from 'vite';
import helmet from 'helmet';
import { helmetOptions } from '../server/src/security/csp.js';

// Preserve existing proxy/alias/CSS settings when merging. JSX is handled below.
// React Fast Refresh injects an inline preamble; omit it unless you add a CSP nonce.
export default defineConfig({
  plugins: [{
    name: 'review-document-security-headers',
    configureServer(server) { server.middlewares.use(helmet(helmetOptions)); },
    configurePreviewServer(server) { server.middlewares.use(helmet(helmetOptions)); }
  }],
  esbuild: { jsx: 'automatic' },
  server: { port: 5175, strictPort: true }
});
