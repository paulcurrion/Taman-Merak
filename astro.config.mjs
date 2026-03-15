import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    // 1. Add your GitHub Pages URLs here
  site: 'https://tamanmerak.com',

    // 2. Keep your Tailwind and React configs
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()]
    
    // Notice: The Netlify adapter is completely gone!
})
