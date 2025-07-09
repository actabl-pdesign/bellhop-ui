import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-addon-test-codegen",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    if (config.css) {
      config.css.postcss = {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      };
    }
    return config;
  },
};
export default config;