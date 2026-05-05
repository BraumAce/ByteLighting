---
title: "企业级 AI Skill 体系"
category:
  - LLM 应用
tag:
  - Agent

domain: ai/llm
related:
  - ai/llm/agent-skills
  - ai/llm/agent-skill-design-philosophy
  - ai/llm/debugging-agent-prompt
  - ai/llm/context-engineering
status: published
last_reviewed: 2026-04-18
---

# 企业级 AI Skill 体系

如果说 [Agent Skill 设计哲学](./agent-skill-design-philosophy.md) 回答的是"做什么样的 Skill"，那么本文要回答的就是另一个问题：**当 Skill 要进入生产环境（尤其是金融、政务、医疗这类高合规领域）时，如何把它工程化地跑起来**。

Skill 不是一段 Prompt，也不是一个 Tool 的语法糖。它是一个**标准化、可执行、可复用、可审计、可插拔的领域能力单元**，包含业务知识、执行流程、工具调用规则、异常处理、输出格式、合规约束和评估标准。

<!-- more -->

## 1. 核心三角：LLM / Skill / Tool / Agent

绝大多数公司接入大模型后都会撞上四堵墙：回答不可控、专业度不够、Prompt 散落无法沉淀、没有审批和审计。根源在于没有把"专业能力"结构化、标准化、工程化。Skill 体系的第一步，是拆清楚四个角色的边界：

| 角色 | 职责 |
|------|------|
| **LLM** | 大脑 —— 理解、推理、决策 |
| **Skill** | 专业能力 / 方法论 —— 领域知识、执行步骤、业务规则 |
| **Tool** | 手脚 —— 计算、接口、脚本、数据处理 |
| **Agent** | 指挥官 —— 加载 Skill、调度 Tool、管理会话 |

一句话：**LLM 负责想，Skill 负责专业，Tool 负责干，Agent 负责管**。

### 1.1 企业级 Skill 必须具备的八项能力

| 能力 | 含义 |
|------|------|
| 标准化 | 统一格式、统一解析、统一加载 |
| 可插拔 | 随时启用、停用、更新 |
| 可复用 | 一次定义，多 Agent 共享 |
| 可组合 | 多个 Skill 串联完成复杂任务 |
| 可审计 | 谁使用、使用场景、输出结果、是否合规 |
| 可热更 | 不重启服务，实时生效 |
| 权限控制 | 谁能编辑、谁能使用、范围是什么 |
| 双层隔离 | 基础能力不可篡改，业务能力可定制 |

## 2. 双层存储架构

高合规领域的核心诉求是：**基础合规能力不能被业务方误改，但业务能力又必须能快速迭代**。解法是双层存储：

- **内置 Skill（`classpath:skills`）**：只读、系统默认、合规底线、不可篡改。
- **外部 Skill（`data/skills`）**：可写、可覆盖、可热更新、业务定制。

外部与内置同名时 —— 外部覆盖内置。这样既守住了底线，又放开了业务迭代的口子。

### 2.1 Skill 目录结构

```text
skill-name/                    # 短横线命名
├── SKILL.md                   # 必须：技能元数据 + 指令
├── scripts/                   # 可选：计算脚本
│   ├── dcf_calculator.py
│   └── ...
├── references/                # 可选：参考文档、数据模板
└── assets/                    # 可选：图标、配置文件
```

### 2.2 SKILL.md 标准格式

```markdown
---
name: dcf-valuation
description: 现金流折现估值，用于计算股票内在价值
version: 1.0.0
license: MIT
allowed-tools: calculateDcf
metadata:
  author: sk
  category: 投资分析
---

# DCF 估值技能

## 执行步骤
1. 向用户获取现金流、折现率、永续增长率、总股本。
2. 调用 calculateDcf 工具执行计算。
3. 输出每股价值、估值区间、风险提示。
4. 严格遵守金融合规，不提供投资建议。

## 输入参数
- cashFlows：未来现金流数组
- discountRate：折现率
- terminalGrowth：永续增长率
- sharesOutstanding：总股本

## 输出格式
- 内在价值：XX 元
- 估值结论：XXX
- 风险提示：市场有风险，投资需谨慎

## 异常处理
- 参数缺失 → 引导用户补充
- 计算失败 → 返回明确错误信息
```

