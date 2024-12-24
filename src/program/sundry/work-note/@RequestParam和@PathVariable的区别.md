---
category: 
- 杂项
tag: 
- 工作笔记
comment: false
---

# @RequestParam 和 @PathVariable 的区别

@RequestParam 注解和 @PathVariable 注解的区别，从字面上可以看出：

- 前者是获取**请求**里边携带的参数；
- 后者是获取**请求路径**里边的变量参数。

<!-- more -->

例如：`127.0.0.1/user/{userId}?userName=zhangshan`，`userId` 是路径上的变量，`userName` 才是请求参数信息。

## @RequestParam 注解

@RequestParam 有三个参数：

- **value**：参数名。

- **required**：是否必需，默认为 $true$，表示请求参数中必须包含该参数，如果不包含抛出异常。

- **defaultValue**：默认参数值，如果设置了该值自动将 `required` 设置为 $false$，如果参数中没有包含该参数则使用默认值。

    > 示例：`@RequestParam(value = "userId", required = false, defaultValue = "1")`


## @PathVariable 注解

当使用 @RequestMapping URI 占位符映射时，url 中可以通过一个或多个 `{xxxx}` 占位符映射，通过 @PathVariable 可以绑定占位符参数到方法参数中。

例如：`@PathVariable("userId") Long userId, @PathVariable("userName") String userName`

（注：Long 类型可以根据需求自己改变 String 或 int，Spring 会自动做转换）

> `@RequestMapping("/user/{userId}/{userName}/query")`
> 
> 请求 URL：`http://localhost/user/8/张山/query`

::: warning @PathVariable 小误区

有些参考资料中说，如果定义的参数名和占位符中的名称是相同的，则可以将 @PathVariable(xxxx) 简写为：@PathVariable，这其实是错误的！

因为在正常编译时，Java 类反射对象是不包含方法的入参名称的，如果编译时将 debug 打开（`javac –debug=no`），方法的入参名称会记录到类中。

:::
