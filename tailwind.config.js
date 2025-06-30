/* eslint-disable @typescript-eslint/no-require-imports */
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const colors = require("tailwindcss/colors");

// Custom color palette - Registry Colors
const customColors = {
  ...colors,
  // Override default colors with custom palette
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  
  // Neutral Scale - replaces slate/gray
  neutral: {
    50: "#f9f9fb",
    100: "#eff1f5",
    200: "#dcdfea",
    300: "#b9c0d4",
    400: "#7d89b0",
    500: "#5d6b98",
    600: "#4a5578",
    700: "#404968",
    800: "#30374f",
    900: "#111322",
    950: "#0e101b",
  },
  
  // Map gray to neutral for backwards compatibility
  gray: {
    50: "#f9f9fb",
    100: "#eff1f5",
    200: "#dcdfea",
    300: "#b9c0d4",
    400: "#7d89b0",
    500: "#5d6b98",
    600: "#4a5578",
    700: "#404968",
    800: "#30374f",
    900: "#111322",
    950: "#0e101b",
  },
  
  // Indigo Scale
  indigo: {
    50: "#f1f5fe",
    100: "#e1eafe",
    200: "#bacefc",
    300: "#8daafc",
    400: "#7498fb",
    500: "#5068dd",
    600: "#2642cf",
    700: "#1930a9",
    800: "#1b2192",
    900: "#161b79",
    950: "#141752",
  },
  
  // Rose Scale
  rose: {
    50: "#fbf0ee",
    100: "#f5dcdb",
    200: "#efc3c2",
    300: "#e9aaae",
    400: "#e38c91",
    500: "#e47789",
    600: "#d25664",
    700: "#c84656",
    800: "#a52c40",
    900: "#631c28",
    950: "#681d29",
  },
  
  // Red Scale
  red: {
    50: "#feefeb",
    100: "#fce3e3",
    200: "#fbd0d0",
    300: "#f7abab",
    400: "#f87272",
    500: "#f05250",
    600: "#d6341f",
    700: "#bf2b18",
    800: "#992424",
    900: "#701e19",
    950: "#55160c",
  },
  
  // Amber Scale
  amber: {
    50: "#fffaeb",
    100: "#fef0c7",
    200: "#fedf89",
    300: "#fec84b",
    400: "#fdb022",
    500: "#f79009",
    600: "#dc6803",
    700: "#b54708",
    800: "#93370d",
    900: "#7a2e0e",
    950: "#4e1d09",
  },
  
  // Green Scale
  green: {
    50: "#ecfdf3",
    100: "#dcfae6",
    200: "#abefc6",
    300: "#75e0a7",
    400: "#47cd89",
    500: "#17b26a",
    600: "#079455",
    700: "#067647",
    800: "#085d3a",
    900: "#074d31",
    950: "#053321",
  },
  
  // Orange Scale
  orange: {
    50: "#fef6ee",
    100: "#fdead7",
    200: "#f9dbaf",
    300: "#f7b27a",
    400: "#f38744",
    500: "#ef6820",
    600: "#e04f16",
    700: "#b93815",
    800: "#932f19",
    900: "#772917",
    950: "#511c10",
  },
  
  // Blue Scale
  blue: {
    50: "#eff8ff",
    100: "#d1e9ff",
    200: "#b2ddff",
    300: "#84caff",
    400: "#53b1fd",
    500: "#2e90fa",
    600: "#1570ef",
    700: "#175cd3",
    800: "#1849a9",
    900: "#194185",
    950: "#102a56",
  },
  
  // Violet Scale
  violet: {
    50: "#f4ebf4",
    100: "#ebdbeb",
    200: "#dbbddb",
    300: "#cfa5ce",
    400: "#bb81ba",
    500: "#a05da8",
    600: "#8e4b9b",
    700: "#7d368c",
    800: "#6c3177",
    900: "#56255f",
    950: "#3d1745",
  },
  
  // Purple Scale
  purple: {
    50: "#f4f3ff",
    100: "#ebe9fe",
    200: "#d9d6fe",
    300: "#bdb4fe",
    400: "#a28afb",
    500: "#875af8",
    600: "#8438ef",
    700: "#7125dc",
    800: "#5f1fb8",
    900: "#4f1c96",
    950: "#32115f",
  },
};

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        // Bellhop theme using custom colors with references
        bellhop: {
          brand: {
            faint: customColors.indigo[50],
            muted: customColors.indigo[100],
            subtle: customColors.indigo[200],
            DEFAULT: customColors.indigo[600],
            emphasis: customColors.indigo[700],
            inverted: customColors.white,
          },
          secondary: {
            faint: customColors.neutral[100],
            muted: customColors.neutral[200],
            subtle: customColors.neutral[300],
            DEFAULT: customColors.neutral[800],
            emphasis: customColors.neutral[900],
          },
          background: {
            muted: customColors.neutral[50],
            subtle: customColors.neutral[100],
            DEFAULT: customColors.white,
            emphasis: customColors.neutral[700],
            strong: customColors.neutral[900],
          },
          border: {
            faint: customColors.neutral[100],
            DEFAULT: customColors.neutral[300],
            emphasis: customColors.neutral[400],
          },
          ring: {
            DEFAULT: customColors.indigo[200],
            focus: customColors.indigo[500],
          },
          content: {
            subtle: customColors.neutral[400],
            DEFAULT: customColors.neutral[600],
            emphasis: customColors.neutral[700],
            strong: customColors.neutral[900],
            inverted: customColors.white,
          },
        },
        
        // Override default Tailwind colors with custom palette
        ...customColors,
      },
      fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        // light
        "bellhop-input": "0 0px 0px 0 rgb(0 0 0 / 0)",
        "bellhop-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "bellhop-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",

      },
      borderWidth: {
        DEFAULT: "1.5px",
        "0": "0",
        "2": "2.5px",
        "3": "3.5px",
      },
      borderRadius: {
        "bellhop-small": "0.375rem",
        "bellhop-default": "0.5rem",
        "bellhop-full": "9999px",
      },
      fontSize: {
        "bellhop-label": ["0.75rem", { lineHeight: "1rem" }],
        "bellhop-default": ["0.875rem", { lineHeight: "1.1rem" }],
        "bellhop-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "bellhop-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "data-[selected]"],
    },
    {
      pattern:
        /^(text-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "data-[selected]"],
    },
    {
      pattern:
        /^(border-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "data-[selected]"],
    },
    {
      pattern:
        /^(ring-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:neutral|red|orange|amber|yellow|lime|green|teal|blue|indigo|violet|purple|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },

    // custom colors charts
    ...["[#32a852]", "[#fcba03]"].flatMap((customColor) => [
      `bg-${customColor}`,
      `border-${customColor}`,
      `hover:bg-${customColor}`,
      `hover:border-${customColor}`,
      `hover:text-${customColor}`,
      `fill-${customColor}`,
      `ring-${customColor}`,
      `stroke-${customColor}`,
      `text-${customColor}`,
      `data-[selected]:bg-${customColor}]`,
      `data-[selected]:border-${customColor}]`,
      `data-[selected]:text-${customColor}`,
    ]),
  ],
};
