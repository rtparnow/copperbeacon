/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // All semantic colors use CSS variables (RGB channels) so dark mode
        // and opacity modifiers (e.g. bg-copper/10) both work automatically.
        copper: {
          DEFAULT: 'rgb(var(--copper) / <alpha-value>)',
          dark: 'rgb(var(--copper-dark) / <alpha-value>)',
        },
        navy: 'rgb(var(--navy) / <alpha-value>)',
        // Surface / text tokens — old names kept so existing templates need no rename
        cream: 'rgb(var(--bg-primary) / <alpha-value>)',
        'warm-white': 'rgb(var(--bg-secondary) / <alpha-value>)',
        charcoal: 'rgb(var(--text-primary) / <alpha-value>)',
        border: 'rgb(var(--border-color) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        // Both sans and serif map to Inter — no Fraunces in this theme.
        // Existing font-serif classes automatically render as Inter.
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        h2: ['clamp(2rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        h3: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '720px',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.05)',
        card: '0 1px 3px rgb(0 0 0 / 0.06)',
        hover: '0 2px 8px rgb(0 0 0 / 0.08)',
      },
      borderRadius: {
        btn: '6px',
        card: '10px',
      },
      letterSpacing: {
        hero: '-0.04em',
        h2: '-0.03em',
        h3: '-0.02em',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        200: '200ms',
      },
    },
  },
  plugins: [],
};
