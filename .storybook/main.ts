import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.story.tsx"],
  addons: [
    "@storybook/addon-themes",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-backgrounds"
  ],
  framework: "@storybook/nextjs-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    // Only set base path for GitHub Pages, not for Chromatic
    if (process.env.NODE_ENV === 'production' && !process.env.CHROMATIC && !process.env.STORYBOOK_BUILD_FOR_CHROMATIC) {
      config.base = '/bellhop-ui/';
    }
    
    // Ensure dependencies are properly resolved
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": "/Users/brunabites/localsites/bellhop-ui",
      };
    }
    
    // Configure build options
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        external: [],
        output: {
          ...config.build.rollupOptions?.output,
          manualChunks: undefined,
        },
      };
      config.build.chunkSizeWarningLimit = 2000;
    }
    
    return config;
  },
};

export default config;
