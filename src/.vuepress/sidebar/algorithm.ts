import { arraySidebar } from "vuepress-theme-hope";

export const algorithm = arraySidebar([
  {
    text: "ACM笔记",
    icon: "book",
    prefix: "ACM/",
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