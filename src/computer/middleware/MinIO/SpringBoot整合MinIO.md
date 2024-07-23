---
date: 2024-07-12
order: 3
category:
- 中间件
tag:
- MinIO
---

# SpringBoot 整合 MinIO

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

SpringBoot 使用 MinIO 非常方便，只需要创建 MinIOClient 即可，后续通过调用 API 对 MinIO 服务进行配置和操作。

1. 在 application.yml 中配置 MinIO 连接信息

   ```yml
   minio:
     endpoint: http://localhost:9000  # 服务器地址和端口
     accessKey: minioadmin  # minio用户名
     secretKey: minioadmin  # minio密码
     bucket: user-bucket    # 使用的存储桶（可选）
   ```

2. 添加 MinIO 实体类

   ```java
   @Data
   @Component
   @ConfigurationProperties(prefix = "minio")
   public class MinIOInfo {
       private String endpoint;
       private String accessKey;
       private String secretKey;
       private String bucket;
   }
   ```

3. 将 MinIOClient 注册为 Bean 对象，后续通过注入 `minioClient` 对象即可实现对 MinIO 的操作。

   ```java
   @Configuration
   public class Config {

       @Resource
       private MinIOInfo minIOInfo;

       @Bean
       public MinioClient minioClient() {
           //链式编程，构建MinioClient对象
           return MinioClient.builder()
                   .endpoint(minIOInfo.getEndpoint())
                   .credentials(minIOInfo.getAccessKey(), minIOInfo.getSecretKey())
                   .build();
       }
   }
   ```

::: tip 支持多线程

MinioClient 对象是单例的，那么有没有线程安全问题呢？

答案是：没有线程安全问题。MinIO 官方团队表示，可以多个线程共同使用一个 MinIOClient 对象。

:::

## MinioClient 的常用 API

### Bucket 操作

- `bucketExists()`：用于检查指定的存储桶是否存在，返回布尔值，表示存储桶是否存在

  ```java
    void test01() throws Exception {
        boolean isBucketExists = minioClient.bucketExists(BucketExistsArgs.builder().bucket("myfile").build());
        System.out.println("myfile目录是否存在：" + isBucketExists);
    }
  ```

- `makeBucket()`：用于创建一个新的存储桶（bucket），需要指定存储桶的名称

  ```java
    void test02() throws Exception {
        String bucketName = "myfile2";
        boolean isBucketExists = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
        if (!isBucketExists) {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        } else {
            System.out.println("bucket已经存在，不需要创建");
        }

        String policyJsonString = "{\"Version\" : \"2012-10-17\",\"Statement\":[{\"Sid\":\"PublicRead\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"*\"},\"Action\":[\"s3:GetObject\"],\"Resource\":[\"arn:aws:s3:::" + bucketName + "/*\"]}]}";
        //创建存储桶的时候，设置该存储桶里面的文件的访问策略，运行公开的读；
        minioClient.setBucketPolicy(SetBucketPolicyArgs.builder()
                .bucket(bucketName)
                .config(policyJsonString)//json串，里面是访问策略
                .build());
    }
  ```

- `listBuckets()`：用于列出用户有权访问的所有存储桶，返回存储桶的列表

  ```java
    void test03() throws Exception {
        List<Bucket> bucketList = minioClient.listBuckets();
        bucketList.forEach(bucket -> {
            System.out.println(bucket.name() + " -- " + bucket.creationDate());
        });
    }
  ```

- `removeBucket()`：用于删除一个已存在的存储桶（bucket），删除失败会抛出异常

  ```java
    void test04() throws Exception {
        minioClient.removeBucket(RemoveBucketArgs.builder().bucket("myfile2").build());
    }
  ```

### Object 操作

- `putObject()`：用于上传文件到指定的存储桶

  ```java
    void test05() throws Exception {
        File file = new File("D:\\MinIO\\MinioClient.jpg");  // 文件路径
        ObjectWriteResponse objectWriteResponse = minioClient.putObject(PutObjectArgs.builder()
                .bucket("myfile")
                .object("test.jpg")
                .stream(new FileInputStream(file), file.length(), -1)  // 使用stream流读取文件，自动获取文件大小
                .build()
        );
        System.out.println(objectWriteResponse);

        ObjectWriteResponse objectWriteResponse2 = minioClient.uploadObject(UploadObjectArgs.builder()
                .bucket("myfile")
                .object("test2.jpg")
                .filename("D:\\MinIO\\MinioClient.jpg")  // 指定文件路径
                .build()
        );
        System.out.println(objectWriteResponse);

    }
  ```

- `statObject()`：用于检查指定的对象（文件）的状态

  ```java
    void test06() throws Exception {
        StatObjectResponse statObjectResponse = minioClient.statObject(StatObjectArgs.builder()
                .bucket("myfile")
                .object("test.jpg")
                .build()
        );
        System.out.println(statObjectResponse);
    }
  ```

- `getPresignedObjectUrl()`：用于生成一个对象（文件）的签名URL，以便可以通过HTTP访问

  ```java
    void test07() throws Exception {
        String presignedObjectUrl = minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                .bucket("myfile")
                .object("test.jpg")
                .expiry(3, TimeUnit.MINUTES)
                .method(Method.GET)
                .build()
        );
        System.out.println(presignedObjectUrl);
    }
  ```

- `getObject()`：用于从指定的存储桶中下载文件

  ```java
    void test08() throws Exception {
        GetObjectResponse getObjectResponse = minioClient.getObject(GetObjectArgs.builder()
                .bucket("myfile")
                .object("test.jpg")
                .build()
        );
        System.out.println(getObjectResponse.transferTo(new FileOutputStream("D:\\MinIO\\123.jpg")));
    }
  ```

- `listObjects()`：用于列出指定存储桶中的所有对象（文件）

  ```java
    void test09() throws Exception {
        Iterable<Result<Item>> listObjects = minioClient.listObjects(ListObjectsArgs.builder()
                .bucket("myfile")
                .build()
        );

        listObjects.forEach( itemResult -> {
            try {
                Item item = itemResult.get();
                System.out.println(item.objectName());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }
  ```

- `removeObject()`：用于删除指定存储桶中的对象，需要指定存储桶名称和对象键

  ```java
    void test10() throws Exception {
        minioClient.removeObject(RemoveObjectArgs.builder()
                .bucket("myfile")
                .object("test.jpg")
                .build()
        );
    }
  ```

