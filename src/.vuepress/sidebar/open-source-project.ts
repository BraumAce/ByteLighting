import { arraySidebar } from "vuepress-theme-hope";

export const openSourceProject = arraySidebar([
  {
    text: "用户中心",
    icon: "user",
    prefix: "user-center/",
    children: "structure",
  },
  {
    text: "用户匹配系统",
    icon: "users",
    prefix: "user-match/",
    children: "structure",
  },
  {
    text: "RPC框架",
    icon: "rpc",
    prefix: "rpc/",
    children: "structure",
  },
  {
    text: "聊天室",
    icon: "wechat",
    prefix: "",
    children: "structure",
  },
  {
    text: "AI智能答题",
    icon: "robot",
    prefix: "",
    children: "structure",
  },
]);