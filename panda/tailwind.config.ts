import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-4": "#3d4a3e",
        "green-3": "#6d7f6e",
        "green-2": "#a0afa1",
        "green-1": "#adebb3",
        "light-blue": "#5ed4fe",
        "dark-blue": "#009dc5",
        "blackbean": "330F0A",
        "babypow": "FDFFFC",
        "coolgray": "8A89C0",
        "logoblue": "083D77",
        "sienna": "D7816A"
      },
    },
  },
  plugins: [],
};



export default config;
