---
category: 
- 常用框架
tag: 
- MyBatis-Plus
---

# MyBatis-Plus Wrapper 条件构造器

<!-- more -->

## 1. 概述

MyBatis-Plus 提供了一套强大的条件构造器（Wrapper），用于构建复杂的数据库查询条件。Wrapper 类允许开发者以链式调用的方式构造查询条件，无需编写繁琐的 SQL 语句，从而提高开发效率并减少 SQL 注入的风险。

在 MyBatis-Plus 中，Wrapper 类是构建查询和更新条件的核心工具。以下是主要的 Wrapper 类及其功能：

- **AbstractWrapper**：这是一个抽象基类，提供了所有 Wrapper 类共有的方法和属性。它定义了条件构造的基本逻辑，包括字段（column）、值（value）、操作符（condition）等。所有的 QueryWrapper、UpdateWrapper、LambdaQueryWrapper 和 LambdaUpdateWrapper 都继承自 AbstractWrapper。

- **QueryWrapper**：专门用于构造查询条件，支持基本的等于、不等于、大于、小于等各种常见操作。它允许你以链式调用的方式添加多个查询条件，并且可以组合使用 and 和 or 逻辑。

- **UpdateWrapper**：用于构造更新条件，可以在更新数据时指定条件。与 QueryWrapper 类似，它也支持链式调用和逻辑组合。使用 UpdateWrapper 可以在不创建实体对象的情况下，直接设置更新字段和条件。

- **LambdaQueryWrapper**：这是一个基于 Lambda 表达式的查询条件构造器，它通过 Lambda 表达式来引用实体类的属性，从而避免了硬编码字段名。这种方式提高了代码的可读性和可维护性，尤其是在字段名可能发生变化的情况下。

- **LambdaUpdateWrapper**：类似于 LambdaQueryWrapper，LambdaUpdateWrapper 是基于 Lambda 表达式的更新条件构造器。它允许你使用 Lambda 表达式来指定更新字段和条件，同样避免了硬编码字段名的问题。

Wrapper 作为一个抽象类，其继承关系如下：

