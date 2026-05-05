import { arraySidebar } from "vuepress-theme-hope";

export const algorithm = arraySidebar([
  {
    text: "模板",
    icon: "template",
    prefix: "templates/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "笔记",
    icon: "note",
    prefix: "notes/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "力扣",
    icon: "leetcode",
    prefix: "leetcode/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "笔试",
    icon: "offer",
    prefix: "for-offer/",
    collapsible: true,
    children: "structure",
  },
]);
