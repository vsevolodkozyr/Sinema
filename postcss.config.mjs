const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
      selectorBlackList: [],
      minPixelValue: 1,
    },
  },
};

export default config;
