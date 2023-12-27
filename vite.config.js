import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/ravikjha7/Portfolio/tree/gh-pages/",
  plugins: [react()],
 
})
