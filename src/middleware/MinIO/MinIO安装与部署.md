---
date: 2024-07-11
order: 2
category:
- 中间件
tag:
- MinIO
---

# MinIO 安装与部署

::: info 官方仓库

GitHub：[https://github.com/minio](https://github.com/minio)

GItee镜像：[https://gitee.com/mirrors/minio](https://gitee.com/mirrors/minio)

官网下载：[https://www.minio.org.cn/download.shtml#/](https://www.minio.org.cn/download.shtml#/)

:::

## Linux 安装启动

1. 下载安装包：

```shell
wget https://dl.minio.org.cn/server/minio/release/linux-amd64/minio
```

2. 赋予可执行权限：

```shell
chmod +x minio
```

3. 前台启动：

```shell
MINIO_ROOT_USER=admin MINIO_ROOT_PASSWORD=password ./minio server /mnt/data --console-address ":9001"
```

> **命令解释：**
> 
> `MINIO_ROOT_USER=admin`：指定MinIO的用户名
> 
> `MINIO_ROOT_PASSWORD=password`：指定MinIO密码
> （用户名和密码都可以省略，默认均为 minioadmin）
>
> `./minio server`：在 minio 所在目录下启动 minio 服务，可修改
>
> `/mnt/data`：指定数据存放位置，可以自定义修改
>
> `--console-address ":9001"`：指定 MinIO 控制台的监听地址和端口

4. 后台启动：

```shell
# 最简单的，只需要在最后面加上 & 即可，但关闭会话服务会停止
nohub ./minio server /mnt/data > /opt/minio/data/minio.log 2>&1 --console-address ":9001" &
```

> **命令解释：**
> 
> `nohup`：这是一个 Unix 命令，用于运行另一个命令在后台，并且忽略挂起（HUP）信号，即使你退出了终端或关闭了会话，该命令也会继续执行；
>
> `> /opt/minio/data/minio.log`：这部分是将标准输出（stdout）重定向到 /opt/minio/data/minio.log 文件，这意味着 MinIO 服务器的所有正常输出（如启动信息、状态更新等）都会被写入到这个日志文件中；
>
> `2>&1`：这部分是将标准错误输出（stderr）重定向到标准输出（stdout），即输出到 /opt/minio/data/minio.log 文件，这样，无论是标准输出还是错误输出，都会被写入到同一个日志文件中；
>
> `&`：这个符号是在命令的末尾，用于将命令放到后台执行，也就是即使你启动了 MinIO 服务器，你的终端或 shell 会话也不会被阻塞，你可以继续执行其他命令；

## Docker 安装启动

1. 搜索 MinIO 镜像：

```shell
docker search minio
```

2. 拉取 MinIO 镜像：

```shell
docker pull minio/minio
```

3. 启动 MinIO 容器：

```shell
docker run -p 9000:9000 -p 9001:9001 minio/minio server /mnt/docker/data --console-address ":9001"
```

## Windows 安装启动

1. 下载 Windows 版的 MinIO：

```shell
https://dl.min.io/server/minio/release/windows-amd64/minio.exe
```

2. 进入到 minio.exe 所在的目录，导航栏输入 `cmd` 进入终端，执行：

```shell
minio.exe server D:\dev\MinIO\data --console-address ":9001"
```

启动 MinIO 服务，其中 `D:\dev\MinIO\data` 是 MinIO 存储数据的目录路径

3. 在浏览器输入 `http://localhost:9000/`，登录 MinIO 服务器 web 管理后台

::: tip 

默认用户名和密码都是 minioadmin

:::

## Windows 后台服务安装

使用上述命令将 MinIO 在 Windows 上启动，关闭终端后服务就会停止。如果要使用 Windows 搭建 MinIO 服务器，需要将其注册为 Windows 服务。

1. 下载 WinSW-x64.exe：[https://github.com/winsw/winsw/releases](https://github.com/winsw/winsw/releases)

2. 将 WinSW.exe 复制到自己指定的目录，重命名为 minio-server.exe.

3. 在同目录下创建 minio-server.xml。注意，xml 和 exe 必须同名。

4. 配置 minio-server.xml 文件，内容如下:

```xml
<service>
    <id>minio-server</id>
    <name>minio-server</name>
    <description>minio文件存储服务</description>
    <executable>%BASE%\minio.exe</executable>
    <arguments>server "%BASE%\data"</arguments>
    <logpath>%BASE%\logs</logpath>
    <log mode="roll-by-size-time">
        <sizeThreshold>10240</sizeThreshold>
        <pattern>yyyyMMdd</pattern>
        <autoRollAtTime>00:00:00</autoRollAtTime>
        <zipOlderThanNumDays>5<zipOlderThanNumDays>
        <zipDateFormat>yyyyMMdd</zipDateFormat>
    </log>
</service>
```

5. 执行 `cmd` 命令注册系统服务

```shell
minio-server.exe install
```

6. 卸载服务

```shell
minio-server.exe uninstall
```
