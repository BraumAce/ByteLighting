---
category: 
- 常用框架
tag: 
- Spring
---

# Web 入门

<!-- more -->

## 1. HTTP协议

### 1.1 HTTP概述

HTTP：超文本传输协议，规定了浏览器和服务器之间数据传输的规则

特点：

1. 基于TCP协议：面向连接，安全

2. 基于请求-响应模型：一次请求对应一次响应

3. HTTP协议是无状态的协议：对于事务处理没有记忆能力，每次请求-响应都是独立的。

	缺点：多次请求间不能共享数据

	优点：速度快

浏览器和服务器是按照HTTP协议进行数据通信的。

HTTP协议又分为：请求协议和响应协议

- 请求协议：浏览器将数据以请求格式发送到服务器
	- 包括：**请求行**、**请求头** 、**请求体** 
- 响应协议：服务器将数据以响应格式返回给浏览器
	- 包括：**响应行** 、**响应头** 、**响应体** 

在HTTP1.1版本中，浏览器访问服务器的几种方式： 

| 请求方式 | 请求说明                                                     |
| :------: | :----------------------------------------------------------- |
| **GET**  | 获取资源。<br>向特定的资源发出请求。例：http://www.baidu.com/s?wd=itheima |
| **POST** | 传输实体主体。<br/>向指定资源提交数据进行处理请求（例：上传文件），数据被包含在请求体中。 |
| OPTIONS  | 返回服务器针对特定资源所支持的HTTP请求方式。<br/>因为并不是所有的服务器都支持规定的方法，为了安全有些服务器可能会禁止掉一些方法，例如：DELETE、PUT等。那么OPTIONS就是用来询问服务器支持的方法。 |
|   HEAD   | 获得报文首部。<br/>HEAD方法类似GET方法，但是不同的是HEAD方法不要求返回数据。通常用于确认URI的有效性及资源更新时间等。 |
|   PUT    | 传输文件。<br/>PUT方法用来传输文件。类似FTP协议，文件内容包含在请求报文的实体中，然后请求保存到URL指定的服务器位置。 |
|  DELETE  | 删除文件。<br/>请求服务器删除Request-URI所标识的资源         |
|  TRACE   | 追踪路径。<br/>回显服务器收到的请求，主要用于测试或诊断      |
| CONNECT  | 要求用隧道协议连接代理。<br/>HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器 |

在我们实际应用中常用的也就是 ：**GET、POST**



### 1.2 请求协议

1. __请求行__：请求数据的第一行，由 `请求方式、资源路径、协议` 组成（之间用空格分隔）
2. __请求头__：第二行开始，格式：`key:value` 
	- http是个无状态的协议，所以在请求头设置浏览器的一些自身信息和想要响应的形式。这样服务器在收到信息后，就可以知道是谁，想干什么了
3. __请求体__：POST请求，存放请求参数
	- GET请求的请求参数在请求行中，故不需要设置请求参数

常见的HTTP请求头有：

```
Host: 表示请求的主机名

User-Agent: 浏览器版本。 例如：Chrome浏览器的标识类似Mozilla/5.0 ...Chrome/79 ，IE浏览器的标识类似Mozilla/5.0 (Windows NT ...)like Gecko

Accept：表示浏览器能接收的资源类型，如text/*，image/*或者*/*表示所有；

Accept-Language：表示浏览器偏好的语言，服务器可以据此返回不同语言的网页；

Accept-Encoding：表示浏览器可以支持的压缩类型，例如gzip, deflate等。

Content-Type：请求主体的数据类型

Content-Length：数据主体的大小（单位：字节）
```



GET请求和POST请求的区别：

| 区别方式     | GET请求                                                      | POST请求             |
| ------------ | ------------------------------------------------------------ | -------------------- |
| 请求参数     | 请求参数在请求行中。<br/>例：/brand/findAll?name=OPPO&status=1 | 请求参数在请求体中   |
| 请求参数长度 | 请求参数长度有限制(浏览器不同限制也不同)                     | 请求参数长度没有限制 |
| 安全性       | 安全性低。原因：请求参数暴露在浏览器地址栏中。               | 安全性相对高         |



