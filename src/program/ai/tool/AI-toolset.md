---
category: 
- AI
tag: 
- 工具
order: 1
---

# AI 工具集

整理一下实用的 Github 开源的 AI 工具。

<!-- more -->

## 置顶：DeepWiki —— GitHub 仓库的百科全书

### DeepWiki

deepwiki 地址：[deepwiki.com](https://deepwiki.com)

最近，独角兽 AI 公司 Cognition Labs 推出了一个开源项目 —— DeepWiki，旨在为 GitHub 上的公共代码仓库生成 AI 驱动的交互式文档，堪称「GitHub 仓库的免费百科全书」。

用户可以通过官网直接访问，也可以将 GitHub 链接中的「github.com」替换为「deepwiki.com」。

它通过分析代码、README 和配置文件，自动生成结构化的技术文档、交互式图表，并提供一个对话式 AI 助手，帮助开发者快速理解项目结构和逻辑——无需反复查阅稀少的 README 文件或晦涩的注释信息！

这篇文章中有详细介绍和演示：[AI 编程再下一城，读懂所有GitHub代码库，团队核心都是华人](https://mp.weixin.qq.com/s?__biz=MzA4MjYwMTc5Nw==&mid=2648997893&idx=1&sn=4dd9b641add65788f4bbf79001d14b05&scene=21#wechat_redirect)


### Deepwiki MCP

项目地址：[https://github.com/regenrek/deepwiki-mcp](https://github.com/regenrek/deepwiki-mcp)

Deepwiki MCP 服务器是一个非官方的深度维基 MCP 服务器，它通过 MCP（Model Context Protocol，模型上下文协议）接收 Deepwiki URL，爬取所有相关页面，将它们转换为 Markdown 格式，并以单一文档或按页面列表的形式返回内容。

核心功能：

- 文档抓取和转换：从 deepwiki. com 网站抓取文档，并转换为干净的 Markdown 格式
- 多种输出格式：支持将所有页面合并为一个文档，或者保持页面的独立结构
- 内容优化：自动清理导航栏、页眉页脚、广告和脚本等无关内容
- 链接优化：自动重写链接以确保在 Markdown 中正常工作
- 安全限制：仅处理来自 deepwiki. com 的 URL，确保安全性
- 优化 AI 工作流：提供适合 LLM 阅读的格式，便于 AI 助手理解和使用文档内容
- 免费无需注册：无需 API 密钥或注册即可使用

## 3. 日常使用大模型的几种方法

- 地址：[日常使用大模型的几种方法](https://mp.weixin.qq.com/s?__biz=MzI2MzEwNTY3OQ==&mid=2648990590&idx=1&sn=e4f6733b99b69ab96f0599fc51fc0320)

## 2. AI 数字侦探，全方位深挖了解公司

名称：Agentic Company Researcher

地址：[https://github.com/pogjester/company-research-agent](https://github.com/pogjester/company-research-agent)

它集成了多个 AI 智能体分别从公司网站、新闻、财报等多种来源收集相关信息，并利用 Gemini 和 ChatGPT 大模型进行内容筛选与合成，生成一份高质量的公司调研报告。

主要功能：

- 多源数据自动收集，整合公司网站、新闻和财报信息；
- 基于 Tavily 的 AI 内容筛选，确保信息相关性；
- 实时进度流式传输，随时查看研究进展；
- 双模型架构，Gemini 处理大量数据，GPT-4.1 负责精确排版；
- 现代化 React 前端界面，支持实时更新和下载；
- 模块化智能体架构，支持灵活扩展和定制。

项目完全开源，提供了详细安装使用教程，通过克隆代码到本地，简单配置下 API Key，即可运行使用。

## 1. AI 代码导师，秒懂 GitHub 项目

名称：Tutorial-Codebase-Knowledge

地址：[https://github.com/The-Pocket/Tutorial-Codebase-Knowledge](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge)

它能自动分析 GitHub 仓库并生成适合初学者的通俗易懂教程，清晰解释了代码如何运行，还通过生成可视化代码结构来展示项目核心功能。

主要功能：

- 自动爬取 GitHub 仓库并从代码中构建知识库；
- 一键分析整个代码库以识别核心抽象概念及其交互方式；
- 利用 AI 将复杂代码转化为初学者友好的教程；
- 通过生成清晰的代码结构可视化，助力快速理解项目；
- 已成功应用于多个流行仓库如 FastAPI、Flask、NumPy Core 等。

只需克隆代码到本地，安装依赖，配置 LLM，即可通过简单命令生成完整的代码库教程。
