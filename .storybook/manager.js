import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";
import bellhopTheme from "./bellhopTheme";

addons.setConfig({
  theme: bellhopTheme,
});