### 1.3 响应协议

1. __响应行__：响应数据的第一行，由 `协议及版本、响应状态码、状态码描述` 组成
2. __响应头__：第二行开始，格式为 `key:value`
3. __响应体__：响应数据的最后一部分，存储响应的数据
	- 响应体和响应头之间有一个空行隔开（作用：用于标记响应头结束）



### 1.4 状态响应码

1. 响应码大类

| 状态码分类 | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 1xx        | **响应中**——临时状态码，表示请求已经接受，告诉客户端应该继续请求或者如果它已经完成则忽略它 |
| 2xx        | **成功**——表示请求已经被成功接收，处理已完成                 |
| 3xx        | **重定向**——重定向到其它地方：它让客户端再发起一个请求以完成整个处理。 |
| 4xx        | **客户端错误**——处理发生错误，责任在客户端，如：客户端的请求一个不存在的资源，客户端未被授权，禁止访问等 |
| 5xx        | **服务器端错误**——处理发生错误，责任在服务端，如：服务端抛出异常，路由出错，HTTP版本不支持等 |



2. 常见的响应状态码

| 状态码  | 英文描述                               | 解释                                                         |
| ------- | -------------------------------------- | ------------------------------------------------------------ |
| ==200== | **`OK`**                               | 客户端请求成功，即**处理成功**，这是我们最想看到的状态码     |
| 302     | **`Found`**                            | 指示所请求的资源已移动到由`Location`响应头给定的 URL，浏览器会自动重新访问到这个页面 |
| 304     | **`Not Modified`**                     | 告诉客户端，你请求的资源至上次取得后，服务端并未更改，你直接用你本地缓存吧。隐式重定向 |
| 400     | **`Bad Request`**                      | 客户端请求有**语法错误**，不能被服务器所理解                 |
| 403     | **`Forbidden`**                        | 服务器收到请求，但是**拒绝提供服务**，比如：没有权限访问相关资源 |
| ==404== | **`Not Found`**                        | **请求资源不存在**，一般是URL输入有误，或者网站资源被删除了  |
| 405     | **`Method Not Allowed`**               | 请求方式有误，比如应该用GET请求方式的资源，用了POST          |
| 428     | **`Precondition Required`**            | **服务器要求有条件的请求**，告诉客户端要想访问该资源，必须携带特定的请求头 |
| 429     | **`Too Many Requests`**                | 指示用户在给定时间内发送了**太多请求**（“限速”），配合 Retry-After(多长时间后可以请求)响应头一起使用 |
| 431     | **` Request Header Fields Too Large`** | **请求头太大**，服务器不愿意处理请求，因为它的头部字段太大。请求可以在减少请求头域的大小后重新提交。 |
| ==500== | **`Internal Server Error`**            | **服务器发生不可预期的错误**。服务器出异常了，赶紧看日志去吧 |
| 503     | **`Service Unavailable`**              | **服务器尚未准备好处理请求**，服务器刚刚启动，还未初始化好   |

状态码大全：https://cloud.tencent.com/developer/chapter/13553 



### 1.5 协议解析



## 2. 请求

### 2.1 简单参数

#### 2.1.1 原始方式

原始方式中需要通过 `HttpServletRequest` 对象手动获取请求参数

在Controller中，我们要想获取 `Request` 对象，可以直接在方法的形参中声明  `HttpServletRequest` 对象。然后就可以通过该对象来获取请求信息：
```java
//根据指定的参数名获取请求参数的数据值
String name = request.getParameter("name")  //name就是请求参数名
```




#### 2.1.2 SpringBoot方式

在Springboot的环境中，对原始的API进行了封装，接收参数的形式更加简单。 
- 如果是简单参数，参数名与形参变量名相同，定义同名的形参即可接收参数。
	
```java
@RestController
public class RequestController {
	// http://localhost:8080/simpleParam?name=Tom&age=10
	// 第1个请求参数： name=Tom   参数名:name，参数值:Tom
	// 第2个请求参数： age=10     参数名:age , 参数值:10
	    
	//springboot方式
	@RequestMapping("/simpleParam")
	public String simpleParam(String name , Integer age ){//形参名和请求参数名保持一致
	    System.out.println(name+"  :  "+age);
	    return "OK";
	}
}
```

