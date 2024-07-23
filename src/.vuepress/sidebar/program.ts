import { arraySidebar } from "vuepress-theme-hope";

export const program = arraySidebar([
  {
    text: "书籍",
    icon: "bookshelf",
    prefix: "book/",
    children: "structure",
  },
  {
    text: "文章",
    icon: "text",
    prefix: "article/",
    children: "structure",
  },
  {
    text: "工具搭建",
    icon: "tizi",
    prefix: "tool-build/",
    children: "structure",
  },
]);