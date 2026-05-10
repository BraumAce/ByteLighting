import { arraySidebar } from "vuepress-theme-hope";

export const ai = arraySidebar([
  {
    text: "大模型",
    icon: "gpt",
    prefix: "llm/",
    collapsible: false,
    children: "structure",
  },
  {
    text: "智能体",
    icon: "application",
    prefix: "agent/",
    collapsible: false,
    children: [
      { text: "提示词工程", prefix: "prompt-engineering/", collapsible: true, children: "structure" },
      { text: "上下文工程", prefix: "context-engineering/", collapsible: true, children: "structure" },
      { text: "驾驭工程", prefix: "harness-engineering/", collapsible: true, children: "structure" },
      { text: "Agentic", prefix: "agentic-engineering/", collapsible: true, children: "structure" },
    ],
  },
  {
    text: "工程化组件",
    icon: "gpt-guide",
    prefix: "agentic/",
    collapsible: false,
    children: [
      { text: "Skills", prefix: "skills/", collapsible: true, children: "structure" },
      { text: "RAG", prefix: "rag/", collapsible: true, children: "structure" },
    ],
  },
]);
