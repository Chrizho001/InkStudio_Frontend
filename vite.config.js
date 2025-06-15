import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
    port: 3000,
    // hmr: {
    //   host: '42d7-197-210-54-25.ngrok-free.app',
    // },
     allowedHosts: ['dcbd-102-90-101-133.ngrok-free.app'],
  },
});