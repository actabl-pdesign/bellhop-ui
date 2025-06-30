import "../src/styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
    ],
  },
};


export const tags = ["autodocs"];
