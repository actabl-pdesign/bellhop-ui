import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { glob } from "glob";

// Get all component files
const componentFiles = glob.sync("components/**/*.tsx", {
  ignore: ["**/*.story.tsx", "**/*.demo.tsx", "**/*.test.tsx"],
});

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["components", "hooks", "utils", "index.ts"],
      exclude: ["**/*.story.tsx", "**/*.demo.tsx", "**/*.test.tsx"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "BellhopUI",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        // Keep these as external since they should be peer deps
        "next",
        "next-themes",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@/components": resolve(__dirname, "./components"),
      "@/utils": resolve(__dirname, "./utils"),
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
});