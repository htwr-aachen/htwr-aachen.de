const config = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.{json,yaml}": ["prettier --write"],
};

export default config;