> **结论：不论是GET请求还是POST请求，对于简单参数来讲，只要保证==请求参数名和Controller方法中的形参名保持一致==，就可以获取到请求参数中的数据值。**

- 如果方法形参名称与请求参数名称不一致，需要使用Spring提供的@RequestParam注解完成映射
	

在方法形参前面加上 @RequestParam 然后通过value属性执行请求参数名，从而完成映射。代码如下：
```java
@RequestMapping("/simpleParam")
public String simpleParam(@RequestParam("name") String username , Integer age ){
	System.out.println(username+"  :  "+age);
	return "OK";
}
```

> 1. @RequestParam中的required属性默认为true（默认值也是true），代表该请求参数必须传递，如果不传递将报错
>
> 2. 如果该参数是可选的，可以将required属性设置为false
>
> 	```java
> 	public String simpleParam(@RequestParam(name = "name", required = false) String username, Integer age)
> 	```



### 2.2 实体参数

如果请求参数比较多，就考虑将请求参数封装到一个实体类对象中。

要求：**请求参数名与实体类的属性名相同**

#### 2.2.1 简单实体对象

定义POJO实体类：

```java
public class User {
    private String name;
    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}

```

Controller方法：

```java
@RestController
public class RequestController {
    //实体参数：简单实体对象
    @RequestMapping("/simplePojo")
    public String simplePojo(User user){
        System.out.println(user);
        return "OK";
    }
}
```

如果参数名和实体类属性名不一致时，服务端输出的值为 `null` 。

#### 2.2.2 复杂实体对象

复杂实体对象指的是，在实体类中有一个或多个属性，也是实体对象类型的。

复杂实体对象的封装，需要遵守如下规则：

- **请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套实体类属性参数。**

定义POJO实体类：

- Address实体类

```java
public class Address {
    private String province;
    private String city;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "province='" + province + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
```

- User实体类

```java
public class User {
    private String name;
    private Integer age;
    private Address address; //地址对象

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }
}
```

Controller方法：

```java
@RestController
public class RequestController {
    //实体参数：复杂实体对象
    @RequestMapping("/complexPojo")
    public String complexPojo(User user){
        System.out.println(user);
        return "OK";
    }
}
```



### 2.3 数组集合参数

数组集合参数的使用场景：在HTML的表单中，有一个表单项是支持多选的(复选框)，可以提交选择的多个值。

#### 2.3.1 数组

数组参数：**请求参数名与形参数组名称相同且请求参数为多个，定义数组类型形参即可接收参数**

Controller方法：

```java
@RestController
public class RequestController {
    //数组集合参数
    @RequestMapping("/arrayParam")
    public String arrayParam(String[] hobby){
        System.out.println(Arrays.toString(hobby));
        return "OK";
    }
}
```

在前端请求时，有两种传递形式：

方式一：`xxxxxxxxxx?hobby=game&hobby=java` 

方式二：`xxxxxxxxxxxxx?hobby=game,java` 

#### 2.3.2 集合

集合参数：**请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam 绑定参数关系**

> 默认情况下，请求中参数名相同的多个值，是封装到数组。如果要封装到集合，要使用@RequestParam绑定参数关系

Controller方法：

```java
@RestController
public class RequestController {
    //数组集合参数
    @RequestMapping("/listParam")
    public String listParam(@RequestParam List<String> hobby){
        System.out.println(hobby);
        return "OK";
    }
}
```

Postman测试：

方式一：`xxxxxxxxxx?hobby=game&hobby=java` 

方式二：`xxxxxxxxxxxxx?hobby=game,java` 



### 2.4 日期时间参数

日期的格式多种多样（如：2022-12-12 10:05:45 、2022/12/12 10:05:45），那么对于日期类型的参数在进行封装的时候，需要通过 `@DateTimeFormat` 注解，以及其 `pattern` 属性来设置日期的格式。

