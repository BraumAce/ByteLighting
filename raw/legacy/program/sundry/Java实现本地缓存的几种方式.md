---
category: 
- 杂项
tag: 
- 工作笔记
comment: true
---

# Java 实现本地缓存的几种方式

<!-- more -->

## 1. 概念

引入缓存，主要用于实现系统的高性能，高并发。将数据库查询出来的数据放入缓存服务中，因为缓存是存储在内存中的，内存的读写性能远超磁盘的读写性能，所以访问的速度非常快。但是电脑重启后，内存中的数据会全部清除，而磁盘中的数据虽然读写性能很差，但是数据不会丢失。

## 2. 手写本地缓存

首先创建一个缓存实体类：

```java
/**
 * 自定义缓存实体类
 */
@Data
public class MyCache {
 
    // 键
    private String key;
 
    // 值
    private Object value;
 
    // 过期时间
    private Long expireTime;

}
```

接着我们编写一个缓存操作的工具类：

```java
/**
 * 自定义本地缓存工具类
 */
public class CacheUtil {
 
    // 缓存数据Map
    private static final Map<String, MyCache> CACHE_MAP = new ConcurrentHashMap<>();
 
    // 定时器线程池，用于清除过期缓存
    private static final ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();
 
    static {
        // 注册一个定时线程任务，服务启动1秒之后，每隔500毫秒执行一次
        // 定时清理过期缓存
        executorService.scheduleAtFixedRate(CacheUtil::clearCache, 1000, 500, TimeUnit.MILLISECONDS);
    }
 
    /**
     * 添加缓存
     *
     * @param key    缓存键
     * @param value  缓存值
     * @param expire 过期时间，单位秒
     */
    public static void put(String key, Object value, long expire) {
        MyCache myCache = new MyCache();
        myCache.setKey(key);
        myCache.setValue(value);
        if (expire > 0) {
            long expireTime = System.currentTimeMillis() + Duration.ofSeconds(expire).toMillis();
            myCache.setExpireTime(expireTime);
        }
        CACHE_MAP.put(key, myCache);
    }

    /**
     * 获取缓存
     *
     * @param key 缓存键
     * @return 缓存数据
     */
    public static Object get(String key) {
        if (CACHE_MAP.containsKey(key)) {
            return CACHE_MAP.get(key).getValue();
        }
        return null;
    }

    /**
     * 移除缓存
     *
     * @param key 缓存键
     */
    public static void remove(String key) {
        CACHE_MAP.remove(key);
    }
 
    /**
     * 清理过期的缓存数据
     */
    private static void clearCache() {
        if (CACHE_MAP.size() <= 0) {
            return;
        }
        // 判断是否过期 过期就从缓存Map删除这个元素
        CACHE_MAP.entrySet().removeIf(entry -> entry.getValue().getExpireTime() != null && entry.getValue().getExpireTime() > System.currentTimeMillis());
    }
}
```

最后，我们来测试一下缓存服务

```java
@SpringBootTest
class VueSpringBootApplicationTests {

    @Test
    void contextLoads() throws InterruptedException {
        // 写入缓存数据 2秒后过期
        CacheUtil.put("name", "qx", 2);
 
        Object value1 = CacheUtil.get("name");
        System.out.println("第一次查询结果：" + value1);
 
        // 停顿3秒
        TimeUnit.SECONDS.sleep(3);
 
        Object value2 = CacheUtil.get("name");
        System.out.println("第二次查询结果：" + value2);
    }

}
```

启动测试，我们从控制台的返回看到输出结果和我们的预期一致!

```java
第一次查询结果：qx
第二次查询结果：null
```

实现思路其实很简单，采用 `ConcurrentHashMap` 作为缓存数据存储服务，然后开启一个定时调度，每隔 $500$ 毫秒检查一下过期的缓存数据，然后清除掉即可。

## 3. 基于 Guava Cache 实现本地缓存

相比自己编写的缓存服务，Guava Cache 要强大的多，支持很多特性如下：

- 支持最大容量限制
- 支持两种过期删除策略（插入时间和读取时间）
- 支持简单的统计功能
- 基于 LRU 算法实现

### 3.1 添加 gugva 的依赖

```java
<!--guava-->
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>31.1-jre</version>
</dependency>
```

### 3.2 测试

```java
@Test
void testGuava() throws ExecutionException, InterruptedException {
    // 创建一个缓存实例
    Cache<String, String> cache = CacheBuilder.newBuilder()
        .initialCapacity(5)    // 初始容量
        .maximumSize(10)       // 最大缓存数，超出淘汰
        .expireAfterWrite(3, TimeUnit.SECONDS)  // 过期时间 设置写入3秒后过期
        .build();

    // 写入缓存数据
    cache.put("name", "qq");

    // 读取缓存数据
    String value1 = cache.get("name", () -> "key过期");
    System.out.println("第一次查询结果：" + value1);

    // 停顿4秒
    TimeUnit.SECONDS.sleep(4);

    // 读取缓存数据
    String value2 = cache.get("name", () -> "key过期");
    System.out.println("第二次查询结果：" + value2);
}
```

