import { arraySidebar } from "vuepress-theme-hope";

export const backend = arraySidebar([
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsible: true,
    children: [
      { text: "Java 基础", prefix: "base/", collapsible: true, children: "structure" },
      { text: "JUC", prefix: "concurrency/", collapsible: true, children: "structure" },
    ],
  },
  {
    text: "数据库",
    icon: "database",
    prefix: "database/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "框架",
    icon: "framework",
    prefix: "framework/",
    collapsible: true,
    children: [
      { text: "Spring", prefix: "spring/", collapsible: true, children: "structure" },
      { text: "MyBatis", prefix: "mybatis/", collapsible: true, children: "structure" },
      { text: "中间件", prefix: "middleware/", collapsible: true, children: "structure" },
    ],
  },
  {
    text: "项目",
    icon: "application",
    prefix: "project/",
    collapsible: true,
    children: "structure",
  },
]);
