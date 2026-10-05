import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/base/_variables.scss" as *;`,
                api: 'modern-compiler',
                // Toto řekne Sassu, kde má hledat soubory začínající na @
                loadPaths: [fileURLToPath(new URL('./src', import.meta.url))],
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        open: true,
    },
})
