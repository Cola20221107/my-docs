import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "生活",
    icon: "creative",
    prefix: "/zh/Live/",
    children: [
      {
        text: "Notes",
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
    icon: "creative",
    prefix: "/zh/Study/",
    children: [
      {
        text: "BVideo",
        icon: "creative",
        prefix: "BVideo/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Project",
        icon: "config",
        prefix: "Project/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Question",
        icon: "config",
        prefix: "Question/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Skills",
        icon: "config",
        prefix: "Skills/",
        children: ["", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
