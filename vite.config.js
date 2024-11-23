import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/tailwind.css",
                "resources/js/script.js",
                "resources/css/style.css",
                "resources/js/datatables-simple-demo.js",
            ],
            refresh: true,
        }),
    ],
});
