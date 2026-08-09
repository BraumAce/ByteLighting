---
home: true
portfolio: true

name: BraumAce
avatar: BraumAce.jpg
welcome: 🚀 Make time for civilization. Live proud. Never give up!
titles:
  - Agent 工程师 (Agent Engineer)
  - Java 后端 & 架构开发者
  - LLM & Data Agent 核心贡献者
  - 极客写作者 & 开源实践者

bgImage: https://cheng-shang.me/bg.avif

medias:
  - name: GitHub
    icon: github
    url: https://github.com/BraumAce
  - name: Email
    icon: about
    url: mailto:siyuan.peng2024@gmail.com
  - name: Blog
    icon: text
    url: https://blog.bytelighting.cn

content: doc
---

<div class="intro-page">

<section class="intro-profile" aria-label="个人信息">
  <span class="intro-eyebrow">PROFILE / 个人信息</span>
  <div class="intro-profile__facts">
    <div class="intro-fact"><span>姓名</span><strong>BraumAce</strong></div>
    <div class="intro-fact"><span>联系电话</span><strong>187-****-9803</strong></div>
    <div class="intro-fact"><span>电子邮箱</span><a href="mailto:siyuan.peng2024@gmail.com">siyuan.peng2024@gmail.com</a></div>
    <div class="intro-fact"><span>毕业院校</span><strong>江西理工大学</strong><small>2021.09 — 2025.07</small></div>
    <div class="intro-fact"><span>专业成绩</span><strong>软件开发 · GPA 3.50 / 5.00</strong><small>软件工程学院 · 前 10%</small></div>
    <div class="intro-fact"><span>个人博客</span><a href="https://blog.bytelighting.cn" target="_blank" rel="noopener noreferrer">blog.bytelighting.cn</a></div>
  </div>
</section>

<!-- more -->

<section class="intro-section">

## 履历与经历 <span class="intro-section__en">Experience</span>

<div class="intro-timeline">
  <article class="intro-timeline__item">
    <div class="intro-timeline__head">
      <div><h3>浙江大应科技有限公司</h3><p>2025.07 — 至今 · Agent 技术部</p></div>
      <span class="intro-badge">Agent 工程师 · 正职</span>
    </div>
    <ul>
      <li><strong>Aloudata Agent 核心开发：</strong>参与 Agent 平台、指标网关、AI 问数等模块建设，主导推动 <mark>10+ 核心功能</mark> 顺利上线。</li>
      <li><strong>CAN Gateway 从 0 到 1 建设：</strong>主导将指标语义层封装为面向 Agent 消费的统一 REST API 网关，并原生支持 MCP 对外接入。</li>
      <li><strong>后端架构设计与落地：</strong>负责产品层后端架构设计与落地，深度覆盖工具调用、任务调度、流式交互、RAG 召回、多租户权限等核心能力。</li>
    </ul>
  </article>

  <article class="intro-timeline__item">
    <div class="intro-timeline__head">
      <div><h3>浙江大应科技有限公司</h3><p>2024.12 — 2025.06 · AIR 技术部</p></div>
      <span class="intro-badge">Java 开发工程师 · 实习</span>
    </div>
    <ul>
      <li>参与逻辑数据编织平台核心后端开发，负责 AI 问数 NL2SQL 闭环、LLM 统一对接与数据集拓扑依赖分析。</li>
    </ul>
  </article>

  <article class="intro-timeline__item">
    <div class="intro-timeline__head">
      <div><h3>华院计算技术（上海）股份有限公司</h3><p>2024.05 — 2024.08 · 智能制造事业部</p></div>
      <span class="intro-badge">Java 开发工程师 · 实习</span>
    </div>
    <ul>
      <li>参与智能制造「视觉值守系统」后端开发，负责报警、审批流、缓存与文件清理等模块。</li>
      <li><strong>缓存性能提升：</strong>使用 Caffeine + Redis Pub/Sub 优化缓存一致性，将首页加载耗时由 <mark>约 3s 降至 1s 内</mark>。</li>
      <li><strong>存储优化：</strong>基于 Quartz 优化 MinIO 过期文件清理策略，降低约 <mark>30% 存储占用</mark> 与清理开销。</li>
      <li><strong>交付工程化：</strong>编写 Shell 部署脚本，参与 Docker 容器化与 CI/CD 自动化部署流程。</li>
    </ul>
  </article>
</div>

</section>

<section class="intro-section">

## 工程与项目 <span class="intro-section__en">Selected Projects</span>

