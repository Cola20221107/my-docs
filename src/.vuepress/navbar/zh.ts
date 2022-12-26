import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "生活",
    icon: "like",
    prefix: "/zh/Live/",
    children: [
      {
        text: "随记",
        icon: "creative",
        prefix: "Notes/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "XiaoEr",
        icon: "config",
        prefix: "XiaoEr/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "学习",
    icon: "ability",
    prefix: "/zh/Study/",
    children: [
      {
        text: "哔哩哔哩",
        icon: "creative",
        prefix: "BVideo/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "项目",
        icon: "config",
        prefix: "Project/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "常见问题",
        icon: "config",
        prefix: "Question/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "日常技巧",
        icon: "config",
        prefix: "Skills/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "关于我",
    icon: "at",
    link: "https://github.com/Cola20221107",
  },
]);
