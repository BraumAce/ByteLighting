---
category: 
- 系统设计
tag: 
- 架构模式
---

# SOFA 架构模式

<!-- more -->

## 1. 什么是 SOFA？

SOFA（**S**imple **O**bject-oriented and **F**lexible **A**rchitecture），是一个轻量级的面向对象的，可扩展的应用架构，可以帮助降低复杂应用场景的系统熵值，提升系统开发和运维效率。

目前，SOFA 已有一系列成熟的生态环境：[SOFAStack](https://www.sofastack.tech/)。

我们指的 SOFA 一般是 SOFABoot，这是蚂蚁金服开源的基于 Spring Boot 的研发框架。下面是他俩的对比：

- [SpringBoot](https://spring.io/projects/spring-boot/) 基于 Spring 的按条件配置（Conditional Configuration），结合 starter 依赖机制提供了快捷、方便开发 Spring 项目的体验，获得了极大的成功；

- [SOFABoot](https://github.com/sofastack/sofa-boot) 同样在这两个能力上基于 SpringBoot 扩展出适应于金融级应用开发框架。

作为脱胎于蚂蚁金服内部对于 SpringBoot 的实践，SOFABoot 补充了 SpringBoot 在大规模金融级生产场景下一些不足的地方，例如 Readiness 检查、类隔离和日志空间隔离等等能力。在增强了 SpringBoot 的同时，SOFABoot 还提供了让用户可以在 SpringBoot 中非常方便地使用 SOFAStack 中间件的能力，用于快速、敏捷地开发 Spring 应用程序，特别适合构建微服务系统。

SOFABoot 开发文档：[https://www.sofastack.tech/projects/sofa-boot/modular-development/](https://www.sofastack.tech/projects/sofa-boot/modular-development/)

## 2. 功能描述

SOFABoot 在 Spring Boot 基础上，提供了以下能力：

- 扩展 Spring Boot 健康检查的能力：在 Spring Boot 健康检查能力基础上，提供了 Readiness Check 的能力，保证应用实例安全上线。

- 提供模块化开发的能力：基于 Spring 上下文隔离提供 [模块化开发](https://www.sofastack.tech/projects/sofa-boot/modular-development/) 能力，每个 SOFABoot 模块使用独立的 Spring 上下文，避免不同 SOFABoot 模块间的 BeanId 冲突。

- 增加模块并行加载和 Spring Bean 异步初始化能力，加速应用启动。

- 增加日志空间隔离的能力：中间件框架自动发现应用的日志实现依赖并独立打印日志，避免中间件和应用日志实现绑定，通过 [sofa-common-tools](https://github.com/sofastack/sofa-common-tools) 实现。

- 增加类隔离的能力：基于 [SOFAArk](https://github.com/sofastack/sofa-ark) 框架提供类隔离能力，方便使用者解决各种类冲突问题。

- 增加中间件集成管理的能力：统一管控、提供中间件统一易用的编程接口、每一个 SOFA 中间件都是独立可插拔的组件。

- 提供完全兼容 Spring Boot的能力：SOFABoot 基于 Spring Boot 的基础上进行构建，并且完全兼容 Spring Boot。

## 3. 模块化开发

我们重点看一下模块化开发。

常见的模块化形式有：

- **基于代码组织上的模块化**：这是最常见的形式，在开发期，将不同功能的代码放在不同 Java 工程下，在编译期被打进不同 jar 包，在运行期，所有 Java 类都在一个 classpath 下，没做任何隔离；

- **基于 Spring 上下文隔离的模块化**：借用 Spring 上下文来做不同功能模块的隔离，在开发期和编译期，代码和配置也会分在不同 Java 工程中，但在运行期，不同模块间的 Spring Bean 相互不可见，DI 只在同一个上下文内部发生，但是所有的 Java 类还是在同一个 ClassLoader 下；
  
- **基于 ClassLoader 隔离的模块化**：借用 ClassLoader 来做隔离，每个模块都有独立的 ClassLoader，模块与模块之间的 classpath 不同。

SOFABoot 模块化开发属于第二种模块化形式 —— 基于 Spring 上下文隔离的模块化。每个模块有独立的 Spring 上下文，通过上下文的隔离，让不同模块之间的 Bean 的引用无法直接进行，达到模块在运行时的隔离。这样既保证了不引入过多的复杂性，也避免了没有任何隔离措施的模块边界保障。如下图所示：

![](https://cloud.bytelighting.cn/f/l8OfD/1_1.SOFA%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91.png)

> 关于 SOFABoot 模块化产生的背景，可参考文章《[蚂蚁金服的业务系统模块化之模块化隔离方案](https://www.sofastack.tech/blog/sofastack-modular-isolation/)》。

## 4. 工程结构

SOFA 分层基于模块化形式，解决了模块化开发下各模块相互影响的问题。

**工程结构如下：**

+appname
|—— app               （应用目录）
|———— common （基础结构层）
|—————— common-util （公共常量，枚举，异常，日志，Log以及工具类等）
|—————— common-dao （ZDAL配置，SqlMap，DO，DAO接口以及实现）
|—————— common-service-facade （对外暴露的API，DTO，Request，Result等）
|—————— common-service-integration （调用外部服务的Wrapper或者Client等）
|———— core （核心/原子服务层）
|—————— core-model （领域模型，支持校验，追踪，环境上下文等）
|—————— core-service （核心/原子服务，领域模型的仓储，缓存，转换器）
|———— biz   （业务逻辑层）
|—————— biz-shared （业务逻辑，入参xxxReq，返回WelfareResult包裹DTO）
|—————— biz-service （对外暴露的API实现类，入参xxxReq，返回DTO）
|———— test   （测试层，单元测试的基类，Test Case和Starter）
|—— conf （SOFA 相关配置存放目录，包括sofa, log4j等配置）
|—— pom.xml （总POM文件）

**SOFA 分层对应的模块依赖如下图所示：**

![](https://cloud.bytelighting.cn/f/EmNTY/1_2.SOFA%E5%88%86%E5%B1%82%E6%A8%A1%E5%9D%97%E4%BE%9D%E8%B5%96.png)

### 4.1 test 层（测试层）

该层是 SOFABoot 项目中测试模块，提供了单元测试的基类，支持继承或扩展。由于要对所有模块进行测试，因此该层位于 SOFABoot 系统最顶端，通过直接和间接依赖，可以访问到每个模块的代码，即所有模块对测试层都是可见的。

### 4.2 bootstrap 层（启动层）

该层是 SOFABoot 项目中的启动模块，该模块中会包含 SOFABoot 应用的启动类、同时配置 SOFABoot 打包等。该层通过直接和间接依赖，可以访问到除了测试模块外每个模块的代码。
 
### 4.3 biz 层（业务应用层）

**biz-service-impl：**

biz-service-impl 层是 facade 层的实现，是接口的入口，该层要尽量的薄，不要掺杂太多的业务逻辑，对应的业务逻辑放在 shared 层进行组装，任何需要在入口做的非业务逻辑都应该放在 biz-service-impl 用统一的模版进行处理。

包括但不限于：

- 参数校验
- 数据库本地事务控制
- 服务调用，调用 shared 层对应服务
- 组装返回结果，将 shared 返回结果通过 `WelfareResult` 进行统一包装（返回结果 = VO1,VO2 + 返回码 + 描述）
- 捕获异常
- 日志出入参打印
- 数据埋点
- 其他

**biz-shared：**

biz-shared 层相当于领域驱动设计中的应用层，位于领域层之上，调用的是领域服务，使用的是领域模型，自己则专注于具体应用所需要的逻辑处理，而不包含核心业务规则，更多的是给领域层需要协作的各个领域服务协调任务、委派工作。

特点：

1. 该层业务服务类以 `Manager` 结尾

2. 业务/数据的权限在此严格控制，考虑每一次访问是否真的具有对该数据的查看或操作权限

3. 业务写在对应的业务 bundle 中

4. 实现相对复杂的业务，复用性较低的业务
    > 例如：复权因子计算、业绩计算、行情排行等对多个数据进行聚合或计算；拼装多个业务逻辑

5. 相对完整、独立的，且有可能被复用的模块业务，或者一些通用的业务工具类，可以抽象到 core-service 层
   > 例如：查询人员、审核模块、日期处理类、规则引擎

6. 入参是基本类型或者 `xxxreqDTO` 对象、输出结果是没有被 `WelfareResult` 包裹的 DTO 数据

### 4.4 core 层（核心领域层）

**core-model：**

core-model 模块包含领域层各个模型对象，模型命名以 `Model` 结尾，**一个实体可以有多个 Model**。

**core-service：**

core-service 模块封装核心业务，该层主要有三种类：

1. `xxxService`：领域服务类，要求原子化程度高，通用性强，服务较稳定，改动频率较低，根据是否需要缓存确认继承 cacheableBaseService，对数据进行操作时（增、改、删）时应更新缓存，保证缓存一致性。

2. `xxxConverter`：模型转化类，负责 model -> DO，DO -> model，model -> DTO/VO，DTO/VO -> model 的转化。

3. `xxxRepository`：数据仓库类（可选），复杂数据源场景，数据库操作与服务分离，区分服务与仓库。当一个模型需要通过多个数据源组装，应该将多个数据源的聚合工作放到 Repository 中，如果只是单纯操作单一数据源（如 DB）可以不用添加 Repository。

### 4.5 common 层（基础结构层）

在 common 层中包含了为系统提供基础服务的各个模块：

**common-service-facade：**

facade 层是应用对外提供的接口层，是门面模式在 SOFA 项目中的具体体现。facade 层用于提供接口描述文件（xxxxFacade，DTO），不包含任何业务逻辑（只有接口信息，比如接口定义、接口请求模型和接口返回模型，接口涉及到的 Enum 枚举），该模块使用单独的版本号，需要单独发布打包。

要求：

1. 请求类命名格式为：`com.alipay.{项目名称}.common.service.facade.{模块名称}.request.xxxxxreq`。
   1. 命名须明确清晰的解释出此接口的作用及用途（格式：`操作对象 + 操作动作 + Req`）
   2. 请求都以 `req` 结尾，强制要求继承 `ToString`
   3. 必须要有 `serialVersionUID` 字段，如果请求里面只有一个字段也需要遵守此规范

2. 禁止 facade 接口含有多个参数（所有的请求都由一个复合对象包裹，理论上来说一个接口一个请求对象）。
   1. 返回类命名格式为：由统一的 `WelfareResult` 包装
   2. 对外展示的对象都以 `DTO` 结尾，必须继承 `ToString`
   3. 必须要有 `serialVersionUID` 字段

3. 所有 `tr` 接口类都以 `facade` 结尾，查询类接口与操作类接口分离，方便后期分 zong 发布路由。文件查询类与文件操作类的接口分开为 `FileOperateFacade` 和 `FileQueryFacade`，考虑到 query 流量可能较大，后期可能发布 czone.

**common-service-integration：**

integration 层是应用服务层，用于调用外部服务的 Wrapper 或 Client 等。

- 接口和实现类均使用 client 命名。

- 外部服务依赖均不注册为 SOFA 服务，在实现类中使用 `@Autowired` 引入服务 Bean 对象。

**common-dao：**

dal 层用于配置 ZDAL，包括数据库映射文件 Mapper，以及 DO，DAO 接口和实现。

**common-util：**

util 层则提供了基础的公用的工具服务，包括公共常量，枚举，异常，日志，Log 以及工具类等。

- 工具类命名都以 `Util` 结尾。

::: info 模块间调用规范

理论上各除了本模块的服务，manager 层只调用 manager 层的服务，service 层只调用 service 层的服务。

:::

*参考文档：*

1. [蚂蚁金服研发框架总览 | SOFABoot 框架剖析](https://www.sofastack.tech/blog/sofa-boot-overview/)
2. [SOFA 应用架构详解](https://blog.csdn.net/GitChat/article/details/80809684)
3. [中台技术标准](https://blog.csdn.net/qq_34376868/article/details/123089173)
