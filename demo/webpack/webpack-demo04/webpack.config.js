const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  mode: 'development',  // 开发模式
  devtool: 'inline-source-map', // 在开发模式下追踪代码
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 如果不设置，打包完成后资源会直接打包在dist目录下
    // assetModuleFilename: '[contenthash][ext][query]' // 自定义资源模块名称
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 加载 CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 加载 images 图像
        type: 'asset/resource', // 发送一个单独的文件并导出URL，替代file-loader
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        test: /\.(woff|wpff2|eot|ttf|otf)$/i, // 加载 fonts 字体
        type: 'asset/resource', // 发送一个单独的文件并导出URL，替代file-loader
        generator: {
          filename: 'style/[contenthash][ext][query]' 
          // contenthash: 生成的内容产生的 hash
          // ext: 带前缀 . 的扩展名
          // query: 带前缀 ? 的 query
        }
      },
      {
        test: /\.(csv|tsv)$/i, // 加载数据
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      }
    ]
  }
};