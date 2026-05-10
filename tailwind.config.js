/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tralvana Premium Palette
        'tralvana-black':   '#0A0A0F',
        'tralvana-dark':    '#10101A',
        'tralvana-card':    '#16162A',
        'tralvana-border':  '#2A2A4A',
        'tralvana-gold':    '#C9A84C',
        'tralvana-gold-light': '#E8C96A',
        'tralvana-ivory':   '#F5F0E8',
        'tralvana-white':   '#FFFFFF',
        'tralvana-blue':    '#1E3A5F',
        'tralvana-teal':    '#0D7377',
        'tralvana-muted':   '#8A8AA0',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,1) 100%)',
        'card-gradient': 'linear-gradient(145deg, #16162A 0%, #1C1C35 100%)',
        'section-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #10101A 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201, 168, 76, 0.15)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 60px rgba(201, 168, 76, 0.1)',
      },
    },
  },
  plugins: [],
}
