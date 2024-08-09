---
date: 2024-07-10 
category: 
- Java
tag: 
- API
---

# 常用API

整理 java 刷题过程中常用 API

<!-- more -->

## 数组

```java
toString(arr);    // 返回一个字符串

copyOf(arr, begin, end); 
copyOfRange(arr, begin, end);
// 返回与arr类型相同的一个数组，其长度为end或end-begin，并填入arr的值
// 如果end大于arr.length，结果会填充0或false值

sort(arr, begin, end);    // 使用稳定的快排队数组进行排序 --- O(n logn)
sort(arr, begin, end, Collections.reverseOrder());    // 数组降序排序排序

equals(arr1, arr2);    // 如果两个数组长度相同，并且相同索引对应的元素都相同，则返回 true
```

## 字符串

字符串分为两类：不可变字符串（String）和可变字符串（StringBuilder）。

String 类用来表示那些创建后就不会再改变的字符串，而 StringBuilder 类用来表示内容可变的字符串，并提供了修改字符串的方法。

表面上拼接字符串时，String 类使用 str1 + str2 这种形式拼接字符串，实际上是 JVM 帮助创建 StringBuilder 对象来拼接，StringBuilder 类却要调用一个 `append()` 方法来拼接，但其实 StringBuilder 类的效率更高。

### String

初始化有两种：

```java
String str = new String("XXX");    // 参数可以是字符串常量，也可为字符数组
String str = "XXX";    // 参数可为字符串常量，可为String.valueOf()系列的返回值
```
前者是 java 中标准的对象创建方式，其创建的对象将直接放置到堆中，每调用一次就会创建一个新的对象；  
后者则会在栈中创建一个对象引用变量 `str` ，然后查看字符串池中是否存在 "XXX"，如果没有，则将 "XXX" 存放字符串池，并令引用变量 `str` 指向它；如果已经有 "XXX"，则直接令 `str` 指向它。

常用方法：

```java
equals();    // 字符串比较必须能用equals()，相同返回true，否则返回false
equalsIgnoreCase();    // 忽略大小写进行比较

charAt(int index);    // 返回index位置的字符char --- O(1)

length();    // 返回字符串长度 --- O(1)

substring(int begin, int end);    // 返回字符片段[begin, end) --- O(n)
substring(int begin);    // 返回从begin开始后面所有的字符片段 ---- O(n)

contains(String str);    // 是否包含子串str --- O(1)

indexOf(String str);    // 返回str第一个出现的位置，没找到则返回-1 --- O(m * n) m为原串长度， n为str长度
indexOf(String str, int index);    // 同上，但从index开始找 --- O(m * n)

lastIndexOf(String str);    // 返回str最后出现的位置，没找到则返回-1 --- O(m * n) m为原串长度， n为str长度
lastIndexOf(String str, int index);    // 同上，但从index开始从后往前找 [0 <- Index] --- O(m * n)
 
replace(char oldChar, char newChar);    // 返回一个新字符串String，其全部oldChar都替换成newChar --- O(n)

toLowerCase();    // 返回一个新的字符串全部转成小写 --- O(n)
toUpperCase();    // 返回一个新的字符串全部转成大写 --- O(n)

trim();    // 去除首尾空白字符，包括 \t \r \n --- O(n)
strip();    // 去除首尾空白字符，还包括中文的空格字符 \u3000 也会被移除

isEmpty();    // 判断字符串是否为空
isBlank();    // 判断是否为空白字符串
 
split(String regex);    // 传入正则表达式分隔字符串 ---- O(n)
// String s = "A,B,C,D";
// String[] ss = s.split("\\,"); // {"A", "B", "C", "D"}

join();    // 拼接字符串，用指定的字符串连接字符串数组
// String[] arr = {"A", "B", "C"};
// String s = String.join("***", arr); // "A***B***C"

formatted();    // 格式化字符串，通过传入其他参数，替换占位符，生成新的字符串
format();    // 同上
// String s = "Hi %s, your score is %d!";
// System.out.println(s.formatted("Alice", 80));
// System.out.println(String.format("Hi %s, your score is %.2f!", "Bob", 59.5));
```

类型转换：

