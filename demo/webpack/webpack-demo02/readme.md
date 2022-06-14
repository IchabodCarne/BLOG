###使用配置文件webpack.config.js
```js
    const path = require('path');

    module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    };
```


###执行打包命令
```bash
npx webpack --config webpack.config.js
```

如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用的。