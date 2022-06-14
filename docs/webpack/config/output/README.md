# 输出（output）

输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。

## filename

`output.filename` 配置输出文件的名称，为string 类型。 如果只有一个输出文件，则可以把它写成静态不变的：

```js
filename: 'bundle.js'
```

如果不设置filename则默认生成`main.js`

Webpack提供了模板来帮助我们定义输出文件名，主要用于多入口的配置

| 变量名 | 含义 |
|---|---|
|id|Chunk 的唯一标识，从0开始|
|name|Chunk 的名称|
|hash|Chunk 的唯一标识的 Hash 值|
|chunkhash|Chunk 内容的 Hash 值|

其中 hash 和 chunkhash 的长度是可指定的，[hash:8] 代表取8位 Hash 值，默认是20位。

```js
filename: '[id].js'
filename: '[name].js'
filename: '[hash].js'
filename: '[chunkhash].js'
filename: '[hash:10].js'
filename: '[chunkhash:15].js'
```

## path

`output.path` 配置输出文件存放在本地的目录，必须是 string 类型的绝对路径。通常通过 Node.js 的 path 模块去获取绝对路径：

```js
// path为node的path模块
// resolve：生成一个绝对路径
// __dirname: 当前目录的绝对路径
path: path.resolve(__dirname, 'dist')
```

path一般都设置dist为输出目录，如果不设置path，默认生成的也是dist目录

## publicPath

在复杂的项目里可能会有一些构建出的资源需要异步加载，加载这些异步资源需要对应的 URL 地址。

`output.publicPath` 配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径。

当我们配置了`publicPath`，在实际应用中生产中我们代码中某个静态文件就会加上这个前缀

```js
publicPath: 'https://cdn.example.com/assets/'
```

```html
<script src='https://cdn.example.com/assets/a_12345678.js'></script>
```
