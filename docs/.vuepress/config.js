module.exports = {
  base: "/",
  title: "消费金融组的博客",
  description: "专注前端技术栈分享",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "webpack", link: "/webpack/" },
    ],
    sidebar: {
      "/webpack/": [
        ["", "介绍"],
        ["/webpack/install/", "安装"],
        ["/webpack/entry/", "入口"],
        ["/webpack/output/", "输出"],
        ["/webpack/module/", "模块"],
        ["/webpack/plugin/", "插件"],
        ["/webpack/server/", "开发服务"],
      ],
    },
  },
};
