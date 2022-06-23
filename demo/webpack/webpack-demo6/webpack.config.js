// ./webpack.config.js
// 一定记得运行 Webpack 前先注释掉这里。
// import { Configuration } from "webpack";
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/**
 * @type {Configuration}
 */
const config = {
  entry: "./main.js",
  output: {
    filename: "js/chunk-vendors.[hash:7].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".vue"],
    mainFiles: ["index"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "../src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "images/[name].[hash:7].[ext]",
              // 在url-loader内部封装了file-loader 而file-loader在新版本中esModule属性默认为true 即默认使用ES模块语法
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Vue3 Webpack",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      templateParameters: {
        BASE_URL: "/",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new TerserWebpackPlugin({
      extractComments: false,
      terserOptions: {
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
        },
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      //  将在“服务器”模式下使用的主机启动HTTP服务器。
      analyzerHost: "127.0.0.1",
      //  将在“服务器”模式下使用的端口启动HTTP服务器。
      analyzerPort: 8888,
    }),
  ],
  devServer: {
    open: true,
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
  performance: {
    hints: false,
    maxEntrypointSize: 1000000,
    maxAssetSize: 200000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: 4,
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
    },
  },
  devtool:
    process.env.NODE_ENV === "development"
      ? "eval-cheap-module-source-map"
      : false,
  mode: "production",
};

module.exports = config;
