import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: ['5173-i59oki2wl7r0h9jnqt10n-ae6eb643.us2.manus.computer'],
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
    watch: {
      usePolling: true,
    },
  },
});