几条编写黄金原则：**单一职责**（一个 Skill 只做一件事）、**渐进式披露**（复杂内容放 `references/` 降低 Token）、**明确工具**（`allowed-tools` 声明可调用的 Tool）、**合规优先**（必须包含风险提示）、**格式固定**（方便自动解析和审计）、**可测试**（有输入输出示例）。

## 3. 三阶段加载机制

启动慢、Token 爆炸，是 Skill 体系最容易踩的两个坑。解法是把加载拆成三个阶段，按需推进：

| 阶段 | 时机 | 加载内容 | Token 消耗 | 目的 |
|------|------|---------|-----------|------|
| **Discovery** | 项目启动 | 仅 `name` + `description` | ≈100 / 技能 | 让 Agent 知道自己有哪些技能 |
| **Activation** | 用户请求匹配技能 | 完整 SKILL.md | ≈5000 / 技能 | 让 LLM 知道执行流程 |
| **Execution** | 真正调用工具 / 脚本 | scripts、references | 按需 | 执行计算、数据处理 |

这套机制带来的收益：**启动快、内存小、Token 省、高并发稳定**。Agent 在对话开始时只背了一份极简菜单，真正要做事时才翻开具体菜谱。

## 4. 工程实现

### 4.1 Skill 领域实体

```java
@Data
@Builder
public class Skill {
    private String name;            // 技能唯一名称
    private String description;     // 技能描述
    private String instructions;    // 执行指令
    private String fullContent;     // 完整 SKILL.md 内容
}
```

### 4.2 Skill 解析器

用一个正则把 frontmatter 和正文拆开：

```java
@Slf4j
public class SkillParser {
    private static final Pattern PATTERN = Pattern.compile(
        "^---\\s*[\\r\\n]+name:\\s*(.+?)\\s*[\\r\\n]+description:\\s*(.+?)\\s*[\\r\\n]+---\\s*[\\r\\n]+(.*)$",
        Pattern.DOTALL
    );

    public static Skill parse(String content) {
        if (content == null || content.isBlank()) {
            return null;
        }
        Matcher matcher = PATTERN.matcher(content);
        if (matcher.find()) {
            return Skill.builder()
                .name(matcher.group(1).trim())
                .description(matcher.group(2).trim())
                .instructions(matcher.group(3).trim())
                .fullContent(content)
                .build();
        }
        log.warn("Skill 解析失败：格式不正确");
        return null;
    }
}
```

### 4.3 仓储接口与双层加载

仓储接口屏蔽存储细节：

```java
public interface SkillRepository {
    Optional<Skill> findByName(String name);
    List<Skill> findAll();
    void save(Skill skill);
    void update(String name, String newContent);
    boolean exists(String name);
}
```

加载服务依次扫描内置路径和外部路径，后者覆盖前者：

```java
@Service
@Slf4j
@RequiredArgsConstructor
public class SkillLoaderService {
    private final FileSystemSkillRepository repository;
    private static final String CLASSPATH_SKILLS = "classpath:skills/**/SKILL.md";
    private static final String FILE_SKILLS = "file:data/skills/**/SKILL.md";

    @PostConstruct
    public void loadAllSkills() {
        int count1 = repository.loadFromPath(CLASSPATH_SKILLS);
        int count2 = 0;
        File dir = new File("data/skills");
        if (dir.exists()) {
            count2 = repository.loadFromPath(FILE_SKILLS);
        }
        log.info("✅ Skill 加载完成：内置 {} 个，外部 {} 个", count1, count2);
    }
}
```

并行扫描提升启动性能：

```java
public int loadFromPath(String pattern) {
    try {
        Resource[] resources = resolver.getResources(pattern);
        List<Skill> skills = Arrays.stream(resources)
            .parallel()
            .map(res -> {
                try {
                    String content = StreamUtils.copyToString(
                        res.getInputStream(), StandardCharsets.UTF_8
                    );
                    return SkillParser.parse(content);
                } catch (Exception e) {
                    log.warn("加载失败：{}", res);
                    return null;
                }
            })
            .filter(Objects::nonNull)
            .collect(Collectors.toList());
        skills.forEach(repository::save);
        return skills.size();
    } catch (Exception e) {
        log.error("扫描失败", e);
        return 0;
    }
}
```

