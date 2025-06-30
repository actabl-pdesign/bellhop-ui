import { extendTailwindMerge } from "tailwind-merge";

export const bellhopTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        {
          shadow: [
            {
              bellhop: ["input", "card", "dropdown"],
            },
          ],
        },
      ],
      rounded: [
        {
          rounded: [
            {
              bellhop: ["small", "default", "full"],
            },
          ],
        },
      ],
      "font-size": [
        {
          text: [
            {
              bellhop: ["default", "title", "metric"],
            },
          ],
        },
      ],
    },
  },
});
