const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const config = merge(common, {
  cache: {
    buildDependencies: {
      // This makes all dependencies of this file - build dependencies
      config: [__filename],
      // 默认情况下 webpack 与 loader 是构建依赖。
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    open: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  // performance: {
  //   hints: "warning",
  // },
  mode: "development",
});

module.exports = config;
