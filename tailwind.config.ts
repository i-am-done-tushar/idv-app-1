import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Dashboard specific colors
        "primary-text": "hsl(var(--primary-text))",
        "secondary-text": "hsl(var(--secondary-text))",
        "placeholder-text": "hsl(var(--placeholder-text))",
        "light-grey-bg": "hsl(var(--light-grey-bg))",
        "grey-bg": "hsl(var(--grey-bg))",
        "border-color": "hsl(var(--border-color))",
        "header-border": "hsl(var(--header-border))",
        "table-header-bg": "hsl(var(--table-header-bg))",
        "positive-bg": "hsl(var(--positive-bg))",
        "warning-bg": "hsl(var(--warning-bg))",
        "warning-text": "hsl(var(--warning-text))",
        "completed-bg": "hsl(var(--completed-bg))",
        "pink-accent": "hsl(var(--pink-accent))",
        "avatar-1": "hsl(var(--avatar-1))",
        "avatar-2": "hsl(var(--avatar-2))",
        "avatar-3": "hsl(var(--avatar-3))",
        "avatar-4": "hsl(var(--avatar-4))",
        "avatar-5": "hsl(var(--avatar-5))",
        "avatar-6": "hsl(var(--avatar-6))",
        "avatar-7": "hsl(var(--avatar-7))",
        "avatar-8": "hsl(var(--avatar-8))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
