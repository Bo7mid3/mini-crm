module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@root": "./src",
            "@styles": "./src/styles",
            "@layouts": "./src/layouts",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@rest-services": "./src/rest-services",
            "@ws-services": "./src/rest-services",
            "@store": "./src/store",
            "@helpers": "./src/helpers",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
