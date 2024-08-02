import { arraySidebar } from "vuepress-theme-hope";

export const architecture = arraySidebar([
  {
    text: "系统设计",
    icon: "",
    prefix: "system-design/",
    children: "structure",
  },
  {
    text: "Spring Cloud Alibaba",
    icon: "alibaba",
    prefix: "spring-cloud-alibaba/",
    children: "structure",
  },
]);