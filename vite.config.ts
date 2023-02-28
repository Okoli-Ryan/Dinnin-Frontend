import { defineConfig } from "vite";
//@ts-ignore
import mkcert from "vite-plugin-mkcert";

import react from "@vitejs/plugin-react";

const plugins = process.env.ENV === "production" ? [react()] : [react(), mkcert()];

// https://vitejs.dev/config/
export default defineConfig({
	plugins,
	server: { https: true },
});
