---
date: 2024-07-12
order: 3
category:
- 中间件
tag:
- MinIO
---

# SPringBoot 整合 MinIO

## 引入依赖

```xml
<dependency>
    <groupId>io.minio</groupId>
    <artifactId>minio</artifactId>
    <version>8.5.9</version>
</dependency>
```

## 配置文件


::: tip MinIO 中的 Bucket、Object

Bucket 是存储 Object 的逻辑空间，每个 Bucket 之间的数据是相互隔离的，对用户而言，相当于存放文件的顶层文件夹

Object 是存储到 MinIO 的基本对象，对用户而言，相当于文件

:::

## MinioClient的常用API：

- `bucketExists()`：用于检查指定的存储桶是否存在，返回布尔值，表示存储桶是否存在

- `makeBucket()`：用于创建一个新的存储桶（bucket），需要指定存储桶的名称

- `listBuckets()`：用于列出用户有权访问的所有存储桶，返回存储桶的列表

- `removeBucket()`：用于删除一个已存在的存储桶（bucket），删除失败会抛出异常