- `@DateTimeFormat` 注解的 `pattern` 属性中指定了哪种日期格式，前端的日期参数就必须按照指定的格式传递。
- 后端 controller 方法中，需要使用 `Date` 类型或 `LocalDateTime` 类型，来封装传递的参数。

Controller方法：

```java
@RestController
public class RequestController {
    //日期时间参数
   @RequestMapping("/dateParam")
    public String dateParam(@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime updateTime){
        System.out.println(updateTime);
        return "OK";
    }
}
```

Postman测试：

```java
http://localhost:8080/dateParam?updateTime=2024-03-16 18:00:00
```



### 2.5 JSON参数

在前后端进行交互时，如果是比较复杂的参数，前后端通过会使用JSON格式的数据进行传输。 

（JSON是开发中最常用的前后端数据交互方式）

Postman发送JSON格式数据：

![image-20240316192202653](C:\Users\16937\AppData\Roaming\Typora\typora-user-images\image-20240316192202653.png)

服务端Controller方法接收JSON格式数据：

- 传递json格式的参数，在Controller中会使用实体类进行封装。 
- 封装规则：**JSON数据键名与形参对象属性名相同，定义POJO类型形参即可接收参数。需要使用 @RequestBody标识。**

- @RequestBody注解：将JSON数据映射到形参的实体类对象中（JSON中的key和实体类中的属性名保持一致）

实体类：Address

```java
public class Address {
    private String province;
    private String city;
    
	//省略GET , SET 方法
}
```

实体类：User

```java
public class User {
    private String name;
    private Integer age;
    private Address address;
    
    //省略GET , SET 方法
}    
```

Controller方法：

```java
@RestController
public class RequestController {
    //JSON参数
    @RequestMapping("/jsonParam")
    public String jsonParam(@RequestBody User user){
        System.out.println(user);
        return "OK";
    }
}
```



### 2.6 路径参数

路径参数：

- 前端：通过请求URL直接传递参数
- 后端：使用{…}来标识该路径参数，需要使用@PathVariable获取路径参数

Controller方法：

```java
@RestController
public class RequestController {
    //路径参数
    @RequestMapping("/path/{id}")
    public String pathParam(@PathVariable Integer id){
        System.out.println(id);
        return "OK";
    }
}
```

**传递多个路径参数：**

Postman：

![image-20221204002306288](D:\Java Web\资料\day05-SpringBootWeb请求响应\讲义\assets\image-20221204002306288.png)

Controller方法：

~~~java
@RestController
public class RequestController {
    //路径参数
    @RequestMapping("/path/{id}/{name}")
    public String pathParam2(@PathVariable Integer id, @PathVariable String name){
        System.out.println(id+ " : " +name);
        return "OK";
    }
}
~~~



## 3. 响应

Controller程序，除了接收请求外，还可以进行响应。

### 3.1 @ResponseBody

`controller` 方法中的 `return` 的结果，使用 `@ResponseBody` 注解就可以响应给浏览器。

**@ResponseBody注解：**

- 类型：方法注解、类注解
- 位置：书写在Controller方法上或类上
- 作用：将方法返回值直接响应给浏览器
	- 如果返回值类型是实体对象/集合，将会转换为JSON格式后在响应给浏览器

> @RestController = @Controller + @ResponseBody 
>
> 在类上添加@RestController就相当于添加了@ResponseBody注解。

- 类上有 `@RestController` 注解或 `@ResponseBody`注解时：表示当前类下所有的方法返回值做为响应数据
	- 方法的返回值，如果是一个POJO对象或集合时，会先转换为JSON格式，再响应给浏览器

### 3.2 统一响应结果

> 前端：只需要按照统一格式的返回结果进行解析(仅一种解析方案)，就可以拿到数据。

统一的返回结果使用类来描述，在这个结果中包含：

- 响应状态码：当前请求是成功，还是失败

- 状态码信息：给页面的提示信息

- 返回的数据：给前端响应的数据（字符串、对象、集合）

定义在一个实体类Result来包含以上信息。代码如下：

