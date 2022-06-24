# fs 文件系统

`fs` 模块提供了许多非常实用的函数来访问文件系统并与文件系统进行交互。

无需安装。 作为 Node.js 核心的组成部分，可以通过简单地引用来使用它：

```js
const fs = require('fs')
```

下面通过一个例子来介绍相关的api

## 使用fs创建vueLocal某个功能下的文件及目录

> 使用此工具快速创建新增交易目录

```js
const fs = require("fs");
const path = require("path");

class Mkdir {
  constructor(
    targetPath = "",
    disStructure = { parent: "", childDirStructure: [] }
  ) {
    this.targetPath = targetPath;
    this.disStructure = disStructure;
  }

  mkdir(dirPath = "") {
    try {
      const stat = fs.statSync(dirPath);
      if (stat.isDirectory) {
        console.error(`Error: The ${dirPath} has exists`);
        return;
      }
    } catch (error) {
      return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true }, (err, path) => {
          if (err) {
            reject(err);
          }
          resolve(path);
        });
      });
    }
  }

  async _mkdirHandler(dirPath = "", directory = []) {
    const executor = async (rootPath = "", dirName = "") => {
      const childPath = await this.mkdir(path.join(rootPath, dirName));
      return childPath;
    };

    for (const dir of directory) {
      if (typeof dir === "string") {
        await executor(dirPath, dir);
      } else if ({}.toString.call(dir) === "[object Object]") {
        const path = await executor(dirPath, dir.parent);
        await this._mkdirHandler(path, dir.child);
      }
    }
  }

  _createDir() {
    return new Promise((resolve, reject) => {
      if (!this.disStructure?.parent) {
        reject("The file directory is incorrectly configured");
      }
      if (!Array.isArray(this.disStructure?.childDirStructure)) {
        reject("The file directory is incorrectly configured");
      }
      try {
        const dirPath = path.join(this.targetPath || __dirname, this.disStructure.parent)
        const parentPath = await this.mkdir(dirPath)
        await this._mkdirHandler(parentPath, this.disStructure.childDirStructure)
        resolve()
      } catch (error) {
        console.error('Error creating directory', error)
      }
    });
  }

  create() {
    this._createDir()
  }
}

module.exports = Mkdir

```

调用样例

```js
const Mkdir = require("./Mkdir");

const dirs = {
  parent: "pension",
  childDirStructure: [
    "components",
    {
      parent: "pensionLCZQ",
      child: ["change", "deposit", "depositRecord", "detail"],
    },
    {
      parent: "pensionZCLQ",
      child: ["change", "detail", "list", "withdraw"],
    },
    {
      parent: "pensionZCZQ",
      child: [
        "detail",
        {
          parent: "purchase",
          child: ["components", "images"],
        },
        "withdraw",
      ],
    },
  ],
};

const mk = new Mkdir("./test", dirs);
mk.create();

```

下面为大家介绍上面的demo所使用的node API

## fs.statSync

> fs.statSync()方法用于同步返回有关给定文件路径的信息。返回的fs.Stat对象具有多个字段和方法，以获取有关文件的更多详细信息。

*用法：*

```js
fs.statSync( path, options )
```

*参数：*

- path:它包含必须检查的文件的路径。它可以是字符串，缓冲区或URL。
- options:该对象可用于指定将影响输出的可选参数。它具有一个可选参数：
  - bigint:它是一个布尔值，它指定fs.Stats对象中返回的数值是否为bigint。默认值为false。

*返回值：*

返回一个Stats对象，其中包含文件路径的详细信息。
