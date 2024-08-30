---
date: 2024-08-26
category: 
- hot100
- 数据结构
tag: 
- 链表
---

# LRU 缓存

<!-- more -->

[146.LRU缓存](https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-100-liked)

## 题意

请你设计并实现一个满足 [LRU (最近最少使用) 缓存](https://baike.baidu.com/item/LRU) 约束的数据结构。

实现 `LRUCache` 类：  
- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。

函数 `get` 和 `put` 必须以 $O(1)$ 的平均时间复杂度运行。

## 思路一：手搓 LRU

要让 `put` 和 `get` 方法的时间复杂度为 $O(1)$，我们可以总结出 `cache` 这个数据结构必要的条件：

1. 显然 `cache `中的元素必须有时序，以区分最近使用的和久未使用的数据，当容量满了之后要删除最久未使用的那个元素腾位置。

2. 我们要在 `cache` 中快速找某个 `key` 是否已存在并得到对应的 `val`；

3. 每次访问 `cache` 中的某个 `key`，需要将这个元素变为最近使用的，也就是说 `cache` 要支持在任意位置快速插入和删除元素。

哈希表查找快，但是数据无固定顺序；链表有顺序之分，插入删除快，但是查找慢，所以结合二者的长处，可以形成一种新的数据结构：哈希链表 `LinkedHashMap`：

![](https://cloud.braumace.cn/f/VvyhN/LinkedHashMap.png)

至于 `put` 和 `get` 的具体逻辑，可以画出这样一个流程图：

![](https://cloud.braumace.cn/f/mjDT1/LRU_put.png)

根据上述逻辑写代码即可。

**代码：**

```java
class LRUCache {
    int cap;
    LinkedHashMap<Integer, Integer> cache = new LinkedHashMap<>();
    public LRUCache(int capacity) { 
        this.cap = capacity;
    }
    
    public int get(int key) {
        if (!cache.containsKey(key)){
            return -1;
        }
        makeRecently(key);
        return cache.get(key);
    }
    
    public void put(int key, int value) {
        if (cache.containsKey(key)){
            cache.put(key, value);
            makeRecently(key);
            return;
        }

        if (cache.size() >= this.cap){
            int oldestKey = cache.keySet().iterator().next();
            cache.remove(oldestKey);
        }

        cache.put(key, value);
    }

    private void makeRecently(int key) {
        int val = cache.get(key);
        cache.remove(key);
        cache.put(key, val);
    }
}
```

## 思路二：继承 `LinkedHashMap`

> 参考题解：[源于 LinkedHashMap 源码](https://leetcode.cn/problems/lru-cache/solutions/81045/yuan-yu-linkedhashmapyuan-ma-by-jeromememory/?envType=study-plan-v2&envId=top-100-liked)

主体：继承 `LinkedHashMap`，然后重写其中的 `removeEldestEntry()` 函数，就能拥有我们自己的缓存策略。

1. 重写的条件是 `map` 的大小不超过给定的容量，超过了就得使用 LRU。

2. `put` 操作直接继承父类的 `put`函数即可，因为题目没有特殊要求，故可以不写。

3. `get` 操作可以调用 `LinkedHashMap` 中的 `getOrDefault()`，符合题目要求，即当 `key` 不存在时会返回默认值 `-1`。

综上分析，只要写一个构造函数即可。

**代码：**

```java
class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75F, true);
        this.capacity = capacity;
    }
    
    public int get(int key) {
        return super.getOrDefault(key, -1);
    }
    
    // 可写可不写
    public void put(int key, int value) {
        super.put(key, value);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}
```
