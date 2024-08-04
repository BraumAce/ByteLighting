import { arraySidebar } from "vuepress-theme-hope";

export const algorithm = arraySidebar([
  {
    text: "模板",
    icon: "template",
    prefix: "template/",
    children: "structure",
  },
  {
    text: "笔记",
    icon: "note",
    prefix: "note/",
    children: "structure",
  },
  {
    text: "剑指offer",
    icon: "offer",
    prefix: "for-offer/",
    children: "structure",
  },
  {
    text: "LeetCode",
    icon: "leetcode",
    prefix: "leetcode/",
    children: [
        {
            text: "热题 100",
            prefix: "hot100/",
            collapsible: true,
            children: "structure",
        },
        "另一棵树的子树",
    ],
  },
]);