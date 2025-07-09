import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Neutral Scale / Secondary
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
        // Map gray to neutral for backwards compatibility + custom additions
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
          925: "#050814", // From planner template
          950: "#0e101b",
        },
        // Indigo Scale / Primary
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
        // Rose Scale / Guava
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
        // Red Scale / Destructive
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
        // Amber Scale / Warning
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
        // Green Scale / Success
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
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "bellhop-heading-xl": ["1.75rem", { lineHeight: "2rem" }],
        "bellhop-heading-lg": ["1.5rem", { lineHeight: "1.75rem" }],
        "bellhop-heading-md": ["1.125rem", { lineHeight: "1.5rem" }],
        "bellhop-heading-sm": ["1rem", { lineHeight: "1.25rem" }],
        "bellhop-heading-xs": ["0.875rem", { lineHeight: "1.25rem" }],
        "bellhop-body-sm": ["0.75rem", { lineHeight: "1rem" }],
        "bellhop-body": ["0.875rem", { lineHeight: "1.25rem" }],
        "bellhop-body-lg": ["1rem", { lineHeight: "1.5rem" }],
        "bellhop-metric-lg": ["1.75rem", { lineHeight: "2rem" }],
        "bellhop-metric-md": ["1.5rem", { lineHeight: "1.75rem" }],
        "bellhop-metric-sm": ["1rem", { lineHeight: "1.25rem" }],
      },
      boxShadow: {
        "shadow-xs": "0 0 2px 1px rgb(64 73 104 / 0.06)",
        "shadow-sm":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 3px 4px 0 rgb(64 73 104 / 0.1)",
        "shadow-md":
          "0 0 4px 0 rgb(64 73 104 / 0.1), 0 4px 8px 0 rgb(64 73 104 / 0.1)",
        "shadow-lg":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 12px 16px -2px rgb(64 73 104 / 0.1)",
        "shadow-xl":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 20px 24px -4px rgb(64 73 104 / 0.1)",
        "shadow-2xl":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 24px 48px -12px rgb(64 73 104 / 0.18)",
        "shadow-3xl":
          "0 32px 64px -12px rgb(64 73 104 / 0.14), 0 0 1px 1px rgb(64 73 104 / 0.1)",
      },
      borderWidth: {
        DEFAULT: "1.5px",
        0: "0",
        2: "2.5px",
        3: "3.5px",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(50%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-100%)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideLeftAndFade:
          "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.86, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.86, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

export default config
