# 使用DevServe

前面的几节只是让 Webpack 正常运行起来了，但在实际开发中你可能会需要：

1. 提供 HTTP 服务而不是使用本地文件预览；
2. 监听文件的变化并自动刷新网页，做到live reloading(实时重新加载)，并具有hot module replacement(热模块替换)的本地服务；
3. 支持 Source Map，以方便开发环境调试。

## HTTP 服务

webpack已经提供了一套开发工具<font style="font-size: 18px; color: #4183C4">DevServer</font>,
首先安装`webpack-dev-server`

```bash
npm i -D webpack-dev-server
```

在package.json中配置服务启动命令

```json
"scripts": {
  "dev": "webpack-dev-server",
},
```

在webpack.config.js中配置服务
```js
devServer: {
  static: './dist', // 将 dist 目录下的文件 serve 到 localhost:8080 下
  hot: true // 从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的
},
```

执行`npm run dev`，我们就可以在浏览器中通过`http://localhost:8080/`访问我们搭建项目，若8080端口被占用则依次向后递增访问未被占用的端口8081、8082...

## 实时预览

接着上面的步骤，你可以试试修改 index.js index.css 中的任何一个文件，保存后你会发现浏览器会被自动刷新，运行出修改后的效果。

Webpack 在启动时可以开启监听模式，开启监听模式后 Webpack 会监听本地文件系统的变化，发生变化时重新构建出新的结果。Webpack 默认是关闭监听模式的，你可以在启动 Webpack 时通过 webpack --watch 来开启监听模式。

通过 DevServer 启动的 Webpack 会开启监听模式，当发生变化时重新执行完构建后通知 DevServer。 DevServer 会让 Webpack 在构建出的 JavaScript 代码里注入一个代理客户端用于控制网页，网页和 DevServer 之间通过 WebSocket 协议通信， 以方便 DevServer 主动向客户端发送命令。 DevServer 在收到来自 Webpack 的文件变化通知时通过注入的客户端控制网页刷新。

如果尝试修改 index.html 文件并保存，你会发现这并不会触发以上机制，导致这个问题的原因是 Webpack 在启动时会以配置里的 entry 为入口去递归解析出 entry 所依赖的文件，只有 entry 本身和依赖的文件才会被 Webpack 添加到监听列表里。 而 index.html 文件是脱离了 JavaScript 模块化系统的，所以 Webpack 不知道它的存在。

webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 devMiddleware.publicPath 选项进行修改。

## Source Map

在浏览器中运行的 JavaScript 代码都是编译器输出的代码，这些代码的可读性很差。如果在开发过程中遇到一个不知道原因的 Bug，则你可能需要通过断点调试去找出问题。 在编译器输出的代码上进行断点调试是一件辛苦和不优雅的事情， 调试工具可以通过 Source Map 映射代码，让你在源代码上断点调试。 Webpack 支持生成 Source Map，只需要在`webpack.config.js`中设置Source Map我们就可以开启代码调试了。

```js
devtool: "source-map",
```
