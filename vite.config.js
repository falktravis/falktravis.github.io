import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as mdPlugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin()],
  base: '/',
})
