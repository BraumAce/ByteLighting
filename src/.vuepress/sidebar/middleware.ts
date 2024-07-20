import { arraySidebar } from "vuepress-theme-hope";

export const middleware = arraySidebar([
  {
    text: "Redis",
    icon: "redis",
    prefix: "Redis/",
    children: "structure",
  },
  {
    text: "RabbitMQ",
    icon: "rabbitmq",
    prefix: "MQ/",
    children: "structure",
  },
  {
    text: "MinIO",
    icon: "minio",
    prefix: "MinIO/",
    children: "structure",
  },
]);