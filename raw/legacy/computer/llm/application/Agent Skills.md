---
category: 
- LLM 应用
tag: 
- Agent
comment: true
---

# Agent Skills

## 1. 概述

2025 年 12 月 18 日，Anthropic 发布了新的开源标准 Agent Skills，早期叫 Claude Skills，后来变成了大家可以按照约定使用的标准。

以前我们要让 AI 完成一个复杂任务（比如：帮你写代码、部署测试环境、或者按照公司品牌规范写推文），我们通常需要写一段超长的 Prompt（提示词）。

但问题是：Prompt 太长了 AI 容易忘，而且每次都要重新教一遍，并且在此期间 AI 可能需要通过多次调用工具以便获取和处理这些任务的能力，容易导致 Token 无限消耗。

AgentSkills 的出现就是为了解决这个问题。简单来说，它给 AI 制定了一套 “标准技能包”，类似于给 AI 的 “说明书”，任何支持该标准的 AI 都能通过阅读说明书学会这个技能，且执行得非常稳。

目前官方的网站为：[https://agentskills.io/home](https://agentskills.io/home)

### 1.1 官方定义

Agent Skills 是一种简单、开放的格式，用于赋予 AI 智能体（Agents）新的能力和专业知识。

Agent Skills 本质上是一个包含指令（Instructions）、脚本（Scripts）和资源（Resources）的文件夹。智能体可以识别并利用这些文件夹，从而更准确、更高效地执行任务。

### 1.2 为什么需要 Agent Skills？

原因在于，虽然现在的 AI 智能体能力越来越强，但它们往往缺乏开展实际工作所需的“上下文”。

Agent Skills 通过为智能体提供程序性知识，以及针对特定公司、团队或用户的定制化背景信息，解决了这一问题。智能体可以根据正在处理的任务，按需加载这些技能。

- 对于技能开发者： 只需开发一次技能，即可在多个支持该标准的智能体产品中部署。
    
- 对于兼容的智能体： 支持该标准后，最终用户可以开箱即用地为智能体添加新功能。
    
- 对于团队和企业： 能够以可移植、可进行版本控制的包形式，沉淀并管理组织内部的知识。
    

### 1.3 Agent Skills 能实现什么？

1.  领域专家化： 将专业知识（如法律审查流程、数据分析管道）封装成可复用的指令。
    
2.  扩展新功能： 让智能体学会制作演示文稿（PPT）、构建 MCP 服务器、分析大型数据集等。
    
3.  可重复的工作流： 将多步骤的复杂任务转变为一致且可审计的标准流程。
    
4.  互操作性： 在不同的支持 Agent Skills 的 AI 产品之间重复使用同一个技能。
    

目前很多工具都集成了Skills的自动支持，并得到了一系列领先 AI 开发工具的支持，包括：

*   编辑器/平台： Cursor, VS Code, GitHub, Claude Code, OpenCode，QwenCode。
    
*   框架/工具： Claude, OpenAI Codex, Letta, Goose, Amp, Factory。
    

## 2. AgentSkills 如何使用？

### 2.1 基本结构

从技术角度看，AgentSkills 是一个开源的、标准化的文件夹格式。它告诉 AI 在遇到特定任务时，应该遵循什么样的步骤、调用哪些脚本、参考哪些资料。

一个典型的 Agent Skill 其实就是一个文件夹，通常是这样的：

- **元数据（YAML Frontmatter）**：定义技能的名字、描述（让 AI 知道什么时候该用这个技能）。
    
- **指令（Instructions）**：详细的步骤，告诉 AI 第一步干啥，第二步干啥。告诉智能体如何执行特定任务的详细指南。
    
- **资源（Resources）**：文件夹里可以放相关的 Python 脚本、JS/TS 脚本、模板文件或数据文件。技能还可以捆绑脚本、模板和参考资料。

一个典型的目录结构如下：

```xml
my-skill/
├── SKILL.md     # 必选：包含指令和元数据
├── scripts/     # 可选：可执行代码脚本
├── references/  # 可选：参考文档、API或背景
└── assets/      # 可选：模板、静态文件或其他资源
```

### 2.2 工作原理

Skill 采用 “渐进式披露（Progressive Disclosure）” 机制，以高效管理上下文：

- **发现（Discovery）**： 启动时，智能体仅加载每个可用技能的“名称”和“描述”。这足以让它知道该技能何时可能派上用场。
    
- **激活（Activation）**： 当任务与技能描述匹配时，智能体才会将 SKILL.md 中的完整指令读取到上下文（Context）中。
    
- **执行（Execution）**： 智能体遵循指令操作，根据需要加载引用的文件或执行捆绑的代码。


如果把 AI 智能体比作一个“新员工”，那么 Agent Skills 就是一份份岗位说明书+工具箱。它不只是告诉 AI 该做什么，还把做这件事需要的脚本工具和参考资料打包在一起，让 AI 拿来就能用，且保证每次做得都一样专业。

与 MCP（Model Context Protocol）相比：

*   MCP 是 AI 的“手”： 它解决了“连接”问题。比如 AI 怎么连上你的数据库、怎么打开你的谷歌搜索。
    
*   AgentSkills 是 AI 的“脑”： 它解决了“能力”问题。即使 AI 拿到了数据库权限（有手了），它还得知道“按照公司审计流程，应该如何查询异常数据”（这就是技能）。
    

一句话总结： MCP 让 AI “够得到”工具，AgentSkills 教 AI “怎么用”工具。

它和其他 2 个概念的对比如下：

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/2M9qP5j3odg43O01/img/22dbfb48-275d-4162-8039-d8ed45c9e858.png)

