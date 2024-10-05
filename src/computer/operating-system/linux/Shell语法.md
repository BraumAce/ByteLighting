---
order: 1
category: 
- Linux
tag: 
- 基础
---

# Shell 语法

<!-- more -->

## 概论

shell 是我们通过命令行与操作系统沟通的语言。

shell 脚本可以直接在命令行中执行，也可以将一套逻辑组织成一个文件，方便复用。
AC Terminal 中的命令行可以看成是一个"**shell脚本在逐行执行**"。

Linux 中常见的 shell 脚本有很多种，常见的有：

- Bourne Shell ( `/usr/bin/sh` 或 `/bin/sh` )
- Bourne Again Shell ( `/bin/bash` )
- C Shell ( `/usr/bin/csh` )
- K Shell ( `/usr/bin/ksh` )
- zsh
...

Linux 系统中一般默认使用 bash，所以接下来讲解 bash 中的语法。
文件开头需要写 `#! /bin/bash` ，指明 bash 为脚本解释器。

**学习技巧**

不要死记硬背，遇到含糊不清的地方，可以在 AC Terminal 里实际运行一遍。

**脚本示例**

新建一个 `test.sh` 文件，内容如下：
```shell
#! /bin/bash
echo "Hello World!"
```

**运行方式**

作为可执行文件
```shell
acs@9e0ebfcd82d7:~$ chmod +x test.sh  # 使脚本具有可执行权限
acs@9e0ebfcd82d7:~$ ./test.sh  # 当前路径下执行
Hello World!  # 脚本输出
acs@9e0ebfcd82d7:~$ /home/acs/test.sh  # 绝对路径下执行
Hello World!  # 脚本输出
acs@9e0ebfcd82d7:~$ ~/test.sh  # 家目录路径下执行
Hello World!  # 脚本输出
```

用解释器执行
```shell
acs@9e0ebfcd82d7:~$ bash test.sh
Hello World!  # 脚本输出
```

## 1. 注释

### 1.1 单行注释

每行中 `#` 之后的内容均是注释。

```shell
# 这是一行注释

echo 'Hello World'  #  这也是注释
```

### 1.2 多行注释

格式：

```shell
:<<EOF
第一行注释
第二行注释
第三行注释
EOF
```

其中 `EOF` 可以换成其它任意字符串。例如：

```shell
:<<abc
第一行注释
第二行注释
第三行注释
abc

:<<!
第一行注释
第二行注释
第三行注释
!
```

## 2. 变量

### 2.1 定义变量

定义变量，不需要加 `$` 符号，例如：

```shell
name1='yxc'  # 单引号定义字符串
name2="yxc"  # 双引号定义字符串
name3=yxc    # 也可以不加引号，同样表示字符串
```

### 2.2 使用变量

使用变量，需要加上 `$` 符号，或者 `${}` 符号。花括号是可选的，主要为了帮助解释器识别变量边界。

```shell
name=yxc
echo $name  # 输出yxc
echo ${name}  # 输出yxc
echo ${name}acwing  # 输出yxcacwing
```

### 2.3 只读变量

使用 `readonly` 或者 `declare` 可以将变量变为只读。

```shell
name=yxc
readonly name
declare -r name  # 两种写法均可

name=abc  # 会报错，因为此时name只读
```

### 2.4 删除变量

`unset` 可以删除变量。

```shell
name=yxc
unset name
echo $name  # 输出空行
```

### 2.5 变量类型

1. 自定义变量（局部变量）

	子进程不能访问的变量

2. 环境变量（全局变量）

	子进程可以访问的变量

自定义变量改成环境变量：

```shell
acs@9e0ebfcd82d7:~$ name=yxc  # 定义变量
acs@9e0ebfcd82d7:~$ export name  # 第一种方法
acs@9e0ebfcd82d7:~$ declare -x name  # 第二种方法
```

环境变量改为自定义变量： 

```shell
acs@9e0ebfcd82d7:~$ export name=yxc  # 定义环境变量
acs@9e0ebfcd82d7:~$ declare +x name  # 改为自定义变量
```

### 2.6 字符串

字符串可以用单引号，也可以用双引号，也可以不用引号。

单引号与双引号的区别：

- 单引号中的内容会原样输出，不会执行、不会取变量；
- 双引号中的内容可以执行、可以取变量；

```shell
name=yxc  # 不用引号
echo 'hello, $name \"hh\"'  # 单引号字符串，输出 hello, $name \"hh\"
echo "hello, $name \"hh\""  # 双引号字符串，输出 hello, yxc "hh"
```

获取字符串长度

```shell
name="yxc"
echo ${#name}  # 输出3
```

提取子串

```shell
name="hello, yxc"
echo ${name:0:5}  # 提取从0开始的5个字符
```

## 3. 默认变量

### 3. 1 文件参数变量

在执行 shell 脚本时，可以向脚本传递参数。`$1` 是第一个参数，`$2` 是第二个参数，以此类推。特殊的，`$0` 是文件名（包含路径）。例如：

创建文件 `test.sh` ：

```shell
#! /bin/bash

echo "文件名："$0
echo "第一个参数："$1
echo "第二个参数："$2
echo "第三个参数："$3
echo "第四个参数："$4
```

然后执行该脚本：

```shell
acs@9e0ebfcd82d7:~$ chmod +x test.sh 
acs@9e0ebfcd82d7:~$ ./test.sh 1 2 3 4
文件名：./test.sh
第一个参数：1
第二个参数：2
第三个参数：3
第四个参数：4
```

### 3.2 其它参数相关变量

| 参数         | 说明                                                                                   |
| ------------ | -------------------------------------------------------------------------------------- |
| `$#`         | 代表文件传入的参数个数，如上例中值为4                                                  |
| `$*`         | 由所有参数构成的用空格隔开的字符串，如上例中值为 `"$1 $2 $3 $4"`                       |
| `$@`         | 每个参数分别用双引号括起来的字符串，如上例中值为 `"$1" "$2" "$3" "$4"`                 |
| `$$`         | 脚本当前运行的进程ID                                                                   |
| `$?`         | 上一条命令的退出状态（注意不是stdout，而是exit code）。`0`表示正常退出，其他值表示错误 |
| `$(command)` | 返回 `command`这条命令的stdout（可嵌套）                                               |
| `command`  | 返回 `command` 这条命令的stdout（不可嵌套）                                            |


## 4. 数组

数组中可以存放多个不同类型的值，只支持一维数组，初始化时不需要指明数组大小。
数组 **下标从0开始**。

### 4.1 定义

数组用小括号表示，元素之间用空格隔开。例如：

```shell
array=(1 abc "def" yxc)
```

也可以直接定义数组中某个元素的值：

```shell
array[0]=1
array[1]=abc
array[2]="def"
array[3]=yxc
```

### 4.2 读取数组中某个元素的值

格式：

```shell
${array[index]}
```

例如：

```shell
array=(1 abc "def" yxc)
echo ${array[0]}
echo ${array[1]}
echo ${array[2]}
echo ${array[3]}
```

### 4.3 读取整个数组

格式：

```shell
${array[@]}  # 第一种写法
${array[*]}  # 第二种写法
```

例如：

```shell
array=(1 abc "def" yxc)

echo ${array[@]}  # 第一种写法
echo ${array[*]}  # 第二种写法
```

### 4.4 数组长度

类似于字符串

```shell
${#array[@]}  # 第一种写法
${#array[*]}  # 第二种写法
```

例如：

```shell
array=(1 abc "def" yxc)

echo ${#array[@]}  # 第一种写法
echo ${#array[*]}  # 第二种写法
```

