# ByteLighting LLM Wiki 改造设计

## 概述

将 ByteLighting 博客从人工写作模式改造为 LLM Wiki——基于 Karpathy 的 llm-wiki 模式，LLM 持续维护一个结构化、互联的 Markdown 知识库。保留 VuePress + theme-hope 博客体验，同时支持 Obsidian 浏览和 LLM 检索。

### 核心理念

> LLM 不是每次查询时重新 RAG 检索，而是持续维护一个持久化的 Wiki。脏活累活（分类、交叉引用、更新、一致性检查）交给 LLM，人类专注于素材收集和方向指引。

### 目标

- 人和 LLM 共同维护，不区分谁写的
- LLM 逐步重写/升级旧文章，形成统一知识体系
- 保留 theme-hope 博客阅读体验（时间线、分类、标签、评论等）
- 支持 Obsidian 浏览 + 图谱视图 + 实时查看 LLM 编辑
- 支持 LLM 通过 llms.txt（线上）和本地文件检索（本地）查询知识库
- 内容领域完全开放，方向由人决定

---

## 模块一：目录结构与三层架构

```
ByteLighting/
├── CLAUDE.md                    # Schema 层：LLM 行为规范
├── raw/                         # Raw 层（LLM 只读）
│   ├── legacy/                  # 现有文章（git mv 保留历史）
│   │   ├── algorithm/
│   │   ├── architecture/
│   │   ├── computer/
│   │   ├── framework/
│   │   ├── open-project/
│   │   └── program/
│   └── inbox/                   # 素材投放区（Obsidian/人工丢入）
│       └── .gitkeep
├── src/                         # Wiki 层（LLM 维护 + 人工可写）
│   ├── .vuepress/               # VuePress 框架配置
│   ├── domains/                 # 知识领域（核心内容区）
│   │   ├── ai/                  # AI
│   │   ├── backend/             # 后端
│   │   ├── algorithms/          # 算法
│   │   ├── cs-fundamentals/     # 计算机
│   │   └── blog/                # 程序人生
│   ├── synthesis/               # 综合分析（跨领域对比/趋势）
│   ├── changelog.md             # Wiki 变更日志
│   ├── intro.md                 # 关于作者
│   └── README.md                # 博客首页
└── wiki.index.yaml              # 全局知识索引（LLM 维护）
```

### 三层架构

| 层 | 路径 | 权限 | 职责 |
|---|---|---|---|
| Raw 层 | `raw/` | LLM 只读 | 原始素材、旧文章存档 |
| Wiki 层 | `src/domains/`, `src/synthesis/` | LLM 读写 | 知识库正文 |
| Schema 层 | `CLAUDE.md` | 人工维护 | 定义 LLM 行为规范 |

### Domains 子目录

```
domains/
├── ai/                       # AI
│   ├── llm/                  #   大模型应用
│   └── ...
├── backend/                  # 后端
│   ├── java/                 #   Java 语言 & JUC
│   ├── spring/               #   Spring Boot / Cloud
│   ├── mybatis/              #   MyBatis / MyBatis-Plus
│   ├── databases/            #   MySQL / MongoDB
│   ├── middleware/            #   Redis / MinIO 等
│   ├── architecture/         #   系统设计 & 架构
│   └── projects/             #   项目实战
├── algorithms/               # 算法
│   ├── notes/                #   算法笔记
│   ├── leetcode/             #   LeetCode 题解
│   ├── for-offer/            #   面试算法
│   └── templates/            #   算法模板
├── cs-fundamentals/          # 计算机
│   ├── operating-system/     #   操作系统
│   ├── design-pattern/       #   设计模式
│   └── big-data/             #   大数据
└── blog/                     # 程序人生
    ├── books/                #   读书笔记
    ├── tools/                #   工具研究
    └── sundry/               #   杂谈
```

Domains 是开放的，LLM 可按需创建新领域目录。

---

## 模块二：文章 Frontmatter 规范

以下为参考模板，具体配置根据文章内容而定：

