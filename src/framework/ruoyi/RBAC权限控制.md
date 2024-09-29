---
date: 2024-08-30
category: 
- 常用框架
tag: 
- RuoYi
---

# RBAC 权限控制

## 1. SpringSecurity 介绍

Spring Security 是一个功能强大的 Java 安全框架，提供了全面的安全认证和授权的支持。

与 RBAC 模型结合使用时，Spring Security 能够实现灵活的权限控制。

它有的二大核心概念 —— 认证和授权：

**1）认证（Authentication）**：认证就像用户登录时提交的用户名和密码，系统通过这些信息来验证 “你是谁”。

Spring Security 不仅支持传统的用户名和密码认证，还支持 OAuth2、JWT 等现代认证方式。

**2）授权（Authorization）**：授权是确认用户在通过认证之后，是否有权限执行某些操作或访问特定资源。

## 2. SpringSecurity 配置

Spring Security 的配置类是实现安全控制的核心部分，用于开启 Spring Security 各种功能，以确保 Web 应用程序的安全性，包括认证、授权、会话管理、过滤器添加等。

```java
package com.dkd.framework.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.web.filter.CorsFilter;
import com.dkd.framework.config.properties.PermitAllUrlProperties;
import com.dkd.framework.security.filter.JwtAuthenticationTokenFilter;
import com.dkd.framework.security.handle.AuthenticationEntryPointImpl;
import com.dkd.framework.security.handle.LogoutSuccessHandlerImpl;

/**
 * spring security配置
 *
 * @author ruoyi
 */
// 开启方法级别的权限控制 ==> @PreAuthorize
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    /**
     * 自定义用户认证逻辑
     */
    @Autowired
    private UserDetailsService userDetailsService;

    /**
     * 认证失败处理类
     */
    @Autowired
    private AuthenticationEntryPointImpl unauthorizedHandler;

    /**
     * 退出处理类
     */
    @Autowired
    private LogoutSuccessHandlerImpl logoutSuccessHandler;

    /**
     * token认证过滤器
     */
    @Autowired
    private JwtAuthenticationTokenFilter authenticationTokenFilter;

    /**
     * 跨域过滤器
     */
    @Autowired
    private CorsFilter corsFilter;

    /**
     * 允许匿名访问的地址
     */
    @Autowired
    private PermitAllUrlProperties permitAllUrl;

    /**
     * 解决 无法直接注入 AuthenticationManager
     *
     * @return
     * @throws Exception
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception
    {
        return super.authenticationManagerBean();
    }

    /**
     * anyRequest          |   匹配所有请求路径
     * access              |   SpringEl表达式结果为true时可以访问
     * anonymous           |   匿名可以访问
     * denyAll             |   用户不能访问
     * fullyAuthenticated  |   用户完全认证可以访问（非remember-me下自动登录）
     * hasAnyAuthority     |   如果有参数，参数表示权限，则其中任何一个权限可以访问
     * hasAnyRole          |   如果有参数，参数表示角色，则其中任何一个角色可以访问
     * hasAuthority        |   如果有参数，参数表示权限，则其权限可以访问
     * hasIpAddress        |   如果有参数，参数表示IP地址，如果用户IP和参数匹配，则可以访问
     * hasRole             |   如果有参数，参数表示角色，则其角色可以访问
     * permitAll           |   用户可以任意访问
     * rememberMe          |   允许通过remember-me登录的用户访问
     * authenticated       |   用户登录后可访问
     */
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception
    {
        // 配置URL访问授权规则
        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry registry = httpSecurity.authorizeRequests();
        // 遍历无需认证即可访问的URL列表，设置这些URL对所有用户可访问
        permitAllUrl.getUrls().forEach(url -> registry.antMatchers(url).permitAll());
        // 配置Web应用程序规则
        httpSecurity
                // CSRF（跨站请求伪造）禁用，因为不使用session
                .csrf().disable()
                // 禁用HTTP响应标头
                .headers().cacheControl().disable().and()
                // 认证失败处理类
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                // 基于token，所以不需要session
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                // 过滤请求
                .authorizeRequests()
                // 对于登录login 注册register 验证码captchaImage 允许匿名访问
                .antMatchers("/login", "/register", "/captchaImage").permitAll()
                // 静态资源，可匿名访问
                .antMatchers(HttpMethod.GET, "/", "/*.html", "/**/*.html", "/**/*.css", "/**/*.js", "/profile/**").permitAll()
                .antMatchers("/swagger-ui.html", "/swagger-resources/**", "/webjars/**", "/*/api-docs", "/druid/**").permitAll()
                // 除上面外的所有请求全部需要鉴权认证
                .anyRequest().authenticated()
                .and()
                .headers().frameOptions().disable();
        // 添加Logout filter
        httpSecurity.logout().logoutUrl("/logout").logoutSuccessHandler(logoutSuccessHandler);
        // 添加JWT filter
        httpSecurity.addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
        // 添加CORS filter
        httpSecurity.addFilterBefore(corsFilter, JwtAuthenticationTokenFilter.class);
        httpSecurity.addFilterBefore(corsFilter, LogoutFilter.class);
    }

    /**
     * 强散列哈希加密实现
     */
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

    /**
     * 身份认证接口
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }
}
```

