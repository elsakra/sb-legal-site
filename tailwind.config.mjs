/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Safelist critical responsive classes to prevent purging
  safelist: [
    'hidden',
    'block',
    'flex',
    'grid',
    'sm:block',
    'sm:hidden',
    'sm:flex',
    'md:block',
    'md:hidden',
    'md:flex',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'lg:block',
    'lg:hidden',
    'lg:flex',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    // Reveal animation classes
    'revealed',
    'opacity-0',
    'translate-y-8',
  ],
  theme: {
    extend: {
      colors: {
        // Cooley-inspired red palette - deeper, richer for premium feel
        primary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#EF4444',
          500: '#C41E1E',  // Deeper, richer Cooley red
          600: '#A91B1B',
          700: '#8E1818',
          800: '#731515',
          900: '#581212',
          950: '#3D0A0A',
        },
        // Gold/brass accent for conservative firms
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#B8860B',  // Rich brass/gold
          600: '#A16207',
          700: '#854D0E',
          800: '#713F12',
          900: '#5C3D14',
        },
        // Secondary navy palette - for conservative firms
        navy: {
          50: '#EEF2F7',
          100: '#D9E2ED',
          200: '#B3C5DB',
          300: '#8DA8C9',
          400: '#678BB7',
          500: '#1E3A5F',
          600: '#1A3352',
          700: '#152B46',
          800: '#112339',
          900: '#0D1B2D',
          950: '#080F19',
        },
        // Dark charcoal backgrounds
        charcoal: {
          50: '#F7F7F8',
          100: '#EEEEF0',
          200: '#D9D9DD',
          300: '#B8B8BF',
          400: '#91919C',
          500: '#737381',
          600: '#5D5D69',
          700: '#4C4C56',
          800: '#414149',
          900: '#1A1A1D',  // Rich near-black
          950: '#0F0F11',  // Deep premium black
        },
        // Neutral grays
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Success/warning for badges
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        // Premium serif for headlines - Cormorant Garamond is more elegant
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        // Alternative serif for variety
        serif: ['Playfair Display', 'Georgia', 'serif'],
        // Clean sans-serif for body
        body: ['Inter', 'system-ui', 'sans-serif'],
        // Monospace for badges/tags
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Extended dramatic scale for Cooley-style headlines
        '4.5xl': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6.5xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        '9xl': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '10xl': ['8rem', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.04em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.1em',
        'widest': '0.25em',
        'ultra-wide': '0.35em',
      },
      lineHeight: {
        'tightest': '0.85',
        'tighter': '0.9',
        'tight': '0.95',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'premium': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'premium-lg': '0 35px 60px -15px rgb(0 0 0 / 0.3)',
        'glow': '0 0 40px rgba(196, 30, 30, 0.15)',
        'glow-red': '0 0 60px rgba(196, 30, 30, 0.25)',
        'glow-gold': '0 0 60px rgba(184, 134, 11, 0.2)',
        'inner-glow': 'inset 0 0 40px rgba(196, 30, 30, 0.1)',
      },
      animation: {
        'slide-left': 'slideLeft 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'fade-down': 'fadeDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'fade-right': 'fadeRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
