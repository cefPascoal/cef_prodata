import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base: './'` uses relative asset paths so the build works out of the box
// on GitHub Pages, regardless of the repository name.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