```java
valueOf();    // 将任意基本类型或引用类型转换为字符串

parseInt();    // 将字符串转换为int类型

parseBoolean();    // 将字符串转换为boolean类型

getInteger();    // 将该字符串对应的系统变量转换为Integer

toCharArray();    // 将字符串转换为char[]数组
// char[] cs = "Hello".toCharArray(); // String -> char[]
// String s = new String(cs); // char[] -> String

// 将char[]转byte[]
byte[] b1 = "Hello".getBytes();    // 按系统默认编码转换，不推荐
byte[] b2 = "Hello".getBytes("UTF-8");    // 按UTF-8编码转换
byte[] b2 = "Hello".getBytes("GBK");    // 按GBK编码转换
byte[] b3 = "Hello".getBytes(StandardCharsets.UTF_8);    // 按UTF-8编码转换

// 将已知编码的byte[]转换为String
byte[] b = ...
String s1 = new String(b, "GBK");    // 按GBK转换
String s2 = new String(b, StandardCharsets.UTF_8);    // 按UTF-8转换
```

### StringBuilder

```java
StringBuilder sb = new StringBuilder();    // 创建对象

charAt(int index);    // 返回index位置的char --- O(1)
 
length();    // 返回缓冲字符串长度 --- O(1)
 
append(String str);    // 拼接字符串 --- O(n)
 
toString();    // 返回一个与构建起或缓冲器内容相同的字符串 --- O(n)
```

## 集合

### List 列表

两个实现类：ArrayList、LinkedList

- **ArrayList** 底层是通过数组（动态扩容的数组）实现的，查询快
- **LinkedList** 底层是通过双向链表实现的，插入和删除快

```java
// E 表示泛型
List<E> array = new ArrayList<>();  // 顺序数组列表
List<E> array = new LinkedList<>(); // 顺序链表

ArrayList<E>(int initialCapacity);  // 指定容量的空数组列表

// Set<Integer> a = new HashSet<Integer>();
List<Integer> b = new ArrayList<>(a);    //接受一个集合容器

set(int index, E e);     // 将元素e放在index位置，返回之前的内容

get(int index);    // 返回元素位置在index的元素e --- 数组 O(1), 链表 O(n)

add(E e);    // 在尾部添加一个元素e --- O(1)
add(int index, E e);    // 后移元素，在index位置插一个元素e --- O(n)

remove(int index);    // 删除位于index的元素，并返回删除元素e --- 删除最后元素为O(1)， 其余为O(n)
//删除最后元素 list.remove(list.size() - 1);

size();    // 返回动态数组所存元素个数/链表长度 --- O(1)

subList(int satrt, int end)    // 相当于返回原数组的一个片段，但不要对其进行改动，改动会影响原数组 --- O(1)
// List<Integer> list, 对原来的list和返回的list做的 "非结构性修改"
// 都会影响到彼此对方. 如果你在调用了sublist返回了子list之后，如果修改了原list的大小，那么之前产生的子list将会失效，变得不可使用

trimToSize();    // 将数组列表的存储容量削减到其当前大小
```

### Set 集合

Set 是一种没有重复元素的集合，三个实现类：HashSet，LinkedHashSet，TreeSet。

- **HashSet** 元素乱序
- **LinkedHashSet** 保证元素添加顺序
- **TreeSet** 元素按自然顺序排序

```java
Set<E> set = new HashSet<>();       // 实例化
//List<E> list = new ArrayList<>();
Set<E> set = new HashSet<>(list);   // 传参

add(E e);    // 在集合中添加元素e，若成功添加则返回true，若集合中有元素e则返回false --- O(1)

remove(E e);    // 在集合中删除元素e，若删除成功返回true；若集合中没有元素e，返回false --- O(1)

contains(E e);    // 若存在元素e，则返回true，否则返回false --- O(1)

isEmpty();    // 若集合为空返回true，否则返回false --- O(1)

first()、last();    // 返回有序集合中第一个元素，最后一个元素，在TreeSet类中
```

### Map 映射

两个实现类：HashMap，TreeMap

- **HashMap** 键值对乱序
- **TreeMap** 键值对以 “键” 排序

TreeSet 中的元素和 TreeMap 中键如果是基本数据类型（的包装类型）或者是字符串，那么就按照数值大小以及字典序排序即可，但是如果是自定义的实体类对象，就需要自己自定义排序方式。自定义排序时，需要用到 Comparable 接口或者是 Comparator 接口。

自然排序 -- 使用 Comparable 接口

定制排序 -- 使用 Comparator 接口

