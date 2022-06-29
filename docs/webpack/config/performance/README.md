# 性能(performance)

配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。这个配置只会在控制台提示你并不会帮助你做打包构建优化

## performance.hints

是否开启性能提示

| value   | 类型    | 说明         |
| ------- | ------- | ------------ |
| false   | boolean | 关闭性能提示 |
| warning | string  | 警告信息     |
| error   | string  | 错误信息     |

在开发环境，我们推荐这样。

```js
module.exports = {
  //...
  performance: {
    hints: 'warning',
  },
};
```

在生产环境构建时，我们推荐使用 hints: "error"，有助于防止把体积巨大的 bundle 部署到生产环境，从而影响网页的性能。

```js
module.exports = {
  //...
  performance: {
    hints: 'error',
  },
};
```

## performance.maxEntrypointSize

入口起点表示针对指定的入口，对于所有资源，要充分利用初始加载时(initial load time)期间。此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。

```js
module.exports = {
  //...
  performance: {
    maxEntrypointSize: 400000,
  },
};
```

当打包生成的入口大于400000kb时，webpack会给出性能提示信息

## performance.maxAssetSize

资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。

## performance.assetFilter

此属性允许 webpack 控制用于计算性能提示的文件。默认函数如下：

```js
function(assetFilename) {
    return !(/\.map$/.test(assetFilename))
};
```

一般我们可以自定义函数来决定webpack针对哪些文件做出性能提示

```js
// 只针对js文件做出性能提示
assetFilter: function (assetFilename) {
  return assetFilename.endsWith(".js");
},
```