启动测试，我们从控制台的返回看到输出结果和我们的预期一致!

```java
第一次查询结果：qq
第二次查询结果：key过期
```

## 4. 基于 Caffeine 实现本地缓存

Caffeine 是基于 java8 实现的新一代缓存工具，缓存性能接近理论最优，可以看作是 Guava Cache 的增强版，功能上两者类似，不同的是 Caffeine 采用了一种结合 LRU、LFU 优点的算法：W-TinyLFU，在性能上有明显的优越性。

### 4.1 引入Caffeine

```java
<!--caffeine-->
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
    <version>2.9.3</version>
</dependency>
```

### 4.2 测试

```java
@Test
void testCaffeine() throws InterruptedException {
    // 创建一个缓存实例
    Cache<String, String> cache = Caffeine.newBuilder()
        .initialCapacity(5)    // 初始容量
        .maximumSize(10)      // 最大缓存数，超出淘汰
        .expireAfterWrite(3, TimeUnit.SECONDS)  // 设置缓存写入间隔多久过期
        .build();

    // 写入缓存数据
    cache.put("userName", "张三");

    // 读取缓存数据
    String value1 = cache.get("userName", (key) -> {
        // 如果key不存在，会执行回调方法
        return "key已过期";
    });
    System.out.println("第一次查询结果：" + value1);

    // 停顿4秒
    Thread.sleep(4000);

    // 读取缓存数据
    String value2 = cache.get("userName", (key) -> {
        // 如果key不存在，会执行回调方法
        return "key已过期";
    });
    System.out.println("第二次查询结果：" + value2);
}
```

输出结果：

```java
第一次查询结果：张三
第二次查询结果：key已过期
```

## 5. 基于 Encache 实现本地缓存

### 5.1 引入 ehcache 依赖

```java
<!--ehcache-->
<dependency>
    <groupId>org.ehcache</groupId>
    <artifactId>ehcache</artifactId>
    <version>3.9.7</version>
</dependency>
```

### 5.2 自定义过期策略实现

```java
/**
 * 自定义过期策略实现
 */
public class CustomExpiryPolicy<K, V> implements ExpiryPolicy<K, V> {

    private final Map<K, Duration> keyExpireMap = new ConcurrentHashMap();
 
    public Duration setExpire(K key, Duration duration) {
        return keyExpireMap.put(key, duration);
    }
 
    public Duration getExpireByKey(K key) {
        return Optional.ofNullable(keyExpireMap.get(key))
                .orElse(null);
    }
 
    public Duration removeExpire(K key) {
        return keyExpireMap.remove(key);
    }
 
    @Override
    public Duration getExpiryForCreation(K key, V value) {
        return Optional.ofNullable(getExpireByKey(key))
                .orElse(Duration.ofNanos(Long.MAX_VALUE));
    }
 
    @Override
    public Duration getExpiryForAccess(K key, Supplier<? extends V> value) {
        return getExpireByKey(key);
    }
 
    @Override
    public Duration getExpiryForUpdate(K key, Supplier<? extends V> oldValue, V newValue) {
        return getExpireByKey(key);
    }
}
```

### 5.3 测试

```java
/**
 * 测试Encache
 */
public class EncacheTest {
    public static void main(String[] args) throws InterruptedException {
        String userCache = "userCache";
 
        // 自定义过期策略
        CustomExpiryPolicy<Object, Object> customExpiryPolicy = new CustomExpiryPolicy<>();
 
        // 声明一个容量为20的堆内缓存配置
        CacheConfigurationBuilder configurationBuilder = CacheConfigurationBuilder
                .newCacheConfigurationBuilder(String.class, String.class, ResourcePoolsBuilder.heap(20))
                .withExpiry(customExpiryPolicy);
 
        // 初始化一个缓存管理器
        CacheManager cacheManager = CacheManagerBuilder.newCacheManagerBuilder()
                // 创建cache实例
                .withCache(userCache, configurationBuilder)
                .build(true);
 
        // 获取cache实例
        Cache<String, String> cache = cacheManager.getCache(userCache, String.class, String.class);
        // 获取过期策略
        CustomExpiryPolicy expiryPolicy = (CustomExpiryPolicy) cache.getRuntimeConfiguration().getExpiryPolicy();
 
        // 写入缓存数据
        cache.put("userName", "张三");
        // 设置3秒过期
        expiryPolicy.setExpire("userName", Duration.ofSeconds(3));
 
        // 读取缓存数据
        String value1 = cache.get("userName");
        System.out.println("第一次查询结果：" + value1);
 
        // 停顿4秒
        Thread.sleep(4000);
 
        // 读取缓存数据
        String value2 = cache.get("userName");
        System.out.println("第二次查询结果：" + value2);
    }
}
```

输出结果：

```java
第一次查询结果：张三
第二次查询结果：null
```