### 2.3 注意事项

1.  目录的名称必须与 SKILL.md  中定义的 name 字段完全一致。
    
2.  元数据区中的：
    
    1.  `name`：必须是1-64 字符。仅限小写字母、数字和连字符（-），必须与文件夹名匹配。
        
    2.  `description`：1-1024 字符。描述技能的作用以及“何时”该用它（智能体靠它来判断意图）。
        
3.  元数据下方即为正文。这是给 AI 看的“操作手册”。
    

例如：

```markdown
---
name: webapp-testing
description: 当用户要求测试网页时，请使用此技能。（描述何时使用）
---

# 文档（技能）标题

## 使用说明

...

## 工作流

...

## 注意事项

...

## 参考文档

...

```

### 2.3 示例

目前有很多的技能市场服务、技能仓库，可以给我们提供示例进行学习：

[https://github.com/ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skillshttps://github.com/VoltAgent/awesome-claude-skillshttps://github.com/BehiSecc/awesome-claude-skills)

[https://github.com/VoltAgent/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skillshttps://github.com/VoltAgent/awesome-claude-skillshttps://github.com/BehiSecc/awesome-claude-skills)

[https://github.com/BehiSecc/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skillshttps://github.com/VoltAgent/awesome-claude-skillshttps://github.com/BehiSecc/awesome-claude-skills)

[https://github.com/anthropics/skills](https://github.com/anthropics/skills)

那么技能这个东西的原理到底如何实现了，本质核心是【技能提示词指令】，这些 IDE 工具的 AI 编码助手会读取技能文件夹树结构，然后注入到和 AI 交互的提示词中，结构类似如下：

```xml
<available_skills>
  <skill>
    <name>pdf-processing</name>
    <description>Extracts text and tables from PDF files, fills forms, merges documents.</description>
    <location>/path/to/skills/pdf-processing/SKILL.md</location>
  </skill>
  <skill>
    <name>data-analysis</name>
    <description>Analyzes datasets, generates charts, and creates summary reports.</description>
    <location>/path/to/skills/data-analysis/SKILL.md</location>
  </skill>
</available_skills>
```

claude-skills的第一性原理的文章：[https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive)

目前 Skills 的生态有很多，比如 OpenSkills、Skill市场、Skill 仓库都是围绕技能的一些分享。未来每个人都可以把自己的经验维护成技能进行使用。

网友总结道：

https://mp.weixin.qq.com/s/UjZAqvkfk8AzpOoK1KV0yw

> Prompt 解决的是「怎么和模型说话」
> 
> Skill/Project/Subagent/MCP 解决的是「模型在一个复杂环境下，怎么长期、稳定、可维护地为你干活」

## 三、总结

我的建议是： 如果你手里有一些经常需要重复给 AI 下达的复杂指令，不妨现在就尝试把它们改写成 SKILL.md 的格式。你会发现，AI 的 “智商” 瞬间就提上去了！

参考资料如下：

[https://www.53ai.com/news/zhinengkefu/2025103051368.html](https://www.53ai.com/news/zhinengkefu/2025103051368.html)

通往 AGI 之路的飞书云文档的 Skills 分享：

[https://waytoagi.feishu.cn/wiki/RgZrwqNmdiEXrWkA7sPc7WDfnmh?from=space\_search](https://waytoagi.feishu.cn/wiki/RgZrwqNmdiEXrWkA7sPc7WDfnmh?from=space_search)

[https://waytoagi.feishu.cn/wiki/Y3TPwfCjTik8YKkFUNtct5g8ntN?from=space\_search](https://waytoagi.feishu.cn/wiki/Y3TPwfCjTik8YKkFUNtct5g8ntN?from=space_search)

[https://waytoagi.feishu.cn/wiki/W7qbwhK1BiYwNnkybgIcRHxMn5g](https://waytoagi.feishu.cn/wiki/W7qbwhK1BiYwNnkybgIcRHxMn5g)

[https://waytoagi.feishu.cn/wiki/NWQKwGyupiENv3kwnIScj7Fbnxe](https://waytoagi.feishu.cn/wiki/NWQKwGyupiENv3kwnIScj7Fbnxe)

