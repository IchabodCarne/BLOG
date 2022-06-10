module.exports = {
  base: "/",
  title: "消费金融组的博客",
  description: "专注前端技术栈分享",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "webpack", link: "/webpack/" },
      { text: "node", link: "/node/" },
    ],
    sidebar: {
      "/webpack/": [
        ["", "介绍"],
        {
          title: "入门",
          children: [
            ["/webpack/introduction/install/", "安装与使用"],
            ["/webpack/introduction/loader/", "使用Loader"],
            ["/webpack/introduction/plugin/", "使用Plugin"],
            ["/webpack/introduction/devServe/", "使用DevServe"],
          ],
        },
        {
          title: "配置",
          children: [
            ["/webpack/entry/", "入口"],
            ["/webpack/output/", "输出"],
            ["/webpack/module/", "模块"],
            ["/webpack/plugin/", "插件"],
          ],
        },
      ],
    },
  },
};
