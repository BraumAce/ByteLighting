import { arraySidebar } from "vuepress-theme-hope";

export const computer = arraySidebar([
  {
    text: "编程语言",
    icon: "code",
    prefix: "language/",
    children: [
        {
            text: "C/C++",
            icon: "c",
            prefix: "c++/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Java",
            icon: "java",
            prefix: "java/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Python",
            icon: "python",
            prefix: "python/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "大模型",
    icon: "gpt",
    prefix: "llm/",
    children: [
        {
            text: "大模型应用",
            icon: "application",
            prefix: "application/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "计算机网络",
    icon: "network",
    prefix: "network/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "数据库",
    icon: "database",
    prefix: "database/",
    children: [
        {
            text: "MySQL",
            icon: "mysql",
            prefix: "mysql/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Redis",
            icon: "redis",
            prefix: "redis/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Mongo",
            icon: "mongo",
            prefix: "mongo/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "操作系统",
    icon: "operating-system",
    prefix: "operating-system/",
    children: [
        {
            text: "OS",
            icon: "os",
            prefix: "os/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Linux",
            icon: "linux",
            prefix: "linux/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "设计模式",
    icon: "design-mode",
    prefix: "design-mode/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "中间件",
    icon: "middleware",
    prefix: "middleware/",
    children: [
        {
            text: "MinIO",
            icon: "minio",
            prefix: "MinIO/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "MQ",
            icon: "MQ",
            prefix: "MQ/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "kafka",
            icon: "kafaka",
            prefix: "kafka/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Presto",
            icon: "presto",
            prefix: "presto/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "大数据",
    icon: "big-data",
    prefix: "big-data/",
    collapsible: true,
    children: "structure",
  },
  {
    text: "常用工具",
    icon: "tool",
    prefix: "tool/",
    children: [
        {
            text: "Git",
            icon: "git",
            prefix: "git/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "Docker",
            icon: "docker",
            prefix: "docker/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
]);