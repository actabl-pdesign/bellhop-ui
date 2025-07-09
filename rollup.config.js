import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import pkg from "./package.json" with { type: "json" }

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.ts", "**/*.stories.tsx"]
    }),
    terser()
  ],
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "tailwindcss",
    "clsx",
    "tailwind-merge",
    "react-hook-form",
    "zod",
    "@hookform/resolvers"
  ]
}