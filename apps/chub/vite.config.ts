import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from'vite-plugin-mkcert'

export default defineConfig({
  server : {
    port : 5175,
    https: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
  ],
})