import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType:'autoUpdate',
  includeAssets:['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest:{
    name: 'Monitor Dollar',
    short_name: 'Monitor',
    start_url: '/',
    scope:'/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#1f2937',
    orientation: 'portrait-primary',
    description: 'Simple app to monitor the USD/VES rate',
    icons:[
      {
        src: '/android-chrome-192x192.png',
        sizes:'192x192',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src:'/android-chrome-512x512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: '/apple-touch-icon.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
  }
}

// https://vitejs.dev/config/
export default defineConfig ({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
