module.exports = {
  // in Tailwind v3+, `purge` is replaced by `content`
  content: [
    './src/**/*.{js,jsx,ts,tsx}',       // your components & pages
    './src/**/*.stories.@(js|jsx|ts|tsx)', // your story files
    './.storybook/**/*.{js,ts,jsx,tsx}', // optional: if you import templates there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
