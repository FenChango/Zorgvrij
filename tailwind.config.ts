import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/features/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b5d6ff",
          300: "#85bbff",
          400: "#549aff",
          500: "#2d7dff",
          600: "#1d63e6",
          700: "#174ec0",
          800: "#183f96",
          900: "#193873",
        },
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
    },
  },
  plugins: [],
} satisfies Config;
