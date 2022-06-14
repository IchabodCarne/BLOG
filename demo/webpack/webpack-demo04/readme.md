webpack管理资源

1. 加载css
为了在 JavaScript 模块中 import 一个 CSS 文件，你需要安装 style-loader 和 css-loader，并在 module 配置 中添加这些 loader：
npm install --save-dev style-loader css-loader
webpack.config.js下配置module
module: {
    rules: [
        {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
        }
    ]
}
webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。
2. 加载 images 图像
npm install --save-dev file-loader
module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
}

3. 加载 fonts 字体

4. 加载数据
此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理加载这三类文件：
npm install --save-dev csv-loader xml-loader

module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|wpff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
}
新建src/data.xml文件
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>



自定义 JSON 模块 parser

npm install toml yamljs json5 --save-dev



执行打包命令npm run build
