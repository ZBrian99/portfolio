import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/portfolio/',
	build: {
		assetsDir: 'public',
		rollupOptions: {
			input: ['./index.html', './404.html'],
		},
	},
});
