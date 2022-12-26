import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "生活",
      icon: "like",
      prefix: "Live/",
      children: "structure",
    },
    {
      text: "学习",
      icon: "ability",
      prefix: "Study/",
      children: "structure",
    },
    "slides",
  ],
});
