import { arraySidebar } from "vuepress-theme-hope";

export const middleware = arraySidebar([
  {
    text: "Redis",
    icon: "book",
    prefix: "Redis/",
    children: "structure",
  },
  {
    text: "消息队列",
    icon: "book",
    prefix: "MQ/",
    children: "structure",
  },
  {
    text: "MinIO",
    icon: "book",
    prefix: "MinIO/",
    children: "structure",
  },
]);