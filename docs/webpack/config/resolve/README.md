# 解析（resolve）

Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。 Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你也可以根据自己的需要修改默认的规则。

## alias

创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：

```js
alias: {
  '@': path.resolve(__dirname, 'src')
}
```

现在，替换「在导入时使用相对路径」这种方式，就像这样：

```js
import Component from '@/component/Input.vue'
```

## extensions

自动解析确定的扩展。默认值为：

```js
extensions: [".js", ".json"]
```

能够使用户在引入模块时不带扩展：

```js
import File from '../path/to/file'
```
