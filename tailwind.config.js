/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#080E21',
          800: '#101836',
          700: '#1A2342',
          600: '#232D4F',
          500: '#2D385D',
        },
        neon: {
          pink: '#FF00FF',
          cyan: '#00FFFF',
          purple: '#9D00FF',
          green: '#00FF66',
          yellow: '#FFFF00',
          red: '#FF2D55',
        },
        terminal: {
          green: '#33FF33',
          amber: '#FFB000',
          red: '#FF3333',
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'system-ui'],
        'mono': ['Inconsolata Variable', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.97' },
          '5%': { opacity: '0.9' },
          '10%': { opacity: '0.97' },
          '15%': { opacity: '0.92' },
          '20%': { opacity: '0.97' },
          '25%': { opacity: '0.94' },
          '30%': { opacity: '0.97' },
          '35%': { opacity: '0.93' },
          '40%': { opacity: '0.97' },
          '45%': { opacity: '0.95' },
          '50%': { opacity: '0.97' },
          '55%': { opacity: '0.89' },
          '60%': { opacity: '0.97' },
          '65%': { opacity: '1' },
          '70%': { opacity: '0.97' },
          '75%': { opacity: '0.96' },
          '80%': { opacity: '0.97' },
          '85%': { opacity: '0.98' },
          '90%': { opacity: '0.97' },
          '95%': { opacity: '0.92' },
          '100%': { opacity: '0.97' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        flicker: 'flicker 5s linear infinite',
        scanline: 'scanline 8s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};