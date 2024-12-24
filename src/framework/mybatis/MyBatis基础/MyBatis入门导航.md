---
category: 
- 常用框架
tag: 
- MyBatis
---

# MyBatis 入门导航

<!-- more -->

## 1. MyBatis 是什么？

MyBatis 是一个开源、轻量级的数据持久化框架，是 JDBC 和 Hibernate 的替代方案。MyBatis 内部封装了 JDBC，简化了加载驱动、创建连接、创建 statement 等繁杂的过程，开发者只需要关注 SQL 语句本身。

**数据持久化**是将内存中的数据模型转换为存储模型，以及将存储模型转换为内存中数据模型的统称。例如，文件的存储、数据的读取以及对数据表的增删改查等都是数据持久化操作。

MyBatis 支持定制化 SQL、存储过程以及高级映射，可以在实体类和 SQL 语句之间建立映射关系，是一种半自动化的 ORM 实现。其封装性低于 Hibernate，但性能优秀、小巧、简单易学、应用广泛。

**ORM**（Object Relational Mapping，对象关系映射）是一种数据持久化技术，它在对象模型和关系型数据库之间建立起对应关系，并且提供了一种机制，通过 JavaBean 对象去操作数据库表中的数据。

MyBatis 的主要思想是将程序中的大量 SQL 语句剥离出来，使用 XML 文件或注解的方式实现 SQL 的灵活配置，将 SQL 语句与程序代码分离，在不修改程序代码的情况下，直接在配置文件中修改 SQL 语句。

MyBatis 与其它持久性框架最大的不同是，MyBatis 强调使用 SQL，而其它框架（例如 Hibernate）通常使用自定义查询语言，即 HQL（Hibernate查询语言）或 EJB QL（Enterprise JavaBeans查询语言）。

MyBatis 官方文档：[https://mybatis.org/mybatis-3/zh/](https://mybatis.org/mybatis-3/zh/)

**优点：**

- MyBatis 免费且开源。

- 与 JDBC 相比，减少了 50% 以上的代码量。

- MyBatis 是最简单的持久化框架，小巧并且简单易学。

- MyBatis 相当灵活，不会对应用程序或者数据库的现有设计强加任何影响，SQL 写在 XML 中，和程序逻辑代码分离，降低耦合度，便于同一管理和优化，提高了代码的可重用性。

- 提供 XML 标签，支持编写动态 SQL 语句。

- 提供映射标签，支持对象与数据库的 ORM 字段关系映射。

- 支持存储过程。MyBatis 以存储过程的形式封装 SQL，可以将业务逻辑保留在数据库之外，增强应用程序的可移植性、更易于部署和测试。

**缺点：**

- 编写 SQL 语句工作量较大，对开发人员编写 SQL 语句的功底有一定要求。

- SQL 语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。

::: info MyBatis-Plus

MyBatis-Plus（简称 MP）是 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，支持 MyBatis 所有原生的特性，为简化开发、提高效率而生。有兴趣的小伙伴可以参考 MyBatis-Plus 官网。

:::
