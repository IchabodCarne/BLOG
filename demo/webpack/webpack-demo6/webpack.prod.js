const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // css代码切割
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    // 打包文件分析
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8888,
    }),
  ],
  performance: {
    hints: "error",
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      // js代码压缩
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
      // css代码压缩
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 50000,
      minChunks: 1,
    },
  },
  mode: "production",
});

module.exports = config;
