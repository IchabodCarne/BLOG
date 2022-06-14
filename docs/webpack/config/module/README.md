# 模块（module）

模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。

## 配置Loader

在官网概念中，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。所以要处理其他模块的文件需要借助模块转换器`Loader`

### module.rules

rules 配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。 配置一项 rules 时大致通过以下方式：

1. 条件(condition)：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。
2. 结果(result)：匹配条件的文件需要使用那种loader
3. 嵌套规则(nested rule)：对于匹配的文件使用loader时，我们可能会过滤哪些文件或者只加载哪些文件

下面来通过一个例子来说明具体使用方法：

```js
module: {
  rules: [
    {
      // 匹配所有后缀名为.css的文件
      test: /\.css$/,
      // 对于匹配到的css文件我们对其使用style-loader,css-loader转换器
      use: ["style-loader", "css-loader"],
      // 排除node_modules目录下的css文件不使用loader
      exclude: [path.resolve(__dirname, "node_modules")],
    },
    {
      // 匹配所有后缀名为.vue的文件
      test: /\.vue$/,
      // 对于匹配到的vue文件我们对其使用vue-loader转换器
      use: ["vue-loader"],
      // 对src目录下所有vue文件使用vue-loader
      include: [path.resolve(__dirname, "src")],
    },
  ],
},
```
