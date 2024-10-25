import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import svgr from 'vite-plugin-svgr'
// import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		ViteImageOptimizer({
			jpg: {
				quality: 40
			},
			png: {
				quality: 40
			},
			jpeg: {
				quality: 40
			},
			gif: {},
			webp: {
				lossless: true
			}
		})
	],
})