## 3. 用户登录流程

管理员在登录页面，输入用户名和密码以及验证码后，点击登录按钮，向后端发送请求，后端通过 springSecurity 认证管理器进行登录校验。

此功能涉及前端相关的代码位于 `views/login.vue` 组件中，负责实现用户登录界面和交互逻辑。

后端处理逻辑则在 `dkd-admin` 模块的 SysLoginController 中，负责接收前端的请求，处理登录逻辑，并返回 token 令牌。

### 3.1 前端

1. 点击 `login.vue` 中的登录按钮
2. 调用 `login.vue` 中的 `handleLogin` 方法

3. 调用 `store/mondles/user.js` 中的 `login` 方法，将返回结果存入 useUserStore 对象中（用于管理用户相关的状态和操作）

4. 调用 `api/login.js` 中的 `login` 方法

5. 调用 `utils/request.js` 中的 `service` 实例基于 axios 发送 ajax 请求（.env.development文件设置了统一请求路径前缀）

### 3.2 后端

#### SysLoginController

在 `ruoyi-admin` 模块中 `com.ruoyi.web.controller.system.SysLoginController` 类的 `login` 方法接收前端登录请求

#### SysLoginService

在 `ruoyi-framework` 模块中 `com.ruoyi.framework.web.service.SysLoginService` 类的 `login` 方法处理登录逻辑：

1. 验证码校验
2. 登录前置校验
3. SS 认证管理器用户校验，调用执行 `UserDetailsServiceImpl.loadUserByUsername`
	1. 认证通过后，创建登录用户对象 LoginUser 包括用户 ID、部门 ID、用户信息和用户权限信息
4. 登录成功，记录日志
5. 修改用户表更新登录信息
6. 生成 token

具体的执行的流程如下图：

