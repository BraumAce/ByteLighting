import { arraySidebar } from "vuepress-theme-hope";

export const technology = arraySidebar([
  {
    text: "操作系统",
    icon: "operating-system",
    prefix: "operating-system/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "大数据",
    icon: "big-data",
    prefix: "big-data/",
    collapsible: true,
    children: "structure",
  },
]);
