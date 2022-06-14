安装node.js
在开始之前，请确保安装了 Node.js 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能，或者缺少相关 package。
安装webpack
本地安装
    要安装最新版本或特定版本，请运行以下命令之一：
    npm install --save-dev webpack
    npm install --save-dev webpack@<version>
    如果你使用 webpack v4+ 版本，你还需要安装 CLI。
    npm install --save-dev webpack-cli
    建议本地安装
    对于大多数项目，我们建议本地安装。这可以在引入突破式变更(breaking change)版本时，更容易分别升级项目。通常会通过运行一个或多个 npm scripts 以在本地 node_modules 目录中查找安装的 webpack，来运行 webpack：
    "scripts": {
        "build": "webpack --config webpack.config.js"
    }
    想要运行本地安装的 webpack，你可以通过 node_modules/.bin/webpack 来访问它的 bin 版本。

全局安装
    npm install --global webpack
    不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

最新体验版本
    如果你热衷于使用最新版本的 webpack，你可以使用以下命令安装 beta 版本，或者直接从 webpack 的仓库中安装：
    npm install webpack@beta
    npm install webpack/webpack#<tagname/branchname>
    在安装这些最新体验版本时要小心！它们可能仍然包含 bug，因此不应该用于生产环境。










模块热替换，每次修改都需要重新打包，有些麻烦，使用模块热替换可以简化开发
模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。本页面重点介绍其实现，而 概念 页面提供了更多关于它的工作原理以及为什么它有用的细节。
HMR 不适用于生产环境，这意味着它应当用于开发环境。更多详细信息，请查看 生产环境 指南。

启用 HMR