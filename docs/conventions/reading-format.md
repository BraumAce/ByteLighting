# 阅读记录格式规范

适用于 `src/program/reading/{year}/{year}.{month}.md` 月度阅读记录。

## Frontmatter

```yaml
---
title: "{year}.{month} 期"
order: -{month}             # 负序，新月份排在前
category:
  - 文章
---
```

正文起始：`# {year}.{month} 期` + `<!-- more -->`。

## 单条记录格式

```markdown
- [文章标题](文章链接)：{一句话点明文章核心，让读者扫一眼就能决定是否点开}
```

描述要求：

- 一句话不分段，开门见山给出方法论 / 核心观点 / 关键路径
- 技术术语保留英文（AGENTS.md、Harness、SDD 等）
- 不写「值得一读」「干货满满」等无信息量的修饰语

示例：

```markdown
- [一个文件让 AI Coding 效率翻倍：AGENTS.md 实践指南](https://...)：怎么写好一份「给 AI 看的 README」——遵循「地图，而非手册」原则，配合仓库聚合、验证闭环、lint 自动化、参考项目源码引入，让 AI「打开即理解、改完即验证」。
```

## 日期分组

同月内按日期降序，使用 `## {month}.{day}` 小标题：

```markdown
## 5.7

- [文章 A](url)：描述...

## 5.6

- [文章 B](url)：描述...
```

未明确日期的可不带 `##` 标题，直接置于正文起始。

## AI 协作

作者贴链接让 AI 补描述时：

1. **抓正文走 `web-access` skill**：公众号必走；其他页面 `WebFetch` 失败再切。多篇并行时分治给子 Agent（prompt 写「必须加载 web-access skill 并遵循指引」），子 Agent 只回传摘要。禁用 exa、`mcp__claude-in-chrome__*`、自起 `--remote-debugging-port`。
2. 按上述格式补全，不调整原有顺序与分组。
