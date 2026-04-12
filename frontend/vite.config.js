import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [  'pwa-192x192.png', 'favicon.svg', 'apple-touch-icon.png', 'mask-icon.svg',  'robots.txt'],
      workbox:{
        navigateFallback:"/index.html",
        globPatterns: ["**/.{jsx,css,html,png,jpg,ico,txt}"]

      },
      manifest: {
        name: 'Aplicacion de gastos diarios',
        short_name: 'Gastos',
        description: 'Aplicación para registrar gastos gastos diarios',
        start_url: "/",
        display: "standalone",
        background_color: '#ffffff',
        theme_color: '#000',

        screenshots:[
          {
          src: "/image/logo.png",
          sizes: "350x350",
          type: "image/png",
          form_factor: "wide"
          },
          {
               src: "/image/logo.png",
              sizes: "350x350",
             type: "image/png",
            form_factor: "narrow"
        }
        ],


        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '950x950',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '950x950',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})