```yaml
---
# === theme-hope 标准字段 ===
title: "ConcurrentHashMap 深度解析"
date: 2026-04-12
category:
  - Java
  - 并发编程
tag:
  - ConcurrentHashMap
  - 线程安全
star: true              # 可选，精华文章
sticky: 1               # 可选，置顶
order: 3                # 可选，sidebar 排序

# === Wiki 扩展字段 ===
domain: backend/java/concurrency
related:
  - backend/java/collections/hashmap
  - backend/java/concurrency/aqs
source: raw/legacy/computer/language/java/JUC并发编程/15.xxx.md
status: published       # draft | published | needs-review
last_reviewed: 2026-04-12
---
```

### 字段说明

**theme-hope 标准字段**（驱动博客功能）：
- `title` / `date` / `category` / `tag` — 博客列表、时间线、分类、标签
- `star` / `sticky` — 精华标记、置顶
- `order` — sidebar 排序
- 其他 theme-hope frontmatter 字段按需使用

**Wiki 扩展字段**（theme-hope 忽略，供 LLM/Obsidian 使用）：
- `domain` — 所属知识领域路径
- `related` — 关联文章路径列表
- `source` — 溯源，从哪个 raw 素材 ingest 而来
- `status` — 文章状态
- `last_reviewed` — LLM 最后一次 lint 检查日期

---

## 模块三：CLAUDE.md Schema

放在仓库根目录，Claude Code 打开项目时自动加载：

```markdown
# ByteLighting Wiki Schema

## 身份
你是 ByteLighting Wiki 的知识维护者。你的职责是维护一个结构化、
互联的 Markdown 知识库，服务于人类读者和 LLM 检索。

## 三层架构
- raw/（只读）：原始素材，你只读取不修改
- src/domains/（读写）：Wiki 正文，你的主要工作区
- src/synthesis/（读写）：跨领域综合分析
- wiki.index.yaml（读写）：全局知识索引

## 三个核心操作

### Ingest（消化素材）
1. 读取 raw/inbox/ 或 raw/legacy/ 中的素材
2. 判断属于哪个 domain，不存在则创建新 domain
3. 在 src/domains/ 下创建或更新文章
4. 保持 frontmatter 规范
5. 更新 wiki.index.yaml
6. 更新相关文章的 related 字段

### Query（知识检索）
1. 优先搜索 wiki.index.yaml 定位相关文章
2. 读取相关文章内容
3. 综合回答，引用来源文件路径
4. 如果发现知识缺口，标记为 TODO 写入 changelog.md

### Lint（健康检查）
1. 检查死链（related 指向不存在的文章）
2. 检查孤岛页面（没有任何 related 的文章）
3. 检查过期内容（last_reviewed 超过 90 天）
4. 检查 frontmatter 完整性
5. 输出报告到 changelog.md

## 写作规范
- 语言：中文为主，技术术语保留英文
- 风格：清晰、结构化、适合快速扫读
- 每篇文章以 `<!-- more -->` 标记摘要分割点
- 正文使用 h2-h4 层级标题
- 代码块标注语言类型
- 交叉引用使用相对路径 Markdown 链接

## 目录约定
- 每个 domain 目录必须有 README.md 作为领域入口页
- README.md 用 dir frontmatter 控制 sidebar 显示
- 嵌套不超过 2 层
- 新增领域不需要修改 navbar/sidebar 配置
```

---

## 模块四：wiki.index.yaml 全局索引

LLM 检索入口 + Obsidian 图谱数据源：

```yaml
version: 1
last_updated: 2026-04-12

domains:
  ai:
    title: AI
    description: 大模型应用、Prompt 工程、Agent 等
    children:
      llm:
        title: 大模型应用
        pages:
          - path: domains/ai/llm/prompt-best-practices.md
            title: Prompt 最佳实践
            tags: [Prompt, LLM]
            related: [domains/ai/llm/agent-skills.md]

  backend:
    title: 后端
    description: Java、Spring、数据库、中间件、架构设计等
    children:
      java:
        title: Java
        children:
          concurrency:
            title: 并发编程
            pages:
              - path: domains/backend/java/concurrency/concurrent-hashmap.md
                title: ConcurrentHashMap 深度解析
                tags: [ConcurrentHashMap, 线程安全]
                related: [domains/backend/java/collections/hashmap.md]

  algorithms:
    title: 算法
    description: 数据结构与算法、LeetCode、面试算法
    children: ...

  cs-fundamentals:
    title: 计算机
    description: 操作系统、设计模式、大数据
    children: ...

  blog:
    title: 程序人生
    description: 读书笔记、工具研究、杂谈
    children: ...

synthesis:
  - path: synthesis/java-vs-go-concurrency.md
    title: Java vs Go 并发模型对比
    domains: [backend, cs-fundamentals]
```

