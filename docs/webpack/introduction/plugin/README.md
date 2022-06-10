# 使用插件

Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。

## html-webpack-plugin

前两节操作已经可以把css文件和index.js成功构建，但是html文件还在项目根目录下并没有打包进dist中，因此我们需要使用`html-webpack-plugin`插件帮助我们实现此功能

首先需要安装`html-webpack-plugin`

```bash
npm i -D html-webpack-plugin
```

修改`webpack.config.js`配置

```js
const path = require("path");
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  // 在插件选项中使用构造函数去实例化插件
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

执行`npm run build`重新构建项目工程，此时会发现dist目录已经自动生成了一个index.html，并且插件已经帮助我们自动dist中的main.js引入。但是在项目初始化的我们已经自己创建了index.html，所以我们通过构造函数参数传递一些配置参数来实现加载我们自己的index.html

> 需要注释掉手动引入的main.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Project</title>
</head>
<body>
  <!-- <script src="./dist/main.js"></script> -->
</body>
</html>
```

> 更改HtmlWebpackPlugin配置

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 已给定路径的文件当作html模板去创建文件
    }),
  ],
```

#### html-webpack-plugin参考文档
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
