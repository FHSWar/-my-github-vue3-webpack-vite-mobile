/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vitePluginEjsMpa from './build/vite/vite-plugin-ejs-mpa'

export default defineConfig({
  base: './',
  build: {
    minify: 'terser'
  },
  plugins: [vitePluginEjsMpa(), vue()],
  define: {
    'process.env': {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      BUILD_TIME: new Date().toLocaleString(),
      VUE_BASE_URL: '/'
    }
  },
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.cjs', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  }
})
