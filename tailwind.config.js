/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Add these new colors
        'glass-white': 'rgba(255, 255, 255, 0.15)',
        'frosted-bg': 'rgba(255, 255, 255, 0.95)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        '3d': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'neumorphic': '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.8)'
      }
    }
    },
  plugins: [],
}