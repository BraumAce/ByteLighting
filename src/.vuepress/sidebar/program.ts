import { arraySidebar } from "vuepress-theme-hope";

export const program = arraySidebar([
  {
    text: "AI",
    icon: "AI",
    prefix: "ai/",
    children: "structure",
  },
  {
    text: "文章",
    icon: "text",
    prefix: "article/",
    children: "structure",
  },
  {
    text: "书籍",
    icon: "bookshelf",
    prefix: "book/",
    children: "structure",
  },
  {
    text: "工具搭建",
    icon: "tizi",
    prefix: "tool-build/",
    children: "structure",
  },
  {
    text: "杂项",
    icon: "edit",
    prefix: "sundry/",
    children: "structure",
  },
]);