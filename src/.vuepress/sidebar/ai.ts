import { arraySidebar } from "vuepress-theme-hope";

export const ai = arraySidebar([
  {
    text: "大模型",
    icon: "gpt",
    prefix: "llm/",
    collapsible: true,
    children: "structure",
  },
]);
