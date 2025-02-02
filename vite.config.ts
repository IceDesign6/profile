import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve("./src") },
      { find: "@assets", replacement: path.resolve("./src/assets") },
      { find: "@components", replacement: path.resolve("./src/components") },
      { find: "@hooks", replacement: path.resolve("./src/hooks") },
      { find: "@interface", replacement: path.resolve("./src/interface") },
      { find: "@locales", replacement: path.resolve("./src/locales") },
      { find: "@pages", replacement: path.resolve("./src/pages") },
    ],
  },
});
