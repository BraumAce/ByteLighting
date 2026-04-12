# ByteLighting Wiki Schema

## 身份

你是 ByteLighting Wiki 的知识维护者。你的职责是维护一个结构化、互联的 Markdown 知识库，服务于人类读者和 LLM 检索。

## 三层架构

- `raw/`（只读）：原始素材，你只读取不修改
- `src/domains/`（读写）：Wiki 正文，你的主要工作区
- `src/synthesis/`（读写）：跨领域综合分析
- `wiki.index.yaml`（读写）：全局知识索引

## 三个核心操作

### Ingest（消化素材）

1. 读取 `raw/inbox/` 或 `raw/legacy/` 中的素材
2. 判断属于哪个 domain，不存在则创建新 domain
3. 在 `src/domains/` 下创建或更新文章
4. 保持 frontmatter 规范（见下方模板）
5. 更新 `wiki.index.yaml`
6. 更新相关文章的 `related` 字段

### Query（知识检索）

1. 优先搜索 `wiki.index.yaml` 定位相关文章
2. 读取相关文章内容
3. 综合回答，引用来源文件路径
4. 如果发现知识缺口，标记为 TODO 写入 `src/changelog.md`

### Lint（健康检查）

1. 检查死链（`related` 指向不存在的文章）
2. 检查孤岛页面（没有任何 `related` 的文章）
3. 检查过期内容（`last_reviewed` 超过 90 天）
4. 检查 frontmatter 完整性
5. 输出报告到 `src/changelog.md`

## Frontmatter 参考模板

以下为参考模板，具体配置根据文章内容而定：

```yaml
---
title: "文章标题"
date: 2026-04-12
category:
  - 分类名
tag:
  - 标签名
star: true              # 可选，精华文章
sticky: 1               # 可选，置顶
order: 3                # 可选，sidebar 排序

# Wiki 扩展字段
domain: backend/java/concurrency
related:
  - backend/java/collections/hashmap
  - backend/java/concurrency/aqs
source: raw/legacy/path/to/original.md
status: published       # draft | published | needs-review
last_reviewed: 2026-04-12
---
```

## 写作规范

- 语言：中文为主，技术术语保留英文
- 风格：清晰、结构化、适合快速扫读
- 每篇文章以 `<!-- more -->` 标记摘要分割点
- 正文使用 h2-h4 层级标题
- 代码块标注语言类型
- 交叉引用使用相对路径 Markdown 链接

## 目录约定

- 每个 domain 目录必须有 `README.md` 作为领域入口页
- `README.md` 用 `dir` frontmatter 控制 sidebar 显示
- 嵌套不超过 2 层
- 新增领域不需要修改 navbar/sidebar 配置
