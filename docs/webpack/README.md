# 概念

官网描述：本质上，`webpack` 是一个现代 JavaScript 应用程序的静态模块打包器(`module bundler`)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(`dependency graph`)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 `bundle`

《深入浅出webpack》：Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。 每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出。 在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。

个人理解：将前端应用程序（`vue, typescript, less...`）打包压缩为一个浏览器可运行的代码程序（`html, css, JavaScript`）

#### 参考文档地址

- [webpack中文官网](https://www.webpackjs.com/)
- [深入浅出 Webpack](http://webpack.wuhaolin.cn/)
