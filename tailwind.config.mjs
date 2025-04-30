/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#b3cdff',
          200: '#80abff',
          300: '#4d8aff',
          400: '#1a68ff',
          500: '#0F52BA', // Primary base color
          600: '#0c42a6',
          700: '#093173',
          800: '#06214d',
          900: '#03102a',
        },
        accent: {
          50: '#fff2ee',
          100: '#ffd6c9',
          200: '#ffbba3',
          300: '#ff9f7e',
          400: '#ff8458',
          500: '#FF7F50', // Accent base color
          600: '#e65a29',
          700: '#b34620',
          800: '#803317',
          900: '#4d1f0e',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.75s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.75s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}