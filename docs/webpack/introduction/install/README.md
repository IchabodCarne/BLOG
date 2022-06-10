# 安装与使用

## 前提条件

本地安装NodeJS，[NodeJs下载地址](https://nodejs.org/en/)

## 本地安装webpack

```bash
// 创建项目目录
mkdir webpack_demo
cd webpack_demo
// 初始化package.json
npm init -y
// 安装webpack
npm install --save-dev webpack webpack-cli
```

## 创建项目文件

```

├── webpack_demo
│ ├── index.html
│ ├── index.js
│ ├── index.css

```

**index.html**

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
</body>
</html>
```

**index.js**

```js
function components() {
  var element = document.createElement("div");
  element.innerHTML = ["Hello", "Webpack"].join(" ");
  return element;
}

document.body.appendChild(components());
```

## 创建webpack配置文件

在项目根目录下创建`webpack.config.js`

```js
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './index.js',
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  }
};
```

在package.json中配置webpack构建命令
```json

"scripts": {
  "build": "webpack --config webpack.config.js"
},

```

## 使用webpack

1. 执行`npm run build`命令
2. 将打包生成的dist中`main.js`文件在index.html中引入

```html
 <script src="./dist/main.js"></script>
```

3. 在浏览器中打开index.html