<div class="intro-projects">
  <article class="intro-project intro-project--featured">
    <div class="intro-project__meta"><span>01 / AGENT</span><time>2025.09 — 至今</time></div>
    <h3>Aloudata Agent</h3>
    <p class="intro-project__subtitle">分析决策智能体</p>
    <p>面向企业 BI 分析场景的 Agent 应用，支持自然语言指标查询、数据归因、数据解读与报告生成。</p>
    <ul>
      <li><strong>持久化调度框架：</strong>基于 APScheduler + PostgreSQL JobStore 实现任务持久化、重试、超时与取消，使用插件化 Executor 提升扩展性，并通过 PG Advisory Lock + 唯一索引两级并发控制保障多实例单调度执行。</li>
      <li><strong>MCP 协议集成：</strong>从 0 设计并实现 MCP 接入，支持 stdio / SSE / streamable-HTTP 三种传输协议，集成 Bearer / Header 鉴权、框架级 Tool SPI 与租户级工具可见性控制。</li>
      <li><strong>实时流式交互：</strong>基于 WebSocket + Redis Pub/Sub 推送思考链、工具调用与最终回答，支持运行中任务取消与多 Worker 消息路由。</li>
      <li><strong>RAG 混合知识召回：</strong>设计文本 + 向量双通道检索、RRF 融合与 Reranker 重排序架构，完成用户私有 / Agent 私有 / 公共三层知识库的召回合并与去重。</li>
      <li><strong>工具链与归因分析：</strong>在 Plan-and-Solve + ReAct 双层架构下，基于统一 Tool 抽象与多级 LLM 路由开发归因分析、多维 MQL 等 SubAgent，并主导 Tool / Skill 三级 Scope 治理体系重构。</li>
    </ul>
  </article>

  <article class="intro-project intro-project--featured">
    <div class="intro-project__meta"><span>02 / GATEWAY</span><time>2026.03 — 至今</time></div>
    <h3>CAN Gateway</h3>
    <p class="intro-project__subtitle">面向 Agent 的指标平台 API 网关</p>
    <p>将指标语义层封装为面向 Agent 消费的统一 REST API 网关，支持指标检索、查询代理、指标归因与 MCP 对外接入。</p>
    <ul>
      <li><strong>自研 BM25F 检索引擎：</strong>实现字段权重、TF 饱和、IDF 平滑与长度归一，结合 exact → prefix → score 分层排序、中英文混合分词及 LLM 同义词扩展；自建 272 条回归集实测 <mark>Recall@3 = 95.73%</mark>。</li>
      <li><strong>内存 + DB 双层缓存：</strong>实现启动秒级加载、异步刷新与租户级定时同步，基于原子互斥 + 协作式取消保障并发安全，通过快照 diff 完成增量计算与审计。</li>
      <li><strong>多引擎 JDBC 查询代理：</strong>支持 Trino / Databricks / Kyuubi 等 6 类数据源，按租户隔离连接池，并通过 SQL 白名单 + LIMIT 自动注入保障查询安全。</li>
      <li><strong>指标归因与网关工程化：</strong>实现因子树分解 + 公式解析 + DFS 环路检测的指标归因（<mark>p95 &lt; 500ms</mark>），统一封装查询、搜索、归因、鉴权、错误契约与用量统计能力。</li>
    </ul>
  </article>

  <article class="intro-project">
    <div class="intro-project__meta"><span>03 / DATA</span><time>2024.12 — 2025.08</time></div>
    <h3>Aloudata AIR</h3>
    <p class="intro-project__subtitle">逻辑数据编织平台</p>
    <p>面向企业数据虚拟化与逻辑数仓场景的平台，支持逻辑数据集集成、自动化编排、自适应查询加速与 AI 问数。</p>
    <ul>
      <li><strong>AI 问数闭环：</strong>构建「NL2SQL 生成 → Explain 校验 → 错误回灌修复」闭环，结合提示词工程优化，将生成正确率由 <mark>70% 以下提升至 90%+</mark>。</li>
      <li><strong>LLM 服务：</strong>基于 OkHttp 对接 LLM API，支持 SSE 流式响应、HTTP 代理转发、多模型切换与动态 Prompt 注入。</li>
      <li><strong>数据集服务：</strong>基于 DFS + 三色标记完成 DAG 环检测与路径定位，结合拓扑排序 + 子图 BFS 遍历保障导入导出时的依赖合法性。</li>
      <li><strong>通知与邮件服务：</strong>通过 Kafka 监听引擎数据质量事件，结合 Spring 定时任务实现订阅式邮件推送，并基于 DB 锁保障消息幂等消费。</li>
      <li><strong>单点登录体系：</strong>主导企业级 OIDC / OAuth2 单点登录，实现授权码登录、Token 解析、登出与多协议扩展。</li>
    </ul>
  </article>

  <article class="intro-project intro-project--compact">
    <div class="intro-project__meta"><span>04 / OPEN SOURCE</span><time>2024.01 — 2024.04</time></div>
    <h3>Yuan-RPC</h3>
    <p class="intro-project__subtitle">高可用 Java RPC 框架</p>
    <p>参考 Dubbo 自研，支持服务注册发现、远程调用、负载均衡、重试容错与 Spring Boot Starter 接入。</p>
    <ul>
      <li><strong>核心架构：</strong>拆分消费调用、网络服务、序列化、请求处理、注册中心、负载均衡、重试与容错等模块。</li>
      <li><strong>注册发现：</strong>基于 Etcd 实现服务注册发现、心跳续约与故障节点剔除。</li>
      <li><strong>通信与扩展：</strong>基于 Vert.x TCP 自定义 RPC 协议，并实现 SPI 机制支持组件配置化扩展。</li>
      <li><strong>稳定性与易用性：</strong>提供随机、轮询、一致性 Hash 负载均衡及重试容错，通过 Spring Boot Starter 与注解降低接入成本。</li>
    </ul>
    <a class="intro-project__link" href="https://github.com/BraumAce/yuan-rpc" target="_blank" rel="noopener noreferrer">查看 GitHub 源码 →</a>
  </article>