```java
Map<Characters, Integer> map = new HashMap<>();    // 实例化

put(K key, V value);    // 在Map中加入键值对<key, value>，返回value值。如果Map中有key，则replace旧的value --- O(1)

get(K key);    // 返回Map中key对应的value。若Map中没有该key，则返回null --- O(1)

getOrDefault(K key, V defaultValue);    // 返回Map中key对应的value。若Map中没有该key，则返回defaultValue --- O(1)
 
// For example:
// Map<Character, Integer> map = new HashMap<>();
// if (...)    // 如果发现k，则k在Map中的值加1。没一开始没有k，则从0开始加1。（相当于给了key在Map中的一个初试值）
map.put('k', map.getOrDefault('k', 0) + 1);

containsKey(Key key);    // 在Map中若存在key，则返回true，否则返回false --- O(1)

containsValue(Value value);    // 在Map中若存在value，则返回true，否则返回false --- O(1)

Set<Map.Entry<K, V>> entrySet();    // 返回Map.Entry对象的一个集视图，可以删除元素，但不能添加任何元素

Set<K> keySet();    // 返回一个Set,这个Set中包含Map中所有的Key --- O(1)

// For example:
// We want to get all keys in Map
// Map<Character, Integer> map = new HashMap<>();
for (Character key : map.keySet()) {
    // Operate with each key
}

Collection<V> values();    // 返回一个Collection<V>，里面全是对应的每一个value --- O(1)

// For example:
// We want to get all values in Map
// Map<Character, Integer> map = new HashMap<>();
for (Integer value : map.values()) {
    // Operate with each values
}

getKey();    // 返回这个映射的键

getValue();    // 返回这个映射的值

setValue(V newValue);    // 将关联映射中的值改为新值，并返回原来的值

isEmpty()    // 若Map为空返回true， 否则返回false --- O(1)

size()    // 返回Map中中键值对<K, V>的个数 --- O(1)
```

### 栈

java 中 Stack 继承了 Vector 类，仅仅实现栈的操作。  
另外，Deque 不仅有队列（双端队列，普通队列）的特性，也可以作为栈，用法同 Stack ，方法也相同。

建议使用 Deque 用作堆栈而不是 Stack 类，因为 Stack 的方法是同步的，同步的过程会消耗时间。

Deque 的实现类有 `ArrayDeque` 和 `LinkedList`，但最好使用 `ArrayDeque` 类在 Java 中实现堆栈数据结构。

```java
Stack<E> stack = new Stack<>();    // Stack类
Deque<E> stack = new ArrayDeque<>();    // Deque接口，ArrayDeque是Deque的一个实现类
 
push(E e);    // 入栈元素e， 返回值为元素e --- O(1)
 
pop();    // 出栈一个元素，返回出栈元素e --- O(1)
 
peek();    // 查看栈顶元素， 返回值为栈顶元素e --- O(1)

search();    // 从堆栈的顶部返回元素的位置 --- O(1)
 
isEmpty()    // 若栈空返回true，否则返回false --- O(1)
 
size()    // 返回栈中元素个数 --- O(1)
```

### Queue 队列

Queue 为接口，实现类是 `LinkedList`（既实现 List 接口，又实现 Queue 接口） ，特性是先进先出。

```java
Queue<E> q = new LinkedList<>(); //实例化

// 添加元素e到队尾 --- O(1)
offer(E e);    // 成功返回true，否则返回false
add(E e);      // 失败抛出异常

// 取队首元素并删除 --- O(1)
poll();      // 成功返回队首元素，否则返回null
remove();    // 失败抛出异常

// 不建议把null添加到队列中，否则poll()方法返回null时，很难确定是取到了null元素还是队列为空。

// 取队首元素但不删除 --- O(1)
peek();      // 成功返回队首元素，否则返回null
element();   // 失败抛出异常

isEmpty()    // 若队空返回true，否则返回false --- O(1)

size()    // 返回队中元素个数 --- O(1)
```

### Deque 双端队列

Deque 接口实际上扩展自 Queue，Queue 中的方法在 Deque 中也可以使用，但不建议这么做。

```java
Deque<E> q = new LinkedList<>(); //实例化

offerFirst(E e);   // 将元素添加到队首 --- O(1)

offerLast(E e);    // 将元素添加到队尾 --- O(1)

pollFirst();    // 获取队首元素并删除 --- O(1)

pollLast();     // 获取队尾元素并删除 --- O(1)

peekFirst();    // 获取队首元素但不删除 --- O(1)

peekLast();     // 获取队尾元素但不删除 --- O(1)

isEmpty();    // 非空返回true，否则返回false
 
size();    // 队列中元素个数
```

### PriorityQueue 优先队列

