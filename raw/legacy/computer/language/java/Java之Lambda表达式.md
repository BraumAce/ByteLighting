---
category: 
- Java
tag: 
- 基础
---

# Java 之 Lambda 表达式

<!-- more -->

## Lambda 是什么？

Lambda 是一种匿名内部类的实现方式。一般我们在开发中，写接口定义方法，由子类去实现并给出方法体，**而匿名内部类不需要定义子类，直接在方法中定义方法体**。

## Lambda 写法

而这种接口一般使用率不高，非业务型接口，所以 Lambda 在匿名内部类的基础上又省略了方法签名（修饰 + 返回值 + 方法名 + 入参），本质上还是实现了接口声明了方法体，就是说描述了方法如何执行，类似于 `(x, y) --> {…}` 这样的形式，入参直接使用 (括号)，方法体直接使用 {大括号}，用 “-->” 符号连接，读作 goes to。

由于接口的抽象方法已经定义了方法的参数类型和个数，所以在 Lambda 中直接使用形参代替，不用再加类型了，**同时如果只有一个参数的话，括号也可以省略**。

同理，方法体中即大括号内的语句只有一句的话也可以省略大括号，但是如果只有一条语句且直接 return 的，则省略大括号的同时也要省略 return 。

**由于使用 Lambda 一般都不是实现业务接口，而是只有一种功能的接口，所以这里就又产生了一种新的接口叫函数式接口**，这种接口里只有一个方法，比如 Function、Consumer、Supplier、 Predicate 等， java.util.function 包中的接口都是函数式接口。

函数式接口的入参和返回值都用泛型代替，用来统计和处理数据。比如是否满足某个条件、处理含有某个字符的数据等，**函数式接口只是定义了一个方法名，至于方法体和返回类型以及入参类型都可以自己决定，这就很满足我们对于集合数据的处理。**

## Lambda 使用示例

### 1. Lambda 表达式使用

Lambda表达式：

```java
NoParamHasReturn book = () -> {
    return new Book();
}
```

Lambda 表达式简化：

```java
NoParamHasReturn book = () -> new Book();
```

直接使用方法引用：

```java
NoParamHasReturn book = Book::new;
book.getBoook();
//HasParamHasReturn book2 = (x,y)->{return new Book(x,y);};
HasParamHasReturn book2 = Book::new;
book2.getBook("java", 34.5);
```

### 2. List 数据使用 Lambda 表达式比较大小

```java
// 初始化 List 数据
List<Book> books = new ArrayList<>();
books.add(new Book("Java", new BigDecimal("123.3")));
books.add(new Book("Jva", new BigDecimal("123.5")));
books.add(new Book("Ja", new BigDecimal("123.1")));

// 1. 匿名内部类
Comparator<Book> bookComparator = new Comparator<Book>() {
    @Override
    public int compare(Book o1, Book o2) {
        return o1.price.compareTo(o2.price);
    }
}

// 2. lambda
Comparator<Book> bookComparator = (a, b) -> {
    return a.price.compareTo(b.price);
};


// 3. lambda 简洁
Comparator<Book> bookComparator = (a, b) -> a.price.compareTo(b.price);
books.sort(Comparator.comparing(a -> a.price));
```

### 3. Set 数据自定义排序

```java
Set<Book> set = new TreeSet<>((a, b) -> {
    if (a.price.compareTo(b.price) >= 0) {
        return 1;
    }
    return -1;
});

set.add(new Book("Java", new BigDecimal("123.3")));
set.add(new Book("Jva", new BigDecimal("123.5")));
set.add(new Book("Jva", new BigDecimal("123.5")));
set.add(new Book("Ja", new BigDecimal("123.1")));
```

### 4. List 数据排序筛选

```java
List<Integer> list = new ArrayList<>();
Collections.addAll(list, 1, 2, 46, 88, 45, 12);
list.forEach(System.out::println);

list.forEach(x -> {
    if (x > 10) {
        System.out.println(x);
    }
});

List<Object> collect = list.stream()
    .filter(x -> x > 10)
    .collect(Collectors.toList());
System.out.println(collect);
```

### 5. 使用 Lambda 表示式调用线程

```java
// Runnable 接口是函数式接口
new Thread(() -> {
    for (int i = 0; i < 10 ; i++) {
        System.out.println(i + ", ");
    }
}).start();
```
