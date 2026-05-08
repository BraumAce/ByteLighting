# AI 目录结构与归类规范

`src/ai/` 下分三大分支，归类时**先判分支，再判子目录**。

## 目录结构

```
src/ai/
├── llm/                          # 纯粹围绕 LLM 本身的内容
├── agent/                        # 智能体应用工程（Agent 怎么用好）
│   ├── prompt-engineering/       # 提示词工程
│   ├── context-engineering/      # 上下文工程
│   ├── harness-engineering/      # 驾驭工程（agent harness、控制循环、评测闭环）
│   └── agentic-engineering/      # 其他 Agent 相关，不便归入上面三类的兜底
└── agentic/                      # Agent 基建与工具类（Agent 用什么）
    ├── skills/                   # Skills 体系
    ├── rag/                      # 检索增强
    ├── mcp/                      # Model Context Protocol
    └── memory/                   # 记忆系统
    └── ...                       # 后续按需新增
```

## 三大分支判定

| 分支       | 范围                                                                 | 典型主题                                    |
| ---------- | -------------------------------------------------------------------- | ------------------------------------------- |
| `llm/`     | 大模型本体：原理、训练、推理、对齐、benchmark、模型对比              | Transformer、RLHF、蒸馏、模型评测、SFT      |
| `agent/`   | 把 Agent 用好的方法学：怎么设计、怎么提示、怎么管上下文、怎么验证   | Prompt 模板、上下文裁剪、agent loop、评测  |
| `agentic/` | Agent 周边的可复用组件、协议、基础设施                              | Skills、MCP、RAG、Memory、向量库、工具链  |

**判定口诀：** 谈 LLM 本身 → `llm/`；谈"怎么用 LLM 干活" → `agent/`；谈"用什么砖盖楼" → `agentic/`。

## `agent/` 子目录判定

| 子目录                  | 收什么                                                                   |
| ----------------------- | ------------------------------------------------------------------------ |
| `prompt-engineering/`   | 提示词写法、prompt 调试、System Prompt 设计、few-shot / CoT 等技法       |
| `context-engineering/`  | 上下文窗口管理、信息组织与压缩、长上下文策略、记忆与检索的上下文层      |
| `harness-engineering/`  | Agent 控制循环、工具编排、评测闭环、自动化 harness、loop / dispatcher    |
| `agentic-engineering/`  | 综合性 Agent 工程实践：跨组件协同、端到端案例、整体复盘、资源汇总      |

**优先级：** 能归到前三类就不用兜底。`agentic-engineering/` 只接收明确无法划入 prompt / context / harness 的内容。

**与 `agentic/` 的分工：** `agentic/{component}/` 收**单组件深度**内容（专精领域），`agentic-engineering/` 收**多组件协同**内容（综合工程）。判定看主线组件数：

- 单组件主线（哪怕是实战案例）→ `agentic/{对应子目录}/`
  - 例："用 RAG 做长文档问答" → `agentic/rag/`
- 多组件协同（≥2 个基建组件协作）→ `agent/agentic-engineering/`
  - 例："Agent 系统搭建：Memory + RAG + Skills" → `agentic-engineering/`

## `agentic/` 子目录判定

每个子目录代表一类 Agent 基建组件：

- `skills/`：Skills 设计哲学、Skill 体系搭建、企业级 Skill 系统
- `rag/`：检索增强生成、向量库、Embedding、Re-rank
- `mcp/`：MCP 协议、Server / Client 实现、生态工具
- `memory/`：长短期记忆、状态持久化、记忆管理策略

### 未来扩展参考（按 Agent 链路五层）

按需新建即可，不必预先创建空目录。

| 层级       | 已建            | 可补                                                                |
| ---------- | --------------- | ------------------------------------------------------------------- |
| 知识/记忆  | `rag/`、`memory/` | `knowledge-graph/`（知识图谱）                                      |
| 能力/工具  | `skills/`、`mcp/` | `tool-use/`（function calling、CodeAct 等通用工具调用）             |
| 执行/编排  | —               | `sandbox/`（代码执行沙箱）、`orchestration/`（多 Agent 协作）       |
| 质量/治理  | —               | `eval/`（评测体系）、`guardrails/`（护栏与安全）、`observability/`（追踪与日志） |
| 性能/成本  | —               | `cache/`（prompt 缓存、语义缓存）、`cost/`（预算与限流）            |

**新建门槛：** 同一主题积累 ≥2 篇时再单建子目录；不足时先放 `agent/agentic-engineering/` 兜底。

## 归类决策树

```
拿到一篇 AI 文章
│
├─ 主题是大模型本身（原理/训练/对齐/评测）？
│   └─ 是 → src/ai/llm/
│
├─ 主题是某种基建组件（skills / rag / mcp / memory / ...）？
│   └─ 是 → src/ai/agentic/{对应子目录}/
│       └─ 没有对应子目录？→ 新建子目录
│
└─ 主题是「怎么把 Agent 用好」？
    ├─ 谈 prompt 写法            → agent/prompt-engineering/
    ├─ 谈上下文管理              → agent/context-engineering/
    ├─ 谈 agent loop / harness   → agent/harness-engineering/
    └─ 综合实践 / 资源 / 案例    → agent/agentic-engineering/
```

## 边界情况

- **跨主题文章**：以"主线方法论"判分支，frontmatter 的 `category` / `tag` 再补维度。例：一篇讲"用 RAG 做长记忆"的文章，主线讲基建组件 → `agentic/rag/`，tag 加 `memory`。
- **资源汇总类**（如 `llm-agent-dev-resources.md`）：默认放 `agent/agentic-engineering/`。
- **新主题不知归哪**：先放 `agent/agentic-engineering/` 兜底，后续聚集到一定数量再考虑提升为独立子目录。

## 维护要点

- 三大分支与 `agent/` 四个子目录是**稳定结构**，不要随意增删
- `agentic/` 下子目录可按实际内容**按需扩展**
- 子目录不放 README.md（参见 [CLAUDE.md](../../CLAUDE.md) 编辑规范）
- 新增子目录时同步更新本文档