![用户登录流程](https://cloud.braumace.cn/f/8Rnf3/1.1%20%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B.png)  

## 4. 获取用户角色和权限

只有超级管理员有所有的权限，实现增删改查操作，其他人员只有部分权限。

### 4.1 前端

1. 在全局 `permission.js` 中的 `router.beforeEach` 方法用于在用户导航到不同路由之前进行一些预处理
2. 调用 `store/mondles/user.js` 中的 `getInfo` 方法，将返回结果存入 useUserStore 对象中（用于管理用户相关的状态和操作）
3. 调用 `api/login.js` 中的 `getInfo` 方法

### 4.2 后端

#### SysLoginController

在 `ruoyi-admin` 模块中 `com.ruoyi.web.controller.system.SysLoginController` 类的 `getInfo` 方法接收前端获取用户信息请求

#### SysPermissionService

在 `ruoyi-framework` 模块中 `com.ruoyi.framework.web.service.SysPermissionService` 类

1. `getRolePermission` 查询该用户角色集合
2. `getMenuPermission` 查询该用户权限（菜单）集合

具体的执行的流程如下图：

![用户授权流程](https://cloud.braumace.cn/f/KPxi9/1.2%20%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B.png) 

### 4.3 页面权限

前端封装了一个指令权限，能简单快速的实现按钮级别的权限判断。

**使用权限字符串 v-hasPermi**：`@/directive/permission/hasPermi.js`

```html
// 单个
<el-button v-hasPermi="['system:user:add']">存在权限字符串才能看到</el-button>
// 多个
<el-button v-hasPermi="['system:user:add', 'system:user:edit']">包含权限字符串才能看到</el-button>
```

**使用角色字符串 v-hasRole**：`@/directive/permission/hasRole.js`

```html
// 单个
<el-button v-hasRole="['admin']">管理员才能看到</el-button>
// 多个
<el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
```

## 5. 获取动态菜单路由

普通用户会分配了特定的角色权限。当其登录系统时，看到的侧边栏菜单将根据他的角色权限而有所不同。而超级管理员可以查看所有菜单的。

实现此功能的前端代码位于 `src/permission.js` 文件。在登录成功后，会在跳转到新路由之前，去查询当前用户有权访问的动态菜单的路由列表。

后端处理逻辑则在 `dkd-admin` 模块的 SysLoginController 中，负责接收前端发来的请求，处理查询，并构建起一个完整的菜单树结构，然后返回给前端。

### 5.1 前端

1. 在全局 `permission.js` 中的 `router.beforeEach` 方法用于在用户导航到不同路由之前进行一些预处理
2. 调用 `store/mondles/permission.js` 中的 `generateRoutes` 方法，将返回结果存入 usePermissionStore 对象中
3. 调用 `api/menu.js` 中的 `getRouters` 方法

### 5.2 后端

#### SysLoginController

在 `ruoyi-admin` 模块中 `com.ruoyi.web.controller.system.SysLoginController` 类的 `getRouters` 方法接收前端获取路由信息请求

#### ISysMenuService

在 `ruoyi-system` 模块中 `com.ruoyi.web.system.service.ISysMenuService` 类

1. `selectMenuTreeByUserId` 根据用户 ID 查询菜单树信息（递归生成父子菜单）
2. `buildMenus` 构建前端路由所需要的菜单路由格式 RouterVo

具体的执行的流程如下图：

![](https://cloud.braumace.cn/f/jYrsO/1.3%20%E8%8E%B7%E5%8F%96%E5%8A%A8%E6%80%81%E8%8F%9C%E5%8D%95.png) 

### 5.3 路由菜单加载

1. 用户登录成功后，通过路由 `router/index.js` 跳转到首页并加载 layout 布局组件
2. 在 `layout/index.vue` 中加载 sidbar 侧边栏
3. 在 `layout/components/Sidebar/index.vue` 中遍历动态路由菜单在页面显示
4. 用户点击菜单后会根据路由的 path 跳转到对应的视图组件在 `<app-main />` 显示

## 6. 权限注解

### 6.1 源码分析

在若依框架中，权限的验证最核心的是使用的 Spring Security 的提供的权限注解 `@PreAuthorize`

- `@PreAuthorize` 是 Spring Security 框架中提供的一个安全注解，用于实现基于注解的访问控制。它允许开发者在 **方法级别** 上声明特定的安全约束，以确保只有满足指定条件的用户才能调用该方法
- 当 `@PreAuthorize` 注解被应用于某个方法时，Spring Security 在 **该方法执行前** 会先对当前认证的用户进行权限检查。如果检查通过，方法调用得以继续；否则，框架会抛出相应的权限异常（如 AccessDeniedException），阻止方法执行。

若依框架中的权限控制代码，如下：

```java
@PreAuthorize("@ss.hasPermi('manage:order:list')")
public TableDataInfo list(Order order)
{
    startPage();
    List<Order> list = orderService.selectOrderList(order);
    return getDataTable(list);
}
```

- `@PreAuthorize` 是 Spring Security 框架的权限注解，在执行方法前执行

- `@ss.hasPermi('manage:order:list')`
	- 其中的 ss 是指的一个 spring 管理的 bean
		- 位于 ruoyi-framework 模块中的 com.ruoyi.framework.web.service.PermissionService
	- `hasPermi` 是 PermissionService 类中的一个方法，判断是否拥有该权限
	- `manage:order:list` 为方法的参数

> 注意：在 SecurityConfig 类中添加 `@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)` 后 `@PreAuthorize` 才能生效

权限控制流程：

![](https://cloud.braumace.cn/f/RrWhg/1.4%20%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B.png)

### 6.2 权限方法

`@PreAuthorize` 注解用于配置接口要求用户拥有某些权限才可访问，它拥有如下方法：

| 方法        | 参数   | 描述                                           |
| ----------- | ------ | ---------------------------------------------- |
| hasPermi    | String | 验证用户是否具备某权限                         |
| lacksPermi  | String | 验证用户是否不具备某权限，与 hasPermi逻辑相反  |
| hasAnyPermi | String | 验证用户是否具有以下任意一个权限               |
| hasRole     | String | 判断用户是否拥有某个角色                       |
| lacksRole   | String | 验证用户是否不具备某角色，与 hasRole逻辑相反   |
| hasAnyRoles | String | 验证用户是否具有以下任意一个角色，多个逗号分隔 |

### 6.3 使用示例

1）数据权限示例

```java
// 符合 system:user:list 权限要求
@PreAuthorize("@ss.hasPermi('system:user:list')")

// 不符合 system:user:list 权限要求
@PreAuthorize("@ss.lacksPermi('system:user:list')")

// 符合 system:user:add 或 system:user:edit 权限要求即可
@PreAuthorize("@ss.hasAnyPermi('system:user:add,system:user:edit')")
```

编程式判断是否有资源权限：

```java
if (SecurityUtils.hasPermi("sys:user:edit"))
{
    System.out.println("当前用户有编辑用户权限");
}
```

2）角色权限示例

```java
// 属于 user 角色
@PreAuthorize("@ss.hasRole('user')")

// 不属于 user 角色
@PreAuthorize("@ss.lacksRole('user')")

// 属于 user 或者 admin 之一
@PreAuthorize("@ss.hasAnyRoles('user,admin')")
```

编程式判断是否有角色权限：

```java
if (SecurityUtils.hasRole("admin"))
{
    System.out.println("当前用户有admin角色权限");
}
```

> 权限提示：超级管理员拥有所有权限，不受权限约束。

### 6.4 公开接口

如果有些接口是不需要验证权限可以公开访问的，这个时候就需要我们给接口放行。

使用注解方式，只需要在 `Controller` 的类或方法上加入 `@Anonymous` 该注解即可。

```java
// @PreAuthorize("@ss.xxxx('....')") 注释或删除掉原有的权限注解
@Anonymous
@GetMapping("/list")
public List<SysXxxx> list(SysXxxx xxxx)
{
    return xxxxList;
}
```

## 7. 数据权限

### 7.1 数据权限介绍

数据权限的作用：**确保用户只能访问他们被授权查看的数据**。保护敏感信息，防止敏感数据泄露给未授权的人员，确保信息安全。

数据权限的场景：

1. 部门级权限：比如，市场部的员工应该只能访问到销售部的数据，确保他们只能触及自己部门的信息。
2. 公司级权限：子公司的经理可能需要有更广阔的视野，他们需要查看整个子公司的数据，以做出战略决策。
3. 跨部门权限：而对于公司的高级领导或特定角色，他们可能需要有更全面的数据访问权限，以便跨部门或跨公司地进行管理和决策。

通过数据权限控制，不仅能够保护数据安全，还可以确保了数据的合理利用和流程的顺畅。

在 ruoyi 系统中，权限的分配和控制主要依赖于角色。每个角色可以被赋予不同的菜单权限和数据权限，用户则通过他们的角色来继承这些权限，进而决定他们能访问哪些系统资源。

目前，系统支持以下五种数据权限类型：

- **全部数据权限**：无限制访问所有数据，相当于拥有最高权限的通行证。
- **自定数据权限**：用户可以根据自己的需求设定访问特定数据的规则。
- **部门数据权限**：只能访问自己所在部门的数据，限制在本部门范围内。
- **部门及以下数据权限**：可以访问自己部门及下属部门的数据，适用于管理层级。
- **仅本人数据权限**：只能访问和操作自己的数据，保障个人隐私和数据隔离。

### 7.2 源码实现

1、ruoyi 系统的数据权限设计主要通过用户、角色、部门表建立关系，实现对数据的访问控制：

![](https://cloud.braumace.cn/f/35Dcr/1.5%20%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90%E8%AE%BE%E8%AE%A1.png)  

2、在需要数据权限控制方法上添加 `@DataScope` 注解，其中 `d` 和 `u` 用来表示表的别名。

部门数据权限注解：

```java
@DataScope(deptAlias = "d")
public List<...> select(...)
{
    return mapper.select(...);
}
```

部门及用户权限注解：

```java
@DataScope(deptAlias = "d", userAlias = "u")
public List<...> select(...)
{
    return mapper.select(...);
}
```

| 参数      | 类型   | 默认值 | 描述         |
| --------- | ------ | ------ | ------------ |
| deptAlias | String | 空     | 部门表的别名 |
| userAlias | String | 空     | 用户表的别名 |



3、在 `mybatis` 查询底部标签添加数据范围过滤

```xml
<select id="select" parameterType="..." resultMap="...Result">
    <include refid="select...Vo"/>
    <!-- 数据范围过滤 -->
    ${params.dataScope}
</select>
```

其作用就是相当于在一个 select 语句后面拼接一个 and 条件语句，来实现查询限制，例如下面：

```sql
-- 用户管理（未过滤数据权限的情况）：
select u.user_id, u.dept_id,  u.user_name, u.email
	, u.phonenumber, u.password, u.sex, u.avatar
	, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by
	, u.create_time, u.remark, d.dept_name
from sys_user u
	left join sys_dept d on u.dept_id = d.dept_id
where u.del_flag = '0';
```

```sql
-- 用户管理（已过滤数据权限的情况）：
select u.user_id, u.dept_id,  u.user_name, u.email
	, u.phonenumber, u.password, u.sex, u.avatar
	, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by
	, u.create_time, u.remark, d.dept_name
from sys_user u
	left join sys_dept d on u.dept_id = d.dept_id
where u.del_flag = '0'
	and u.dept_id in (
        select dept_id
        from sys_role_dept
        where role_id = 2
    );
```

结果很明显，通过添加如下语句。通过角色部门表 `sys_role_dept` 完成了自定义类型的数据权限过滤。

```sql
and u.dept_id in (
	select dept_id
	from sys_role_dept
	where role_id = 2
)
```

4、若依数据权限底层使用了 **自定义注解 + AOP切面 + SQL拼接**

- com.dkd.common.annotation.DataScope 自定义注解
- com.ruoyi.framework.aspectj.DataScopeAspect：切面类
	- 通过实现 AOP 编程，对目标方法进行拦截（标注 DataScope 注解的方法），实现了构建数据范围 SQL 过滤条件

![](https://cloud.braumace.cn/f/7JWH9/1.6%20%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90%E5%AE%9E%E7%8E%B0.png) 

::: warning 提示

仅实体继承 `BaseEntity` 才会进行处理，SQL 语句会存放到 `BaseEntity` 对象中的 `params` 属性中，然后在 xml 文件中通过 `${params.dataScope}` 获取拼接后的语句。

:::
