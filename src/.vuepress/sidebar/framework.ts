import { arraySidebar } from "vuepress-theme-hope";

export const framework = arraySidebar([
  {
    text: "Spring",
    icon: "spring",
    prefix: "spring/",
    children: "structure",
  },
  {
    text: "SpringBoot",
    icon: "spring-boot",
    prefix: "spring-boot/",
    children: "structure",
  },
  {
    text: "SpringCloud",
    icon: "spring-cloud",
    prefix: "spring-cloud/",
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