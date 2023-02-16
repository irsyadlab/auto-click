import { defineConfig } from "vite";

export default defineConfig({
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
