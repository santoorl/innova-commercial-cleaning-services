module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Incluye todos los archivos donde usas Tailwind
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'hover-zoom': 'hoverZoom 0.5s ease-in-out',
        'slide-fade-in': 'slideFadeIn 1s ease-in-out', // Nueva animación
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hoverZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideFadeIn: { // Nueva animación
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Fuente personalizada
      },
      colors: {
        primary: '#1E40AF', // Azul personalizado (opcional)
        secondary: '#FACC15', // Amarillo personalizado (opcional)
      },
    },
  },
  plugins: [],
};