```java
public class Result {
    private Integer code;//响应码，1 代表成功; 0 代表失败
    private String msg;  //响应码 描述字符串
    private Object data; //返回的数据

    public Result() { }
    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    //增删改 成功响应(不需要给前端返回数据)
    public static Result success(){
        return new Result(1,"success",null);
    }
    //查询 成功响应(把查询结果做为返回数据响应给前端)
    public static Result success(Object data){
        return new Result(1,"success",data);
    }
    //失败响应
    public static Result error(String msg){
        return new Result(0,msg,null);
    }
}
```

Controller如下：

```java
@RestController
public class ResponseController { 
    //响应统一格式的结果
    @RequestMapping("/hello")
    public Result hello(){
        System.out.println("Hello World ~");
        //return new Result(1,"success","Hello World ~");
        return Result.success("Hello World ~");
    }

    //响应统一格式的结果
    @RequestMapping("/getAddr")
    public Result getAddr(){
        Address addr = new Address();
        addr.setProvince("广东");
        addr.setCity("深圳");
        return Result.success(addr);
    }

    //响应统一格式的结果
    @RequestMapping("/listAddr")
    public Result listAddr(){
        List<Address> list = new ArrayList<>();

        Address addr = new Address();
        addr.setProvince("广东");
        addr.setCity("深圳");

        Address addr2 = new Address();
        addr2.setProvince("陕西");
        addr2.setCity("西安");

        list.add(addr);
        list.add(addr2);
        return Result.success(list);
    }
}
```



## 4. 分层解耦

### 4.1 三层架构

#### 4.1.1 介绍

在我们进行程序设计以及程序开发时，尽可能让每一个接口、类、方法的职责更单一些（单一职责原则）。

> 单一职责原则：一个类或一个方法，就只做一件事情，只管一块功能。
>
> 这样就可以让类、接口、方法的复杂度更低，可读性更强，扩展性更好，也更利用后期的维护。

处理逻辑从组成上看可以分为三个部分：

- 数据访问：负责业务数据的维护操作，包括增、删、改、查等操作。
- 逻辑处理：负责业务逻辑处理的代码。
- 请求处理、响应数据：负责，接收页面的请求，给页面响应数据。

按照上述的三个组成部分，在项目开发中可以将代码分为三层：

![image-20221204193837678](D:\JavaWeb\资料\day05-SpringBootWeb请求响应\讲义\assets\image-20221204193837678.png)

- `Controller`：控制层。接收前端发送的请求，对请求进行处理，并响应数据。
- `Service`：业务逻辑层。处理具体的业务逻辑。
- `Dao`：数据访问层(Data Access Object)，也称为持久层。负责数据访问操作，包括数据的增、删、改、查。

基于三层架构的程序执行流程：

![image-20221204194207812](D:\JavaWeb\资料\day05-SpringBootWeb请求响应\讲义\assets\image-20221204194207812.png)

- 前端发起的请求，由 `Controller` 层接收（Controller响应数据给前端）
- `Controller` 层调用 `Service` 层来进行逻辑处理（Service层处理完后，把处理结果返回给Controller层）
- `Serivce` 层调用 `Dao` 层（逻辑处理过程中需要用到的一些数据要从Dao层获取）
- `Dao` 层操作文件中的数据（Dao拿到的数据会返回给Service层）

> 思考：按照三层架构的思想，如何要对业务逻辑(Service层)进行变更，会影响到Controller层和Dao层吗？ 
>
> 答案：不会影响。 （程序的扩展性、维护性变得更好了）

#### 4.1.2 代码拆分

![image-20221204201342490](D:\Java进阶之路\SpringBoot\黑马2023JavaWeb笔记\08-Web入门.assets\image-20221204201342490.png)

三层架构的好处：

1. 复用性强
2. 便于维护
3. 利用扩展



### 4.2 分层解耦

#### 4.2.1 耦合问题

首先需要了解软件开发涉及到的两个概念：内聚和耦合。

- 内聚：软件中各个功能模块内部的功能联系。

- 耦合：衡量软件中各个层/模块之间的依赖、关联的程度。

**软件设计原则：高内聚低耦合。**

