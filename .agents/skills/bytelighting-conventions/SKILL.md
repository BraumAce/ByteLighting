---
name: bytelighting-conventions
description: ByteLighting 博客（VuePress 2 中文技术博客）的写作与维护规范集合。命中以下任一场景时必须使用：(1) 创建 git commit / push / PR；(2) 编辑 src/program/reading/ 月度阅读记录；(3) 新增、移动、归类 src/ai/ 下任何文件或子目录；(4) 填写或修改文章 frontmatter 的 category / tag 字段；(5) 撰写 src/ 下正文文章（含章节序号、行文风格、代码与图）。规范源文件位于 docs/conventions/{git-commit,reading-format,ai-structure,categorization,article-format}.md。
---

# ByteLighting 写作规范

本 skill 是项目专项规范的统一入口。命中以下场景时，**先 Read 对应文档再动手**，不得凭通用知识或上下文印象处理——规范会迭代，记忆会过期。

> 路径均相对项目根。SKILL.md 仅作索引与触发器，规范正文保留在 `docs/conventions/`，修改规范请改原文件，不要在此复述。

## 触发场景与对应规范

### 1. Git 提交 / PR

**何时触发**：任何 commit 草拟、push、创建 PR 的操作前。

**必读**：`docs/conventions/git-commit.md`

**核心**：本仓库使用自定义 commit 类型与格式，与全局 git 习惯不同；不要套用通用 conventional commits。

---

### 2. 阅读记录（reading）

**何时触发**：编辑 `src/program/reading/{year}/{year}.{month}.md` 或新增月度阅读记录。

**必读**：`docs/conventions/reading-format.md`

**核心**：frontmatter `order: -{month}` + `category: 文章`；正文以 `<!-- more -->` 分隔摘要与正文；条目格式严格，描述要给出方法论 / 关键路径，不写「值得一读」之类无信息量修饰；公众号 / 反爬页面统一走 `web-access` skill（含站点经验 `mp.weixin.qq.com.md`），多篇并行抓时分治给子 Agent；**不要用 exa、不要用 `mcp__claude-in-chrome__*`、不要自起 `--remote-debugging-port` 进程**。

---

### 3. AI 目录归类（src/ai/）

**何时触发**：在 `src/ai/` 下新增文章、移动文件、新建子目录前。

**必读**：`docs/conventions/ai-structure.md`

**核心**：三大分支 `llm/` / `agent/` / `agentic/` 各司其职；`agent/` 下 prompt-engineering、context-engineering、harness-engineering、agentic-engineering 是稳定四子目录；`agentic/` 子目录按需扩展；单组件主线放 `agentic/{component}/`，多组件协同放 `agent/agentic-engineering/`。

---

### 4. 分类与标签（category / tag）

**何时触发**：填写新文章 frontmatter 或修改已有文章的 `category` / `tag` 字段。

**必读**：`docs/conventions/categorization.md`

**核心**：`category` 通常 1 个、对应文章所属目录；`tag` 1-2 个为主、追求精准而非覆盖；优先从已有清单复用，避免近义词分裂（如 `Agent` 与 `智能体` 二选一），英文专名保持官方写法。

---

### 5. 文章正文撰写

**何时触发**：撰写、重写、润色 `src/` 下任何正文文章（不含一级目录 README.md，不含阅读记录）。

**必读**：`docs/conventions/article-format.md`

**核心**：章节序号一律 `1.` `1.1` `1.1.1` 形式（对应 `##` `###` `####`），不用中文数字 / 章节称呼 / emoji 装饰；frontmatter 后 1-3 段摘要 + `<!-- more -->` 分隔；行文去 AI 味——粗体克制（一段最多 1-2 处）、破折号每段最多 1 处、连贯论述写段落而非短列表、章节之间用一两句话承上启下；代码块标语言、优先真实可跑代码；mermaid 用于流程 / 架构 / 关系。

---

## 使用约束

- **凭印象 = 失误**：上述 5 类场景下，**必须**实际 Read 对应规范文档，哪怕你"觉得记得"
- **跨场景叠加**：一次操作可能命中多个场景（例：「写一篇 AI 文章并提交」→ 命中 5 + 3 + 4 + 1），命中几个就读几个
- **新增专项规范的入口**：未来在 `docs/conventions/` 新增规范时，同步在本文件追加触发卡片，并更新顶部 frontmatter `description`
