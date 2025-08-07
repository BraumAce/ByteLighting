### 项目概述

这是一个基于 VuePress 2.x 和 vuepress-theme-hope 主题构建的静态博客项目，旨在记录日常学习和技术钻研。项目通过 Markdown 文件组织内容，并利用 VuePress 的强大功能生成静态网站。

### 技术栈

* **前端框架** : Vue.js 3
* **静态站点生成器** : VuePress 2.x
* **主题** : vuepress-theme-hope
* **包管理器** : npm
* **构建工具** : Vite (通过 VuePress 集成)
* **语言** : TypeScript

### 项目结构

* `/`: 项目根目录，包含 `package.json`、`README.md` 等。
* `/src/`: 存放所有 VuePress 站点内容和配置的核心目录。
  * `/src/.vuepress/`: VuePress 的配置文件目录。
  * `config.ts`: VuePress 的主配置文件，包含站点元数据、插件配置、打包器配置等。
  * `theme.ts`: vuepress-theme-hope 主题的配置文件，包含导航栏、侧边栏、博客功能、评论系统、搜索功能等详细配置。
  * `navbar.ts`: 定义网站顶部导航栏的结构和链接。
  * `sidebar/`: 存放侧边栏配置文件的目录。
    * `index.ts`: 整合各个分类的侧边栏配置文件。
    * `algorithm.ts`, `program.ts`, `open-project.ts`, `framework.ts`, `architecture.ts`, `computer.ts`: 各自定义对应分类下的侧边栏结构，通常使用 `children: "structure"` 自动生成子目录。
  * `public/`: 存放静态资源，如图片、favicon 等。
  * `components/`: 存放自定义的 Vue 组件。
  * `styles/`: 存放自定义样式文件。
* `/src/algorithm/`, `/src/architecture/`, `/src/computer/`, `/src/framework/`, `/src/open-project/`, `/src/program/`: 存放不同分类的 Markdown 内容文件。
* `/src/intro.md `, `/src/README.md`: 站点的介绍性页面。

### 开发环境搭建

1. **安装依赖** : 项目使用 npm 管理依赖，您需要确保已安装 Node.js 和 npm。 在项目根目录下运行：

    ```shell
    npm install
    ```

2. **启动开发服务器** : 项目提供了开发服务器，支持热重载，方便实时预览。 在项目根目录下运行：

    ```shell
    npm run docs:dev
    ```

    或者，如果需要清除缓存后启动：

    ```shell
    npm run docs:clean-dev
    ```

   开发服务器通常会在 http://localhost:8080 启动。

### 内容编写与组织

* **Markdown 文件** : 所有的博客内容都以 Markdown 文件的形式存放在 `/src/` 目录下的各个分类子目录中（例如 `/src/program/article/`）。
* **Frontmatter** : 每个 Markdown 文件顶部可以包含 Frontmatter，用于定义文章的标题、日期、分类、标签等元数据。
* **侧边栏自动生成** : 许多侧边栏（如 `program` 分类下的子目录）配置了 `children: "structure"`，这意味着您只需在对应的目录下创建 Markdown 文件和子目录，侧边栏就会自动生成。

### 构建与部署

1. **构建静态文件** : 当您完成内容编写并准备部署时，可以运行构建命令生成静态文件。 在项目根目录下运行：

    ```shell
    npm run docs:build
    ```

    构建后的静态文件会输出到 `.vuepress/dist` 目录（默认情况下）。

2. **部署** : 项目的 README.md 中提到基于 GitHub 工作流的自动化部署更新，您可以查看 `.github/workflows/deploy-docs.yml` 文件了解具体的部署流程。

### 主要功能

* **多样化 Markdown 拓展** : 支持自定义容器、图表、PDF 阅读器、视频播放器等。
* **订阅和分享** : 支持 Atom、JSON、RSS 订阅和主流媒体分享。
* **评论系统** : 集成 Giscus 评论系统。
* **客户端搜索** : 支持全文索引和分词索引。
* **音乐播放** : 全局音乐播放器。
* **SEO 优化** : 集成 Umami 分析、Sitemap 生成器。
* **PWA 支持** : 渐进式网络应用程序。

### 学习与开发建议

* **熟悉 VuePress 官方文档** : 建议查阅 VuePress 官方文档 [VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/) 和 vuepress-theme-hope 主题文档 [vuepress-theme-hope 主题文档](https://theme-hope.vuejs.press/zh/)，以深入了解其配置和功能。
* **参考现有内容** : 仔细研究 `/src/` 目录下已有的 Markdown 文件，了解其 Frontmatter 的编写方式和内容组织结构。
* **修改配置** : 如果需要修改网站的标题、描述、导航栏、侧边栏或插件配置，请编辑 `/src/.vuepress/config.ts`、`/src/.vuepress/theme.ts`、`/src/.vuepress/navbar.ts` 和 `/src/.vuepress/sidebar/` 目录下的相关文件。
* **自定义样式** : 如果需要修改网站的样式，可以编辑 `/src/.vuepress/styles/` 目录下的 SCSS 文件。

希望这份文档能帮助您更好地理解和使用这个项目！
