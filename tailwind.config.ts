import type { Config } from 'tailwindcss'
import { applyButtonClasses, applyPrimaryColorAndShade } from '@istic-ui/react'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@istic-ui/react/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border)-brand-(0|100|200|300|400|500|600|700|800|900|950)$/,
    },
    {
      pattern: /btn-(filled|outline|subtle|light)$/,
    },
    {
      pattern: /rounded-(input|button|search-input)-(xs|sm|md|lg|xl)$/,
    },
  ],
  theme: {
    primaryShade: 400,
    primaryColor: 'brand',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#ffffff',
        success: '#7FDD37',
        warning: '#EABF00',
        info: '#00A5FF',
        error: '#F4422E',

        muted: '#A0A4A8',
        brand: {
          '950': '#500c0c',
          '900': '#900c0c',
          '800': '#af0505',
          '700': '#cc0000',
          '600': '#fc0606',
          '500': '#ff2626',
          '400': '#ff5959',
          '300': '#ff9595',
          '200': '#ffc1c1',
          '100': '#ffdddd',
          '50': '#fff0f0',
        },

        neutral: {
          '900': '#212529',
          '800': '#343A40',
          '700': '#495057',
          '600': '#868E96',
          '500': '#ADB5BD',
          '400': '#CED4DA',
          '300': '#DEE2E6',
          '200': '#E9ECEF',
          '100': '#F1F3F5',
          '50': '#F8F9FA',
        },
        grey: {
          '900': '#212529',
          '800': '#343A40',
          '700': '#495057',
          '600': '#868E96',
          '500': '#ADB5BD',
          '400': '#CED4DA',
          '300': '#DEE2E6',
          '200': '#E9ECEF',
          '100': '#F1F3F5',
          '50': '#F8F9FA',
        },
      },
      fontFamily: {
        default: ['"Onset", sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '1rem',
        md: '1.05rem',
        lg: '1.125rem',
        xl: '1.25rem',
        'button-xs': '0.75rem',
        'button-sm': '0.875rem',
        'button-md': '1rem',
        'button-lg': '1.125rem',
        'button-xl': '1.25rem',
        'title-h1': '3rem',
        'title-h2': '2.5rem',
        'title-h3': '2rem',
        'title-h4': '1.5rem',
        'title-h5': '1.25rem', 
      },
      fontWeight: {
        regular: '200', 
        medium: '500',
        bold: '700',
      },
      lineHeight: {
        text: '150%',
        title: '150%',
      },
      borderRadius: {
        'input-xs': '5px',
        'input-lg': '5px',

        'search-input-xs': '5px',
        'search-input-lg': '5px',

        'button-xs': '5px',
        'button-sm': '5px',
        'button-md': '5px',
        'button-lg': '5px',
        'button-xl': '5px',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.4',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translate3d(-50%, 100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(-50%, -50%, 0)' },
        },
        'fade-out-up': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'chip-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'chip-scale-right': {
          '0%': {
            transform: 'scaleX(0.6)',
            transformOrigin: '0% 0%',
            opacity: '1',
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: '0% 0%',
            opacity: '1',
          },
        },
        'progress-bar': {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        fadeIn: 'fade-in .2s ease-in-out',
        fadeInLeft: 'fade-in-left .2s ease-in-out',
        fadeInRight: 'fade-in-right .2s ease-in-out',
        fadeInUp: 'fade-in-up 0.3s ease-in-out',
        fadeInDown: 'fade-in-down 0.2s ease-in-out',
        fadeOutUp: 'fade-out-up 0.2s ease-in-out',
        chipFadeIn: 'chip-fade-in 0.3s ease-in-out',
        chipScaleRight:
          'chip-scale-right 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        progressBar: 'progress-bar linear',
      },
    },
  },
  plugins: [applyButtonClasses, applyPrimaryColorAndShade],
}
export default config
