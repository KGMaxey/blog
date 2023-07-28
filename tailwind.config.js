/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      bg: 'var(--bg)',
      bg0: 'var(--bg0)',
      bg0_h: 'var(--bg0_h)',
      bg0_s: 'var(--bg0_s)',
      bg1: 'var(--bg1)',
      bg2: 'var(--bg2)',
      bg3: 'var(--bg3)',
      bg4: 'var(--bg4)',

      fg: 'var(--fg)',
      fg0: 'var(--fg)',
      fg1: 'var(--fg1)',
      fg2: 'var(--fg2)',
      fg3: 'var(--fg3)',
      fg4: 'var(--fg4)',

      red1: 'var(--red1)',
      red2: 'var(--red2)',
      green1: 'var(--green1)',
      green2: 'var(--green2)',
      yellow1: 'var(--yellow1)',
      yellow2: 'var(--yellow2)',
      blue1: 'var(--blue1)',
      blue2: 'var(--blue2)',
      purple1: 'var(--purple1)',
      purple2: 'var(--purple2)',
      aqua1: 'var(--aqua1)',
      aqua2: 'var(--aqua2)',
      orange1: 'var(--orange1)',
      orange2: 'var(--orange2)',
      gray1: 'var(--gray1)',
      gray2: 'var(--gray2)',

      redDim: 'var(--red-dim)',
      greenDim: 'var(--green-dim)',
      yellowDim: 'var(--yellow-dim)',
      blueDim: 'var(--blue-dim)',
      purpleDim: 'var(--purple-dim)',
      aquaDim: 'var(--aqua-dim)',
      orangeDim: 'var(--orange-dim)',
      grayDim: 'var(--gray-dim)',

      transparent: 'transparent'
    }
  },
  plugins: [],
}
