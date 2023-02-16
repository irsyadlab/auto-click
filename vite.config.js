import { defineConfig } from "vite";

export default defineConfig({
    base: '/auto-click',
    build: {
        outDir: './dist',
        rollupOptions: {
            input: {
                main: './index.html',
                burst: './burst.html',
            }
        }
    }
});