优先队列在添加元素的时候对元素的大小排序后再保存。PriorityQueue 对元素采用的是堆排序，头是按指定排序方式的最小元素。（堆排序只能保证根是最大/最小，整个堆并不是有序的）

因此，放入 PriorityQueue 的元素，需要先定义好排序规则，才能够确保队列元素整体有序。

PriorityQueue 默认按元素的排序规则排序（必须实现 Comparable 接口），也可以通过 Comparator 自定义排序算法（元素就不必实现 Comparable 接口）。

```java
// 默认实现小根堆。
PriorityQueue<E> minHeap = new PriorityQueue<>(); 
// 大根堆
PriorityQueue<E> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
 
// 自定义实现最小/最大（e1-e2，升序 / e2-e1，降序）
// 开始指定大小capacity = 100，当元素超过容量后会扩容
PriorityQueue<E> priorityQueue = new PriorityQueue<E>(100, new Comparator<E>(){
    @Override
    public int compare(E e1, E e2) {
        return e2.val - e1.val;    // 返回值大于0，表示两个元素需要更换位置，否则不需要更换
    }
});

offer(E e);    // 在堆中加入元素，并调整堆。若成功入堆返回值true，否则返回false --- O(logN)

poll();    // 获取堆顶元素并删除，重新调整堆 --- O(logN)

peek();    // 获取堆顶元素但不删除 --- O(1)

isEmpty();    // 判断队列是否为空

size();    // 队列中元素数量
```

## 工具类

### java.util.Math

主要包含数学内的应用方法

```java
Math.abs(a);    // 返回a的绝对值

Math.max(a, b);    // 返回a和b的最大值
Math.min(a, b);    // 返回a和b的最小值

Math.sqrt(a);    // 开平方
Math.cbrt(b);    // 开立方

Math.pow(a, b);    // 返回a的b次方

Math.ceil(a);    // 对浮点数向上取整
Math.floor(a);    // 对浮点数向下取整
Math.round(a);    // 对浮点数四舍五入

Math.log(a);    // 以e为底取对数
Math.log10(a);    // 以10为底取对数
Math.log(n) / Math.log(m);    // 以m为底取n的对数

Math.random();    // 返回一个随机数，范围为[0,1)，返回类型为double
```

### java.util.Collections

主要对集合进行操作

```java
binarySearch(arr, start, end, v);
// 使用二分查找算法在有序数组arr中查找值 v --- O(logn)
// 如果找到 v，则返回相应的索引；否则返回一个负数值 r。-r-1 是 v 应插入的位置（为保持 a 有序）

max(Collection<E> elements);    // 返回集合中最大的元素
min(Collection<E> elements);    // 返回集合中最小的元素

fill(Collection<E> c, V value);    // 将集合的所有元素设置为 v

addAll(Collection<E> c, V...values);    // 将所有的值添加到给定的集合中

replaceAll(Collection<E> c, V oldvalue, V newvalue);    // 用newValue替换所有等于oldValue的元素

indexOfSubList(List<E> list1, List<E> list2);    // 返回list1中第一个等于list2的子列表的索引
lastIndexOfSubList(List<E> list1, List<E> list2);    // 返回list1中最后一个等于list2的子列表的索引
```

### javafx.util.Pair<K, V>

Java 8 的 package.json 中新增了一个 `Pair<K,V>` 类，表示键值对，类似于 C++ 中的 `pair` 二元组，实现对 first 和 second 的操作。

```java
getKey();    // 返回该pair的key值

getValue();    // 返回该pair的value值

hashCode();    // 生成该pair的哈希值

equals(E e);    // 判断该pair是否和对象元素e相等

toString();    // 返回该pair的字符串表示
```

## 基本类型的最大值和最小值

数字类型包装类都支持两个常量：**MAX_VALUE**，**MIN_VALUE**，分别保存了对应基本类型的最大值与最小值。

```java
fmax = Float.MAX_VALUE;
 
fmin = Float.MIN_VALUE;
 
dmax = Double.MAX_VALUE;
 
dmin = Double.MIN_VALUE;
 
bmax = Byte.MAX_VALUE;
 
bmin = Byte.MIN_VALUE;
 
cmax = Character.MAX_VALUE;
 
cmin = Character.MIN_VALUE;
 
shmax = Short.MAX_VALUE;
 
shmin = Short.MIN_VALUE;
 
imax = Integer.MAX_VALUE;
 
imin = Integer.MIN_VALUE;
 
lmax = Long.MAX_VALUE;
 
lmin = Long.MIN_VALUE;
```

