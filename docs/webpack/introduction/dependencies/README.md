# 引入外部库

在前端项目中我们进场需要引入其他库（axios, vue, lodash...）来帮助我们实现某些功能或者使用这些库已经封装好的方法方法或者功能

## 引入lodash

>Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
[lodash](https://www.lodashjs.com/)

### 安装lodash

```bash
npm install lodash
```

### 使用

从 Webpack2 开始，已经内置了对 ES6、CommonJS、AMD 模块化语句的支持。我们在index.js中引入lodash并且使用

```js
import _ from "lodash";

function components() {
  var element = document.createElement("div");
  // join方法等同于Array.join()
  element.innerHTML = _.join(["Hello", "Webpack"], " ");
  return element;
}

document.body.appendChild(components());
```

### 执行构建打包

执行`npm run build`命令，打包构建后我们会发现main.js中已经有了lodash的代码并且生成了`main.js.LICENSE.txt`文件，打开index.html发现页面也已经达到了我们想要的结果

***注：main.js.LICENSE.txt是lodash中的代码注释，webpack单独将注释文件提取了出来，若不需要生成此文件则需要修改webpack.config.js中的配置***

```js
// 用于处理 js 的压缩和混淆，通过 webpack plugin 的方式对代码进行处理
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...
  // webpack优化配置
  optimization: {
    // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer定义的插件压缩 bundle。
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  }
  ...
}

```
