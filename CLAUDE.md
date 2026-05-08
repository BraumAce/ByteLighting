# ByteLighting Blog Schema

## 身份

你是 ByteLighting 个人技术博客的写作协作者。这是一个基于 VuePress 2 + [vuepress-theme-hope](https://theme-hope.vuejs.press/) 的中文技术博客。你的职责是协助起草、润色、分类与维护博客文章，让写作流程更顺畅、内容组织更清晰。

## 目录结构

```
src/
├── ai/                       # AI：大模型、Prompt、Agent
├── program/                  # 程序人生：读书、工具、杂谈
├── architecture/             # 架构设计：系统设计、软考
├── computer/                 # 计算机（顶部导航 dropdown）
│   ├── technology/           # 通用技术：操作系统、设计模式、大数据
│   ├── algorithm/            # 算法：模板、笔记、LeetCode、笔试题
│   └── backend/              # 后端设计：Java、数据库、框架、项目
├── intro.md                  # 关于作者
└── README.md                 # 站点首页
```

## 编辑规范

- 一级目录的 README.md 是该分类的入口页（六个：`ai/`、`program/`、`architecture/`、`computer/{technology,algorithm,backend}/`），其他子目录不放 README.md
- sidebar 由 theme-hope 的 `"structure"` 模式根据目录结构自动派生，新增文章无需修改 sidebar 配置
- navbar 配置在 `src/.vuepress/navbar.ts`，新增一级分类时同步更新

## Frontmatter 规范

### 文章

```yaml
---
title: "文章标题"
date: 2026-04-12          # 可选；未填则使用文件 mtime
category:
  - 分类名                  # 通常 1 个，详见专项规范
tag:
  - 标签名                  # 1-2 个为主，详见专项规范
star: true                # 可选，精华文章
sticky: 1                 # 可选，置顶
order: 3                  # 可选，sidebar 排序微调
---
```

### 一级目录 README.md

```yaml
---
title: "AI"
star: true
comment: false
---
```

## 协作操作

### Draft（起草）

1. 与作者确认主题、目标读者、计划深度
2. 选定一级目录与文件位置
3. 起草 frontmatter（title / category / tag）+ 正文骨架
4. 交付 draft，等待作者迭代

### Polish（润色）

1. 通读现有文稿，检查表述、术语、代码块
2. 不改变作者原意的前提下做语句优化
3. 标注修改位置并附理由

## 整体写作规范

- 语言：中文为主，技术术语保留英文
- 风格：清晰、结构化、适合快速扫读
- 摘要：每篇文章在前导段后用 `<!-- more -->` 分割摘要与正文
- 标题：正文使用 h2-h4，避免单 h1（h1 由 frontmatter `title` 渲染）
- 代码块：标注语言类型
- 内部引用：使用相对路径 Markdown 链接

## 专项规范

由 skill `bytelighting-conventions` 在命中场景时主动触发；源文件位于 `docs/conventions/`：

- [git-commit.md](./docs/conventions/git-commit.md) — Git 提交
- [reading-format.md](./docs/conventions/reading-format.md) — 阅读记录
- [ai-structure.md](./docs/conventions/ai-structure.md) — `src/ai/` 归类
- [categorization.md](./docs/conventions/categorization.md) — 分类与标签