## 5. Skill 与 Agent / Tool 联动

### 5.1 Agent 管理 Skill 包

```java
public abstract class BaseAgent implements Agent {
    protected List<SkillPackage> skillPackages = new ArrayList<>();

    @Override
    public void addSkillPackage(SkillPackage skillPackage) {
        skillPackages.add(skillPackage);
    }

    @Override
    public List<SkillPackage> getSkillPackages() {
        return new ArrayList<>(skillPackages);
    }
}
```

### 5.2 Skill 声明可调用的 Tool

在 SKILL.md 的 frontmatter 里声明：

```yaml
allowed-tools: calculateDcf,calculateVar
```

Agent 在构建 ChatClient 时把声明过的工具注入进去：

```java
var skillsTool = SkillsTool.builder()
    .addSkillsDirectory(skillsDirectory.getAbsolutePath())
    .build();

this.chatClientWithSkills = chatClientBuilder
    .defaultSystem(description)
    .defaultToolCallbacks(skillsTool)
    .build();
```

### 5.3 一次完整调用的路径

用户提问 → Agent 匹配 Skill → LLM 理解意图 → 根据 Skill 指令选择 Tool → 执行 Python 计算 → 按 Skill 规定格式输出。

## 6. 热更新与覆盖

### 6.1 热更新接口

业务方只要把新版 SKILL.md 推到接口，就能在不重启服务的前提下替换掉旧版本：

```java
@PostMapping("/api/skill/update")
public ResponseEntity<?> updateSkill(
        @RequestParam String name,
        @RequestBody String content) {
    skillRepository.update(name, content);
    return ResponseEntity.ok(Map.of("success", true));
}
```

仓储层同步缓存和文件：

```java
@Override
public synchronized void update(String name, String newContent) {
    Skill skill = SkillParser.parse(newContent);
    if (skill == null) {
        throw new RuntimeException("解析失败");
    }
    skillCache.put(name, skill);
    persistSkill(name, newContent);
    log.info("技能热更新成功：{}", name);
}

private void persistSkill(String name, String content) {
    try {
        Path path = Paths.get("data/skills", name, "SKILL.md");
        Files.createDirectories(path.getParent());
        Files.writeString(path, content, StandardCharsets.UTF_8);
    } catch (IOException e) {
        log.error("持久化失败", e);
    }
}
```

### 6.2 覆盖规则

- 外部 Skill 与内置 Skill 同名 → 外部覆盖内置
- 更新后立即生效，无需重启
- 更新记录自动进入审计

## 7. 审计与 AI 质检

金融场景下，"做了什么"必须能被追溯，"做得对不对"必须能被评估。

### 7.1 审计日志

```java
@Data
@Builder
public class AuditLog {
    private String sessionId;
    private String skillName;
    private String userMessage;
    private String agentResponse;
    private String evaluation;
    private LocalDateTime timestamp;
}
```

### 7.2 critic-agent 自动质检

用另一个 Agent 对主 Agent 的输出做三项打分：

- 风险提示是否到位
- 专业准确性
- 合规转接是否正确

评分以 JSON 格式输出，低于阈值自动预警。

## 8. 企业级最佳实践

| 实践 | 要点 |
|------|------|
| 按领域拆分 Skill | 投资、风控、合规、客服分开 |
| 基础技能内置 | 保证安全底线 |
| 业务技能外部化 | 支持快速迭代 |
| 严格格式校验 | 避免解析失败 |
| 全量日志记录 | 满足监管要求 |
| 版本管理 | 每次更新保留历史版本 |
| 权限控制 | 编辑、审核、发布职责分离 |
| 定期评估 | 根据失败日志迭代 Skill |

## 9. 小结

Skill 体系的价值，在于把模糊、不可控的 Prompt，升级为**标准化、可插拔、可复用、可审计、可热更**的专业能力。

- 双层存储 —— 保证安全与灵活
- 三阶段加载 —— 保证性能与成本
- 热更新 —— 保证业务迭代速度
- 审计与质检 —— 满足合规要求

这也正是设计哲学必须和工程落地并行的原因：前者决定 Skill 的上限，后者决定 Skill 能否真的进入生产环境。两者互为支撑，缺一不可。
