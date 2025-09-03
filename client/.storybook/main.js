// .storybook/main.js
import { mergeConfig } from "vite";

module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          css: {
            // Tailwind should work automatically with Vite
          },
        },
      },
    });
  },
};
