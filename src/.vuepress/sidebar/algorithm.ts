import { arraySidebar } from "vuepress-theme-hope";

export const algorithm = arraySidebar([
  {
    text: "模板",
    icon: "book",
    prefix: "template/",
    children: "structure",
  },
  {
    text: "笔记",
    icon: "book",
    prefix: "note/",
    children: "structure",
  },
  {
    text: "剑指offer",
    icon: "book",
    prefix: "for-offer/",
    children: "structure",
  },
  {
    text: "LeetCode",
    icon: "book",
    prefix: "leetcode/",
    children: "structure",
  },
]);