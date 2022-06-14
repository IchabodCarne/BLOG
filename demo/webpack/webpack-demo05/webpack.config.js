const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 在开发模式下追踪代码
  devServer: {
    static: './dist'
  },
  // 插件
  plugins: [
    // 先清除dist打包
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  // 入口
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  // 出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 在生成文件之前清空 output 目录
    publicPath: '/',
  },
  // 公共模块提取
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};