</div>

</section>

<section class="intro-section">

## 核心技术能力 <span class="intro-section__en">Core Skills</span>

<div class="intro-focus-grid">
  <article class="intro-focus">
    <span class="intro-focus__index">01</span>
    <h3>AI Agent / LLM 应用</h3>
    <ul>
      <li>ReAct、Plan-and-Execute、Reflection 工作流</li>
      <li>Tool Calling、Context / Prompt Engineering</li>
      <li>MCP / A2A 协议及 Skills / Plugins 设计实践</li>
    </ul>
  </article>
  <article class="intro-focus">
    <span class="intro-focus__index">02</span>
    <h3>Java 后端与 Spring 生态</h3>
    <ul>
      <li>多线程、JUC、反射、SPI、动态代理与 JVM</li>
      <li>Spring Boot / SSM / SOFA 项目开发</li>
      <li>Starter / SDK 封装、接口契约、多租户与 SSO</li>
    </ul>
  </article>
  <article class="intro-focus">
    <span class="intro-focus__index">03</span>
    <h3>检索 / RAG / 数据智能</h3>
    <ul>
      <li>Elastic Stack、DSL、索引设计与 IK 分词</li>
      <li>BM25F 检索打分与中英文混合召回</li>
      <li>向量 + 文本混合检索、RRF 与 Reranker</li>
    </ul>
  </article>
  <article class="intro-focus">
    <span class="intro-focus__index">04</span>
    <h3>数据库与查询引擎</h3>
    <ul>
      <li>MySQL、PostgreSQL、MongoDB</li>
      <li>表设计、索引、事务与锁机制</li>
      <li>多引擎 JDBC 代理与租户级连接池隔离</li>
    </ul>
  </article>
  <article class="intro-focus">
    <span class="intro-focus__index">05</span>
    <h3>中间件与分布式系统</h3>
    <ul>
      <li>Redis、Kafka、RabbitMQ、Etcd</li>
      <li>分布式锁、消息幂等与 WebSocket 推送</li>
      <li>服务注册发现、负载均衡、重试与容错</li>
    </ul>
  </article>
  <article class="intro-focus">
    <span class="intro-focus__index">06</span>
    <h3>工程化与系统设计</h3>
    <ul>
      <li>Docker、Shell 与 CI/CD 自动化部署</li>
      <li>任务调度、流式交互与并发控制</li>
      <li>可扩展框架、统一契约与权限治理</li>
    </ul>
  </article>
</div>

</section>

<div class="intro-bottom-grid">
  <section class="intro-panel">

## 研习与探索 <span class="intro-section__en">Now</span>

  <ol class="intro-learning">
    <li><strong>MCP / A2A 协议演进</strong><span>深入实践与接入</span></li>
    <li><strong>Graph RAG 与上下文工程</strong><span>研习中</span></li>
    <li><strong>Rust 与高性能并发基础设施</strong><span>持续学习中</span></li>
    <li><strong>LLM Eval & Benchmark 评估体系</strong><span>探索中</span></li>
  </ol>
  </section>

  <section class="intro-panel">

## 在校荣誉与竞赛 <span class="intro-section__en">Honors</span>

  <div class="intro-honor">
    <h3>奖学金</h3>
    <p>华院计算技术（上海）社会奖学金 · 国家励志奖学金 · 校内一等奖学金</p>
    <time>2023</time>
  </div>
  <div class="intro-honor">
    <h3>程序设计竞赛</h3>
    <p>高校团体程序设计天梯赛全国三等奖 · 蓝桥杯江西省一等奖 · 传智杯全国区域赛二等奖 · 江西省大学生科技创新竞赛程序设计赛项三等奖</p>
    <time>2022 — 2023</time>
  </div>
  </section>
</div>

</div>