![](https://cloud.bytelighting.cn/f/NmBhv/1_1.Wrapper.png)

::: tip

AbstractChainWrapper 类是一个用于链式查询条件封装的抽象类。它的主要作用是提供一个链式的方法调用机制，允许开发者以一种流畅的接口风格来构建复杂的查询条件。

:::

## 2. AbstractWrapper

AbstractWrapper 作为所有 Wrapper 类的抽象基类，AbstractWrapper 中的方法子类都能够使用，包括 QueryWrapper（LambdaQueryWrapper）和 UpdateWrapper（LambdaUpdateWrapper）。

::: tip 普通 Wrapper 与 lambdaWrapper 关于字段引用上的区别

在 LambdaWrapper 中，`R` 代表的是一个函数，用于引用**实体类的属性**。而在普通 Wrapper 中，`R` 代表的是**数据库字段名**。

以 `Eq` 方法为例，对字段 id 使用 `eq(R column, Object val)` 如下：

- Wrapper：`eq("id", "001")`

- LambdaWrapper：`eq(Entity:getId, "001")`

:::

### 2.1 allEq

**多字段等于**：全部等于判断，或条件非空判断。

1. 常规查询：

```java
// params : key 为数据库字段名, value 为字段值
allEq(Map<R, V> params)
// 设置所有字段的相等条件，如果字段值为null，则根据null2IsNull参数决定是否设置为IS NULL
allEq(Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, Map<R, V> params, boolean null2IsNull)
```

示例：

```java
allEq({id:1, name:"老王", age:null});
// 相当于 WHERE id = 1 and name = '老王' and age is null
```

2. 过滤查询

```java
// 设置所有字段的相等条件，通过filter过滤器决定哪些字段应该被包含，如果字段值为null，则根据null2IsNull参数决定是否设置为IS NULL
allEq(BiPredicate<R, V> filter, Map<R, V> params)
// 同上
allEq(BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull)
```

示例：

```java
// 组装查询条件
QueryWrapper<User> wrapper = new QueryWrapper<>();
// and 语句
Map<String, Object> map = new HashMap();
map.put("name", "BraumAce");
map.put("age", 30);
map.put("gender", null);
// 添加过滤函数，k 代表字段名，只查询字段名包含 a 字母的字段
wrapper.allEq((k, v) -> k.contains("a"), map);

// 实际执行 SQL : SELECT id,name,age,gender FROM user WHERE (name = 'BraumAce' AND age = 30)
userMapper.selectList(wrapper);
```

### 2.2 eq

**单字段等于**：`=`。

```java
// 设置指定字段的相等条件
eq(R column, Object val)

// 根据条件设置指定字段的相等条件
eq(boolean condition, R column, Object val)
```

### 2.3 ne

**不等于**：`<>` 或 `!=`。

```java
// 设置指定字段的不相等条件
ne(R column, Object val)

// 根据条件设置指定字段的不相等条件
ne(boolean condition, R column, Object val)
```

### 2.4 gt

**大于**：`>`。

```java
// 设置指定字段的大于条件
gt(R column, Object val)

// 根据条件设置指定字段的大于条件
gt(boolean condition, R column, Object val)
```

### 2.5 ge

**大于等于**：`>=`。

```java
// 设置指定字段的大于等于条件
ge(R column, Object val)

// 根据条件设置指定字段的大于等于条件
ge(boolean condition, R column, Object val)
```

### 2.6 lt

**小于**：`<`。

```java
// 设置指定字段的小于条件
lt(R column, Object val)

// 根据条件设置指定字段的小于条件
lt(boolean condition, R column, Object val)
```

### 2.7 le

**小于等于**：`<=`。

```java
// 设置指定字段的小于等于条件
le(R column, Object val)

// 根据条件设置指定字段的小于等于条件
le(boolean condition, R column, Object val)
```

### 2.8 between

**范围查询**：`BETWEEN val1 AND val2`。

```java
// 设置指定字段的 BETWEEN 条件
between(R column, Object val1, Object val2)

// 根据条件设置指定字段的 BETWEEN 条件
between(boolean condition, R column, Object val1, Object val2)
```

### 2.9 notBetween

**非范围查询**：`NOT BETWEEN val1 AND val2`。

```java
// 设置指定字段的 NOT BETWEEN 条件
notBetween(R column, Object val1, Object val2)

// 根据条件设置指定字段的 NOT BETWEEN 条件
notBetween(boolean condition, R column, Object val1, Object val2)
```

::: tip gt、ge、lt、le、between、notBetween

`gt`、`ge`、`lt`、`le`、`between`、`notBetween` 共六种比较方法，均适用于数值型字段：

- 对于字符串等非数值型字段，使用该六种方法可能会导致不期望的结果或错误。
- 在使用比较方法时，确保 `val` 参数的类型与字段类型相匹配，以避免类型转换错误。
- 如果需要根据某些条件动态添加比较条件，可以使用带有 `condition` 参数的重载方法。

:::

### 2.10 like

**模糊查询**：`LIKE '%val%'`。

```java
// 设置指定字段的 LIKE 条件
like(R column, Object val)

// 根据条件设置指定字段的 LIKE 条件
like(boolean condition, R column, Object val)
```

### 2.11 notLike

**非模糊查询**：`NOT LIKE '%val%'`。

```java
// 设置指定字段的 NOT LIKE 条件
notLike(R column, Object val)

// 根据条件设置指定字段的 NOT LIKE 条件
notLike(boolean condition, R column, Object val)
```

### 2.12 likeLeft

**右模糊匹配**：`LIKE '%val'`。

```java
// 设置指定字段的右模糊匹配条件
likeLeft(R column, Object val)

// 根据条件设置指定字段的右模糊匹配条件
likeLeft(boolean condition, R column, Object val)
```

### 2.13 likeRight

**左模糊匹配**：`LIKE 'val%'`。

```java
// 设置指定字段的左模糊匹配条件
likeRight(R column, Object val)

// 根据条件设置指定字段的左模糊匹配条件
likeRight(boolean condition, R column, Object val)
```

### 2.14 notLikeLeft

**非右模糊匹配**：`NOT LIKE '%val'`。

```java
// 设置指定字段的非右模糊匹配条件
notLikeLeft(R column, Object val)

// 根据条件设置指定字段的非右模糊匹配条件
notLikeLeft(boolean condition, R column, Object val)
```

### 2.15 notLikeRight

**非左模糊匹配**：`NOT LIKE 'val%'`。

```java
// 设置指定字段的非左模糊匹配条件
notLikeRight(R column, Object val)

// 根据条件设置指定字段的非左模糊匹配条件
notLikeRight(boolean condition, R column, Object val)
```

::: tip like、notLike、likeLeft、likeRight、notLikeLeft、notLikeRight

`like`、`notLike`、`likeLeft`、`likeRight`、`notLikeLeft`、`notLikeRight` 共六种模糊匹配方法，均适用于字符串类型的字段：

- 默认情况下，`like` 系列方法会在搜索值周围添加 `%`，实现模糊匹配。
- 在使用模糊匹配方法时，确保 `val` 参数的类型是字符串，以避免类型转换错误。
- 如果需要根据某些条件动态添加模糊匹配条件，可以使用带有 `condition` 参数的重载方法。

:::

### 2.16 isNull

**为空**：`字段 IS NULL`。

```java
// 设置指定字段的 IS NULL 条件
isNull(R column)

// 根据条件设置指定字段的 IS NULL 条件
isNull(boolean condition, R column)
```

### 2.17 isNotNull

**非空**：`字段 IS NOT NULL`。

```java
// 设置指定字段的 IS NULL 条件
isNotNull(R column)

// 根据条件设置指定字段的 IS NOT NULL 条件
isNotNull(boolean condition, R column)
```

### 2.17 in

**包含**：`字段 IN (value.get(0), value.get(1), ...)` 或 `字段 IN (value1, value2, ...)`。

```java
// 设置指定字段的 IN 条件，使用集合、
in(R column, Collection<?> value)
in(boolean condition, R column, Collection<?> value)

// 设置指定字段的 IN 条件，使用可变参数
in(R column, Object... values)
in(boolean condition, R column, Object... values)
```

### 2.18 notIn

**不包含**：`字段 NOT IN (value.get(0), value.get(1), ...)` 或 `字段 NOT IN (value1, value2, ...)`。

```java
// 设置指定字段的 NOT IN 条件，使用集合
notIn(R column, Collection<?> value)
notIn(boolean condition, R column, Collection<?> value)

// 设置指定字段的 NOT IN 条件，使用可变参数
notIn(R column, Object... values)
notIn(boolean condition, R column, Object... values)
```

::: tip isNull、isNotNull、in、notIn

`isNull`、`isNotNull`、`in`、`notIn` 共四种查询方法，适用于所有类型的字段，用于查询字段值是否为空或是否存在的记录：

- 在使用上述四种方法时，确保 `column` 参数正确指向了数据库中的字段名或使用 `Lambda` 表达式的字段名。
- 如果需要根据某些条件动态添加判空或包含条件，可以使用带有 `condition` 参数的重载方法。

:::

### 2.19 inSql

**子查询**：允许直接使用 SQL 语句来生成 IN 子句中的值集合。

```java
// 设置指定字段的 IN 条件，使用 SQL 语句
inSql(R column, String sqlValue)
inSql(boolean condition, R column, String sqlValue)
```

### 2.20 notInSql

与 `inSql` 相反，允许直接使用 SQL 语句来生成 NOT IN 子句中的值集合。

```java
// 设置指定字段的 NOT IN 条件，使用 SQL 语句
notInSql(R column, String sqlValue)
notInSql(boolean condition, R column, String sqlValue)
```

::: tip inSql、notInSql

`inSql`、`notInSql` 方法允许使用 SQL 语句来生成 `IN` / `NOT IN` 子句中的值集合。

- 在使用这两个方法时，确保 `column` 参数正确指向了数据库中的字段名或使用 `Lambda` 表达式的字段名。
- `sqlValue` 参数应该是一个有效的 SQL 语句，它将直接嵌入到生成的 SQL 中，因此需要确保其安全性和正确性，应避免 SQL 由前端动态参数传入并直接引用。
- 如果需要根据某些条件动态添加 `IN` / `NOT IN` 条件，可以使用带有 `condition` 参数的重载方法。

:::

### 2.21 eqSql、gtSql、geSql、ltSql、leSql

**比较查询**：但与 `eq`、`eq`、`gt`、`ge`、`lt`、`le` 方法不同的是，它们允许将一个字段与 SQL 语句的结果进行比较。

**特别适用于需要将字段值与子查询结果进行比较的场景**。

```java
// 设置指定字段等于 SQL 语句的结果
eqSql(R column, String inValue)

// 在条件满足时设置指定字段等于 SQL 语句的结果
eqSql(boolean condition, R column, String inValue)

// 其他方法同理，故省略...
```

### 2.22 groupBy

**分组**：通过指定一个或多个字段，生成 `GROUP BY` 子句。

```java
// 设置分组条件，使用字段名
groupBy(R... columns)
groupBy(boolean condition, R... columns)
```

### 2.23 orderByAsc、orderByDesc、orderBy

**排序**：通过指定一个或多个字段以及排序方向（升序或降序），生成 `ORDER BY` 子句。

```java
// 设置升序排序条件，使用字段名
orderByAsc(R... columns)
orderByAsc(boolean condition, R... columns)

// 设置降序排序条件，使用字段名
orderByDesc(R... columns)
orderByDesc(boolean condition, R... columns)

// 设置排序条件，使用字段名和排序方向（true表示升序，false表示降序）
orderBy(boolean condition, boolean isAsc, R... columns)
```

### 2.24 having

**查询条件**：设置 `HAVING` 子句，通常与 `GROUP BY` 一起使用，用于对分组后的数据进行条件筛选。

```java
// 设置 HAVING 子句，使用 SQL 语句和参数
having(String sqlHaving, Object... params)
having(boolean condition, String sqlHaving, Object... params)
```

### 2.25 func

**链式调用**：通过传入一个 `Consumer` 函数式接口，允许在不中断链式调用的情况下，根据条件执行不同的查询构建逻辑。

```java
// 根据条件执行不同的查询构建逻辑
func(Consumer<Children> consumer)
func(boolean condition, Consumer<Children> consumer)
```

示例：

```java
func(i -> {
    if (true) {
        i.eq("id", 1);
    } else {
        i.ne("id", 1);
    }
});
```

### 2.26 or

**OR 逻辑**：通过调用 `or` 方法，可以改变后续查询条件的连接方式，从默认的 AND 连接变为 OR 连接。

```java
// 改变后续查询条件的连接方式为 OR
or()
or(boolean condition)

// 添加 OR 嵌套条件
or(Consumer<Param> consumer)
or(boolean condition, Consumer<Param> consumer)
```

示例：

```java
// 拼接 or
eq("id",1).or().eq("name","老王");
// 相当于 id = 1 or name = '老王'

// or 嵌套
or(i -> i.eq("name", "李白").ne("status", "活着"))
// 相当于 or (name = '李白' and status <> '活着')
```

### 2.27 and

**AND 逻辑**：通过调用 `and` 方法，可以创建 AND 嵌套条件，即在一个 AND 逻辑块中包含多个查询条件。

```java
// 添加 AND 嵌套条件
and(Consumer<Param> consumer)
and(boolean condition, Consumer<Param> consumer)
```

示例：

```java
and(i -> i.eq("name", "李白").eq("status", "alive"));

// 相当于 and (name = '李白' AND status = 'alive')
```

### 2.28 nested

**独立查询**：创建一个不带默认的 AND 或 OR 逻辑的独立查询条件块。通过调用 `nested` 方法，可以在查询条件中添加一个嵌套的子句，该子句可以包含多个查询条件，并且可以被外部查询条件通过 AND 或 OR 连接。

```java
// 添加一个独立的查询条件块
nested(Consumer<Param> consumer)
nested(boolean condition, Consumer<Param> consumer)
```

示例：

```java
nested(i -> i.eq("name", "李白").ne("status", "活着"));

// 相当于 (name = '李白' and status <> '活着')
```

### 2.29 apply

**拼接 sql**：直接拼接 SQL 片段到查询条件中。

**特别适用于需要使用数据库函数或其他复杂 SQL 构造的场景**。

```java
// 拼接 SQL 片段
apply(String applySql, Object... params)
apply(boolean condition, String applySql, Object... params)
```

::: tip apply

动态入参的 `params` 对应 `applySql` 内部的 `{index}` 部分，这样是不会有 SQL 注入风险的。

如果直接将参数拼接到 SQL 中，则会有 SQL 注入风险，故应避免 SQL 由前端动态参数传入并直接引用。

:::

### 2.30 last

**末尾拼接 sql**：直接在查询的最后添加一个 SQL 片段，而不受 MyBatis-Plus 的查询优化规则影响。

应谨慎使用该方法，因为可能会绕过 MyBatis-Plus 的查询优化。

```java
// 在查询的最后添加一个 SQL 片段
last(String lastSql)
last(boolean condition, String lastSql)
```

::: tip

- `last` 方法只能调用一次，多次调用将以最后一次为准。
- 使用 `last` 方法会绕过 MyBatis-Plus 的查询优化规则，可能会导致查询效率降低。
- 因为 lastSql 参数直接拼接到 SQL 中，所以必须确保输入的 SQL 片段是安全的，即保障 `lastSql` 应该是后端自行控制，而不是动态参数由前端传入。

:::

### 2.31 exists、notExists

**拼接 exists**：用于在查询中添加一个 EXISTS / NOT EXISTS 子查询。通过调用 `exists` / `notExists ` 方法，可以将一个完整的 SQL 子查询作为 EXISTS 条件添加到主查询中。

```java
// 添加 EXISTS 子查询
exists(String existsSql)
exists(boolean condition, String existsSql)
```

## 3. QueryWrapper、LambdaQueryWrapper

QueryWrapper 继承自 AbstractWrapper，自身的内部属性 `entity` 也用于生成 where 条件。

LambdaQueryWrapper 支持以 lambda 形式组装条件，可以通过 `new QueryWrapper().lambda()` 方法获取实例。

### 3.1 select

**设置查询字段**：指定在查询结果中包含哪些字段，从而实现字段级别的查询定制

```java
// 设置查询字段
select(String... sqlSelect)

// 过滤查询字段（主键除外）
select(Predicate<TableFieldInfo> predicate)
select(Class<T> entityClass, Predicate<TableFieldInfo> predicate)
```

::: info select

`select` 方法分为两类：

- 第一类直接指定要查询的字段名，第二类通过 `Predicate` 过滤字段。

- 第二类方法用于过滤查询字段（主键除外），如果入参不包含 `entityClass`，则在调用前需要确保 `wrapper` 内的 `entity` 属性有值。

- 这两类方法重复调用时，以最后一次调用为准。

:::

## 4. UpdateWrapper、LambdaUpdateWrapper

UpdateWrapper 继承自 AbstractWrapper，自身的内部属性 `entity` 也用于生成 where 条件。

LambdaUpdateWrapper 支持以 lambda 形式组装条件，可以通过 `new UpdateWrapper().lambda()` 方法获取实例。

### 4.1 set

**更新字段**：指定在更新操作中要修改的字段及其新值。

```java
// 设置更新语句中的 SET 字段
set(R column, Object val)
set(R column, Object val, String mapping)
set(boolean condition, R column, Object val)
set(boolean condition, R column, Object val, String mapping)
```

### 4.2 seSql

**更新部分 sql**：可以将一个自定义的 SQL 片段作为 SET 子句添加到更新语句中。

```java
// 设置更新语句中的 SET 部分 SQL
setSql(String setSql, Object... params)
setSql(boolean condition, String setSql, Object... params)
```

示例：

```java
setSql("name = '老李头'")
setSql("dateColumn={0}", LocalDate.now())
setSql("type={0,javaType=int,jdbcType=NUMERIC,typeHandler=xxx.xxx.MyTypeHandler}", "待处理字符串");
```

## 5. LambdaUpdateWrapper

### 5.1 setIncrBy、setDecrBy

**指定字段更新指定值**：指定一个字段，并使其在数据库中的值增加or减少指定的数值。

**特别适用于需要对数值字段进行增量or减量操作的场景**。

```java
// 字段自增指定数值
setIncrBy(SFunction<T, ?> column, Number val)

// 在条件满足时字段自增指定数值
setIncrBy(boolean condition, SFunction<T, ?> column, Number val)

// 字段自减指定数值
setDecrBy(SFunction<T, ?> column, Number val)

// 在条件满足时字段自减指定数值
setDecrBy(boolean condition, SFunction<T, ?> column, Number val)
```

### 5.2 lambda

`lambda` 方法可以从 `QueryWrapper` 或 `UpdateWrapper` 对象中获取对应的 `LambdaQueryWrapper` 或 `LambdaUpdateWrapper` 对象。这样就可以使用 Lambda 表达式来构建查询或更新条件，使得代码更加简洁和类型安全。

```java
// 获取 Lamdba Wrapper
lambda();
```

::: info lambda

- `lambda` 方法返回一个 `LambdaWrapper` 对象，具体类型取决于调用它的 `Wrapper` 类型。
- 在 `QueryWrapper` 上调用 `lambda` 方法将返回一个 `LambdaQueryWrapper。`
- 在 `UpdateWrapper` 上调用 `lambda` 方法将返回一个 `LambdaUpdateWrapper。`
- 使用 Lambda 表达式可以避免直接使用字符串来指定字段名，从而减少错误并提高代码的可读性。

:::

### 6. Wrappers

`Wrappers` 类是一个静态工厂类，用于快速创建 `QueryWrapper`、`UpdateWrapper`、`LambdaQueryWrapper` 和 `LambdaUpdateWrapper` 的实例。

示例：

```java
// 创建 QueryWrapper
QueryWrapper<User> queryWrapper = Wrappers.query();
queryWrapper.eq("name", "张三");

// 创建 LambdaQueryWrapper
LambdaQueryWrapper<User> lambdaQueryWrapper = Wrappers.lambdaQuery();
lambdaQueryWrapper.eq(User::getName, "张三");

// 创建 UpdateWrapper
UpdateWrapper<User> updateWrapper = Wrappers.update();
updateWrapper.set("name", "李四");

// 创建 LambdaUpdateWrapper
LambdaUpdateWrapper<User> lambdaUpdateWrapper = Wrappers.lambdaUpdate();
lambdaUpdateWrapper.set(User::getName, "李四");
```

::: warning 线程安全

所有的 Wrapper 实例都不是线程安全的，因此建议在每次使用时创建新的 Wrapper 实例。这样可以避免多线程环境下的数据竞争和潜在的错误。

:::

