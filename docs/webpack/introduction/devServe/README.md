# 使用DevServe

前面的几节只是让 Webpack 正常运行起来了，但在实际开发中你可能会需要：

1. 提供 HTTP 服务而不是使用本地文件预览；
2. 监听文件的变化并自动刷新网页，做到实时预览；
3. 支持 Source Map，以方便调试。

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

执行`npm run dev`，我们就可以在浏览器中通过`http://localhost:8080/`访问我们搭建项目，若8080端口被占用则依次向后递增访问违背占用的端口8081、8082...

## 实时预览

## Source Map
