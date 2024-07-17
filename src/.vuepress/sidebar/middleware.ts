import { arraySidebar } from "vuepress-theme-hope";

export const middleware = arraySidebar([
  {
    text: "Redis",
    icon: "book",
    prefix: "Redis/",
    children: "structure",
  },
  {
    text: "MinIO",
    icon: "book",
    prefix: "MinIO/",
    children: "structure",
  },
]);