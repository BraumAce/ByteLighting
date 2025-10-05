import { arraySidebar } from "vuepress-theme-hope";

export const program = arraySidebar([
  {
    text: "AI",
    icon: "AI",
    prefix: "ai/",
    children: [
        {
            text: "文章",
            prefix: "article/",
            collapsible: true,
            expanded: true,
            children: "structure",
        },
    ],
  },
  {
    text: "阅读",
    icon: "text",
    prefix: "read/",
    children: [
        {
            text: "阅读记录",
            link: "阅读记录.md",
        },
        {
            text: "2025 期",
            prefix: "2025/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "2024 期",
            prefix: "2024/",
            collapsible: true,
            children: "structure",
        },
    ],
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