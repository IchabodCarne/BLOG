# 入口（entry）

入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。

## Entry

一个需要考虑的规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。

Entry 类型可以是以下三种中的一种或者相互组合：

| 类型 | 例子 | 含义 |
| :----- | :--: | ------- |
| string |  `'./app/entry'`  | 入口模块的文件路径，可以是相对路径。 |
| array |  `['./app/entry1', './app/entry2']`  | 入口模块的文件路径，可以是相对路径。 |
| object |  `{ a: './app/entry-a', b: './app/entry-b1'}`  | 配置多个入口，每个入口生成一个 Chunk |

- 如果是string类型且不设置output filename时，构建会默认生成`main.js`这个入口文件
- 如果时object类型且不设置output filename时，构建会生成`[object key].js`入口文件（将entry的key值作为文件名）
- 如果是 array 类型，所有入口文件会合并到一个文件中去，且不设置output filename时，构建会默认生成`main.js`这个入口文件
