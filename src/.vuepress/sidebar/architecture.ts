import { arraySidebar } from "vuepress-theme-hope";

export const architecture = arraySidebar([
  {
    text: "系统设计",
    icon: "design",
    prefix: "system-design/",
    children: [
        {
            text: "架构模式",
            icon: "pattern",
            prefix: "pattern/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "认证鉴权",
            icon: "security",
            prefix: "security/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "评论系统",
            icon: "comment",
            prefix: "comment/",
            collapsible: true,
            children: "structure",
        },
        {
            text: "点赞系统",
            icon: "good",
            prefix: "upvote/",
            collapsible: true,
            children: "structure",
        },
    ],
  },
  {
    text: "软考-系统架构设计师",
    icon: "grade",
    prefix: "ruankao-system-architect/",
    children: [
        {
            "text": "软件工程",
            "prefix": "software-engineering/",
            "collapsible": true,
            "children": "structure"
        },
        {
            "text": "系统分析与设计",
            "prefix": "system-analysis-design/",
            "collapsible": true,
            "children": "structure"
        },
    ],
  },
  {
    text: "Spring Cloud Alibaba",
    icon: "alibaba",
    prefix: "spring-cloud-alibaba/",
    children: "structure",
  },
]);