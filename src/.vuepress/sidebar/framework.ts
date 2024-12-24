import { arraySidebar } from "vuepress-theme-hope";

export const framework = arraySidebar([
  {
    text: "SpringBoot",
    icon: "spring-boot",
    prefix: "spring-boot/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "SpringCloud",
    icon: "spring-cloud",
    prefix: "spring-cloud/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "MyBatis",
    icon: "mybatis",
    prefix: "mybatis/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "MyBatis-Plus",
    icon: "mybatis-plus",
    prefix: "mybatis-plus/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Vue",
    icon: "vue",
    prefix: "vue/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "RuoYi",
    icon: "ruoyi",
    prefix: "ruoyi/",
    collapsible: true,
    children: "structure",
  },
]);