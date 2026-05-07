/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#B87333',
          dark: '#8B5A2B',
        },
        navy: {
          DEFAULT: '#0B2545',
        },
        charcoal: '#1C1C1E',
        cream: '#FAF7F2',
        'warm-white': '#FDFBF6',
        border: '#E8E0D3',
        success: '#2D7A51',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '680px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(11, 37, 69, 0.08)',
        card: '0 2px 8px rgba(11, 37, 69, 0.08)',
        hover: '0 4px 16px rgba(11, 37, 69, 0.12)',
      },
      borderRadius: {
        card: '12px',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
};
