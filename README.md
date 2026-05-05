# ByteLighting

<p align="center">
	<img src="./docs/ByteLighting.png" alt="" style="zoom:50%; width:200px; height:auto;" align="center" />
</p>
<p align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/license-MIT-%2397c900">
    <img alt="Static Badge" src="https://img.shields.io/badge/Vue-3.5-%2333a06f">
    <img alt="Static Badge" src="https://img.shields.io/badge/VuePress-2.0.0--rc.28-%233eaf7c">
    <img alt="Static Badge" src="https://img.shields.io/badge/VuePress--Theme--Hope-2.0.0--rc.106-%232980b9">
</p>

**在线地址：https://blog.bytelighting.cn**

## 简介

ByteLighting 是一个个人技术博客，记录工程实践、知识沉淀与学习笔记。基于 VuePress 2 + [vuepress-theme-hope](https://theme-hope.vuejs.press/) 构建。

## 内容分类

- [AI](https://blog.bytelighting.cn/ai/) — 大模型应用、Prompt 工程、Agent
- [程序人生](https://blog.bytelighting.cn/program/) — 读书笔记、工具研究、杂谈
- [架构设计](https://blog.bytelighting.cn/architecture/) — 系统设计、软考系统架构师
- 计算机
  - [通用技术](https://blog.bytelighting.cn/computer/technology/) — 操作系统、设计模式、大数据
  - [算法](https://blog.bytelighting.cn/computer/algorithm/) — 算法笔记、模板、LeetCode、笔试题
  - [后端设计](https://blog.bytelighting.cn/computer/backend/) — Java、数据库、框架、项目实战

## 目录结构

```
ByteLighting/
├── CLAUDE.md              # 协作者写作规范
├── deploy.sh              # 部署脚本
├── package.json           # 依赖与脚本
├── src/                   # 站点源码
│   ├── .vuepress/         # 主题与构建配置
│   ├── ai/
│   ├── program/
│   ├── architecture/
│   ├── computer/
│   ├── intro.md
│   └── README.md          # 首页
└── dev-ops/               # 部署相关（Nginx / Docker）
```

## 特性

- LLM 友好：生成 [llms.txt](https://blog.bytelighting.cn/llms.txt) 供外部 LLM 检索
- 全文搜索：SlimSearch 客户端搜索
- RSS 订阅：Atom / RSS 格式
- 评论系统：Giscus
- PWA 支持

## 关于本站

- [全部文章](https://blog.bytelighting.cn/article/)
- [更新历史](https://blog.bytelighting.cn/timeline/)
- [关于作者](https://blog.bytelighting.cn/intro.html)

**本站支持：**
- Theme：[VuePress-Theme-Hope](https://theme-hope.vuejs.press/)
- 云存储：[ByteCloud](https://cloud.bytelighting.cn/)

## 勘误及提问

如果有疑问或者发现错误，可以在相应的 Issues 进行提问或勘误，也可以在 [ByteLighting](https://blog.bytelighting.cn) 网站对应的文章底部留言。

如果喜欢或者有所启发，欢迎 Star!
