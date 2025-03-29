import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
  },
});

const viteConfig = defineViteConfig({
  base: "",
  plugins: [react()],
});

export default mergeConfig(vitestConfig, viteConfig);