> 高内聚指的是：一个模块中各个元素之间的联系的紧密程度，如果各个元素(语句、程序段)之间的联系程度越高，则内聚性越高，即 "高内聚"。
>
> 低耦合指的是：软件中各个层、模块之间的依赖关联程序越低越好。

高内聚、低耦合的目的是使程序模块的可重用性、移植性大大增强。

#### 4.2.2  解耦思路

解耦思路：

- 提供一个容器，容器中存储一些对象(例：EmpService对象)
- controller程序从容器中获取EmpService类型的对象

Spring中的两个核心概念：

- **控制反转：** Inversion Of Control，简称 `IOC`。对象的创建控制权由程序自身转移到外部（容器），这种思想称为控制反转。**`@Component`** 

	> 对象的创建权由程序员主动创建转移到容器(由容器创建、管理对象)。这个容器称为：IOC容器或Spring容器

- **依赖注入：** Dependency Injection，简称 `DI`。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。**`@Autowired`** 

	> 程序运行时需要某个资源，此时容器就为其提供这个资源。
	>
	> 例：EmpController程序运行时需要EmpService对象，Spring容器就为其提供并注入EmpService对象

IOC容器中创建、管理的对象，称之为：`bean` 对象



### 4.3 IOC&DI

#### 4.3.1 IOC&DI入门

1. 使用 Spring 提供的注解：`@Component` ，将Service层和Dao层的实现类交给IOC容器管理
2. 使用 Spring 提供的注解：`@Autowired` ，在程序运行时IOC容器自动注入需要的依赖对象

#### 4.3.2 IOC详解

要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一：

| 注解        | 说明                 | 位置                                            |
| :---------- | -------------------- | ----------------------------------------------- |
| @Controller | @Component的衍生注解 | 标注在控制器类上                                |
| @Service    | @Component的衍生注解 | 标注在业务类上                                  |
| @Repository | @Component的衍生注解 | 标注在数据访问类上（由于与mybatis整合，用的少） |
| @Component  | 声明bean的基础注解   | 不属于以上三类时，用此注解                      |

在IOC容器中，每一个 `Bean` 都有一个属于自己的名字，可以通过注解的 `value` 属性指定 `bean` 的名字。如果没有指定，默认为类名首字母小写。

> 注意事项: 
>
> - 声明bean的时候，可以通过value属性指定bean的名字，如果没有指定，默认为类名首字母小写。
>
> - 使用以上四个注解都可以声明bean，但是在springboot集成web开发中，声明控制器bean只能用@Controller。
>
> - 使用四大注解声明的bean，要想生效，还需要被组件扫描注解@ComponentScan扫描。
>
> 	@ComponentScan注解虽然没有显式配置，但是实际上已经包含在了引导类声明注解 @SpringBootApplication 中，==**默认扫描的范围是SpringBoot启动类所在包及其子包**==。



#### 4.3.3 DI详解

依赖注入，是指IOC容器要为应用程序去提供运行时所依赖的资源，而资源指的就是对象。

`@Autowired` 注解，默认是按照**类型**进行自动装配的（去IOC容器中找某个类型的对象，然后完成注入操作）

> 入门程序举例：在EmpController运行的时候，就要到IOC容器当中去查找EmpService这个类型的对象，而我们的IOC容器中刚好有一个EmpService这个类型的对象，所以就找到了这个类型的对象完成注入操作。

如果在IOC容器中，存在多个相同类型的bean对象，程序运行会报错。

解决方案：

- `@Primary` 

- `@Qualifier` 

- `@Resource` 

1.使用 `@Primary` 注解：当存在多个相同类型的Bean注入时，加上 `@Primary` 注解，来确定默认的实现。

2.使用 `@Qualifier` 注解：指定当前要注入的bean对象。 在 `@Qualifier` 的value属性中，指定注入的bean的名称。

- `@Qualifier` 注解不能单独使用，必须配合 `@Autowired` 使用

3.使用 `@Resource` 注解：是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。

> 面试题 ： @Autowird 与 @Resource的区别
>
> - @Autowired 是spring框架提供的注解，而@Resource是JDK提供的注解
> - @Autowired 默认是按照类型注入，而@Resource是按照名称注入

