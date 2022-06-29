# 优化(Optimization)

optimization主要用来自定义一些优化打包策略

## optimization.minimize

告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer定义的插件压缩 bundle。默认值：false，不开启

```js
module.exports = {
  //...
  optimization: {
    minimize: true,
  },
};
```

## optimization.minimizer

允许你通过提供一个或多个定制过的 TerserPlugin 实例，覆盖默认压缩工具(minimizer)。

webpack5开箱即带有最新版本的 terser-webpack-plugin。当`mode`为`development`时，webpack会自动使用TerserPlugin执行文件压缩，若希望自定义去配置压缩选项则仍需要安装`terser-webpack-plugin`

```bash
npm install terser-webpack-plugin --save-dev
```

然后将插件添加到你的 webpack 配置文件中。例如：

```js
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        // 是否未引入的外部库生成注释文件
        extractComments: false,
        // 使用多进程并发运行以提高构建速度。 并发运行的默认数量： os.cpus().length - 1 。
        parallel: true,
        // Terser 压缩配置 。
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true, // 删除console
            drop_debugger: true, // 删除debugger
          },
        },
      }),
    ],
  },
};
```

若有其他文件在构建过程中需要压缩，也可以在minimizer中添加相关的配置

## optimization.usedExports

生产模式下，默认开启此选项，`usedExports: true`，对已导出但未使用的代码进行标记，该项配合`TerserPlugin`一起使用，这些已标记的代码将不会打包

### tree shaking

tree shaking 是 webpack 里的术语，用于移除 JS 上下文中未引用过的代码，以减小代码体积，间接减少代码在网络请求过程中的耗时。我把这个称为代码清洁工。需要注意的是 tree shaking 依赖于 ES6 的模块语法 —— import和export。

## optimization.splitChunks

主要作用是提取公共代码，防止代码被重复打包，拆分过大的js文件，合并零散的js文件。

### splitChunks.chunks

决定要提取那些模块。

- `async`: 只提取异步加载的模块出来打包到一个文件中。
  - 异步加载的模块：通过`import('xxx')`或`require(['xxx'],() =>{})`加载的模块。

- `initial`:提取同步加载和异步加载模块，如果xxx在项目中异步加载了，也同步加载了，那么xxx这个模块会被提取两次，分别打包到不同的文件中。
  - 同步加载的模块：通过 import xxx或require('xxx')加载的模块。
  
- `all`: 不管异步加载还是同步加载的模块都提取出来，打包到一个文件中。

### splitChunks.maxSize

把提取出来的模块打包生成的文件大小不能超过maxSize值，如果超过了，要对其进行分割并打包生成新的文件。单位为字节，默认为0，表示不限制大小。

### splitChunks.minSize

规定被提取的模块在压缩前的大小最小值，单位为字节，默认为30000，只有超过了30000字节才会被提取。

### splitChunks.minChunks

表示要被提取的模块最小被引用次数，引用次数超过或等于minChunks值，才能被提取。

### splitChunks.maxAsyncRequests

最大的按需(异步)加载次数，默认为 6。

### splitChunks.maxInitialRequests

打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件），默认为4。

### splitChunks.automaticNameDelimiter

打包生成的js文件名的分割符，默认为~。

### splitChunks.cacheGroups

cacheGrouops的作用就相当于是一个分组条件，满足这个条件输出为一个chunks。

caches的大部分配置和splitChunks相同，自己特有的几个配置如下：

#### cacheGroups.priority

数字越大优先级越高，因为默认值为0，所以自定义的一般是负数形式。

#### cacheGroups.reuseExistingChunk

这个的作用是当前的chunk如果包含了从main里面分离出来的模块，则重用这个模块，这样的问题是会影响chunk的名称。

#### cacheGroups.type

针对模块的类型分类。比如设置type:json将会把json文件构建成一个chunks输出。

#### cacheGroups.test

可以是一个函数也可以是一个正则，函数的返回值是：boolean RegExp string，通过返回值或者正则来进行匹配。

给大家展示一个简单splitChunks的配置

```js
module.exports = {
  //...
  splitChunks: {
    // 同步和异步的模块都打包进一个文件中
    chunks: "all",
    // 切割的模块每个文件大小不超过30000字节
    minSize: 30000,
    // 提取模块大小超过500000字节就进行切割
    maxSize: 500000,
    // 如果被引用的模块次数大于1才将该模块提取出来
    minChunks: 1,
    // 打包模块分组
    cacheGroups: {
      // 把node_modules下的某块进行分组，且分组的文件名称为vendors+output.filename
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/, //符合组的要求就给构建venders
        priority: -10, //优先级用来判断打包到哪个里面去
        name: "vendors", //指定chunks名称
      },
    },
  },
};
```
