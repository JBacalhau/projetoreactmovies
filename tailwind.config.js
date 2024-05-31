/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors : {
        'brand-blue-900' : '#00030A',
        'brand-blue-700' : '#000E2A',
        'brand-blue-200' : '#00B1E9',
        'brand-yellow-200' : '#FAFF00',        
      },
      backgroundImage : {
        'banner-home' : 'url(assets/background.jpg)',
        'banner-filmes' : 'url(assets/bg-filmes.jpg)',
        'banner-series' : 'url(assets/bg-series.jpg)',
      }

    },
  },
  plugins: [],
}

