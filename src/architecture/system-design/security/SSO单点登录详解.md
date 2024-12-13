---
category: 
- 系统设计
tag: 
- 认证鉴权
---

# SSO 单点登录详解

<!-- more -->

## 1. OAuth 2.0 概述

OAuth 是一种单点登录的协议，用于自建应用与 OAuth 认证服务提供方之间的认证授权，实现通过第三方账户登录应用。

有两个关键角色：

1. **身份提供者（Identity Provider, IdP）**：

    定义：IdP 是负责验证用户身份并提供身份信息的实体。它管理用户的认证信息（如用户名、密码、令牌等）并提供这些信息给信任它的服务提供者。

2. **服务提供者（Service Provider, SP）**：

    定义：SP 是提供某种服务或应用的实体，它依赖 IdP 来验证用户身份。SP 信任 IdP 提供的身份验证信息，并根据这些信息决定用户的访问权限。

遵循 [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)，可以使用 [标准的 OAuth 客户端库](https://oauth.net/code/) 进行接入。

