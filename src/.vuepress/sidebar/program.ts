import { arraySidebar } from "vuepress-theme-hope";

export const program = arraySidebar([
  {
    text: "阅读",
    icon: "book",
    prefix: "reading/",
    children: [
      { text: "2026 期", prefix: "2026/", collapsible: true, children: "structure" },
      { text: "2025 期", prefix: "2025/", collapsible: true, children: "structure" },
      { text: "2024 期", prefix: "2024/", collapsible: true, children: "structure" },
    ],
  },
{
    text: "书籍",
    icon: "books",
    prefix: "books/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "杂谈",
    icon: "coffee",
    prefix: "sundry/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "工具",
    icon: "tool",
    prefix: "tools/",
    collapsible: true,
    children: "structure",
  },
]);
