import { defineConfig } from 'vite';
//@ts-ignore
import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	server: { https: true },
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
			},
			output: {
				manualChunks: {
					"service-worker": ["./public/service-worker.js"],
				},
			},
		},
	},
	optimizeDeps: {
		exclude: ["service-worker"],
	},
});