---

## 模块五：工作流与集成

### 工作流 A：对话驱动（Claude Code）

```
用户说 "写一篇关于 Redis 持久化的文章"
  → Claude Code 读取 CLAUDE.md 了解规范
  → 读取 wiki.index.yaml 检查是否已有相关文章
  → 在 src/domains/backend/middleware/ 下创建文章
  → 更新 wiki.index.yaml 和相关文章的 related
  → Obsidian 实时看到新文章出现
```

### 工作流 B：素材驱动（Inbox）

```
用户把笔记/链接/PDF 丢到 raw/inbox/
  → 在 Claude Code 中说 "ingest inbox"
  → LLM 扫描 inbox 中的新素材
  → 判断属于哪个 domain
  → 生成或更新 wiki 文章
  → 将已处理的素材移到 raw/inbox/processed/
  → 更新索引
```

### Obsidian 集成

Obsidian 直接打开 `src/` 目录作为 Vault：
- 图谱视图：文章间通过 `related` 和正文链接构建关联
- 实时编辑：LLM 在仓库里写文件，Obsidian 实时刷新
- 人工写作：直接在 Obsidian 里写 Markdown
- `.obsidian/` 加入 `.gitignore`

### VuePress 配置

**Navbar：**

```typescript
export default navbar([
  { text: "AI", icon: "AI", link: "/domains/ai/" },
  { text: "后端", icon: "server", link: "/domains/backend/" },
  { text: "算法", icon: "code", link: "/domains/algorithms/" },
  { text: "计算机", icon: "computer", link: "/domains/cs-fundamentals/" },
  { text: "程序人生", icon: "coffee", link: "/domains/blog/" },
  {
    text: "关于本站",
    icon: "about",
    children: [
      { text: "全部文章", icon: "books", link: "/article/" },
      { text: "关于作者", icon: "about", link: "/intro.html" },
      { text: "更新历史", icon: "history", link: "/timeline/" },
    ],
  },
]);
```

**Sidebar（全部 structure 自动生成）：**

```typescript
export default sidebar({
  "/domains/ai/": "structure",
  "/domains/backend/": "structure",
  "/domains/algorithms/": "structure",
  "/domains/cs-fundamentals/": "structure",
  "/domains/blog/": "structure",
  "/synthesis/": "structure",
});
```

**图标库：** 使用现有 iconfont 图标库（`font_4608718_q9hih6ec37.css`，108 个图标），无需更换。

### .gitignore 新增

```
src/.obsidian/
raw/inbox/processed/
```

---

## 模块六：迁移策略

### 阶段一：搭骨架

1. 创建 `raw/inbox/`、`raw/legacy/` 目录
2. 创建 `wiki.index.yaml` 空索引
3. 编写 CLAUDE.md Schema
4. 在 `src/` 下创建新目录结构 + 每个目录的 README.md
5. 更新 navbar.ts、sidebar/index.ts
6. `.gitignore` 加入 `src/.obsidian/`
7. 网站可构建，新导航可用

### 阶段二：搬旧文章 + 首批 Ingest

1. `git mv src/{algorithm,architecture,computer,framework,open-project,program} raw/legacy/`
2. 删除旧的 sidebar 配置文件
3. LLM 从 legacy 中挑选 20-30 篇核心文章 ingest
4. 初始化 wiki.index.yaml
5. 网站有首批内容上线

### 阶段三：持续 Ingest

1. LLM 分批处理剩余 legacy 文章（每批 10-20 篇）
2. 新素材通过 inbox 或对话指令添加
3. 渐进式完成，可持续数天/数周
4. `raw/legacy/` 始终保留完整备份

### 关键原则

- 阶段一和阶段二可在一个会话完成
- 阶段三是长期渐进的
- 任何时候可通过 `raw/legacy/` 回溯
- git 历史通过 `git mv` 保留
