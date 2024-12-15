import { arraySidebar } from "vuepress-theme-hope";

export const openProject = arraySidebar([
  {
    text: "用户中心",
    icon: "user",
    prefix: "user-center/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "用户匹配系统",
    icon: "users",
    prefix: "user-match/",
    collapsible: true,
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
    prefix: "chat-room/",
    children: "structure",
  },
  {
    text: "AI智能答题",
    icon: "robot",
    prefix: "ai-answer/",
    children: "structure",
  },
  {
    text: "面试吧刷题平台",
    icon: "mianshi",
    prefix: "mianshiba/",
    collapsible: true,
    children: "structure",
  },
]);