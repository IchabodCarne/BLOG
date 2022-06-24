module.exports = {
  // base: "/", // 本地开发放开此注释
  base: "/BLOG/",
  title: "XFJRZ的博客",
  description: "专注前端技术栈分享",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "webpack", link: "/webpack/" },
      { text: "node", link: "/node/" },
      {
        text: "工具",
        link: "/tools/",
        items: [{ text: "git", link: "/tools/git/install/" }],
      },
    ],
    sidebar: {
      "/webpack/": [
        ["", "介绍"],
        {
          title: "入门",
          children: [
            ["/webpack/introduction/install/", "安装与使用"],
            ["/webpack/introduction/dependencies/", "引入外部库"],
            ["/webpack/introduction/loader/", "使用Loader"],
            ["/webpack/introduction/plugin/", "使用Plugin"],
            ["/webpack/introduction/devServe/", "使用DevServe"],
          ],
        },
        {
          title: "配置",
          children: [
            ["/webpack/config/entry/", "入口"],
            ["/webpack/config/output/", "输出"],
            ["/webpack/config/mode/", "模式"],
            ["/webpack/config/module/", "模块"],
            ["/webpack/config/resolve/", "解析"],
            ["/webpack/config/plugin/", "插件"],
            ["/webpack/config/devServer/", "DevServer"],
            // ["/webpack/config/optimization/", "优化"],
          ],
        },
      ],
      "/node/": [
        ["", "介绍"],
        ["/node/fs/", "fs 文件系统"],
      ],
      "/tools/git/": [
        ["/tools/git/install/", "安装与配置"],
        ["/tools/git/uiTool/", "可视化工具"],
      ],
    },
  },
};
