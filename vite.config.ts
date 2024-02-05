import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const webcomponentsConfig = {
  build: {
    assetsDir: ".",
    rollupOptions: {
      input: "/src/webcomponents/index.tsx",
      output: {
        dir: "dist/webcomponents",
        entryFileNames: "webcomponents.js",
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ...webcomponentsConfig,
})
