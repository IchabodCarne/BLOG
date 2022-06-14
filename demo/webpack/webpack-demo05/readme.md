webpack管理输出
npm install --save-dev html-webpack-plugin


设置 HtmlWebpackPlugin 会自动生产html文件
plugins: [
    new HtmlWebpackPlugin({
        title: '管理输出'
    })
]

清理 /dist 文件夹 
clean-webpack-plugin  是一个流行的清理插件，安装和配置它



webpack-dev-middleware
  是一个封装器(wrapper),它可以把 webpack 处理过的文件发送到一个 server。webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。


代码分离

    SplitChunksPlugin 用于将相同引用的js 从主应用程序中分离。

    mini-css-extract-plugin 用于将 CSS 从主应用程序中分离。

执行打包命令npm run build
