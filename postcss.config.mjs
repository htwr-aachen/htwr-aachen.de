// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
