import{_ as a,c as i,a as e,b as s,d as n,o as l}from"./app-BL12ydfr.js";const r={};function o(p,t){return l(),i("div",null,[t[0]||(t[0]=e("h1",{id:"第三期-前端模版开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三期-前端模版开发"},[e("span",null,"第三期 - 前端模版开发")])],-1)),t[1]||(t[1]=e("p",null,"面试吧笔记第三期 - 前端模板开发",-1)),t[2]||(t[2]=e("p",null,"开发前端服务端渲染网站模板，并完成面试吧 Web 前端的部分基础页面。",-1)),s(" more "),t[3]||(t[3]=n(`<h2 id="_1-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_1-服务端渲染"><span>1. 服务端渲染</span></a></h2><h3 id="_1-1-什么是客户端和服务端渲染" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是客户端和服务端渲染"><span>1.1 什么是客户端和服务端渲染</span></a></h3><figure><img src="https://cloud.braumace.cn/f/JpySo/3.1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>1. 客户端渲染（Client-Side Rendering，CSR）</strong>：</p><p>在客户端渲染模式下，服务器返回一个基本的 HTML 页面结构和一些必要的 JavaScript 和 CSS 文件。然后，客户端的浏览器通过执行 JavaScript 代码来请求数据，并根据数据动态生成页面内容。</p><p>这种模式下，页面的渲染过程主要由客户端的浏览器完成，可以实现更丰富的交互和动态内容。</p><p>但是，初始加载时需要下载和执行大量的 JavaScript 代码，页面加载速度相对较慢，对搜索引擎的可访问性较差。</p><p><strong>2. 服务端渲染（Server-Side Rendering，SSR）</strong>：</p><p>在服务端渲染模式下，服务器在接收到客户端请求后，会将页面的初始 HTML 内容生成并发送给客户端。客户端接收到 HTML 后，进行解析和渲染，最终呈现给用户。</p><p>在这种模式下，页面的大部分内容在服务器端已经渲染完成，因此页面加载速度相对较快，并且对搜索引擎友好。</p><p>但是，交互式的内容和功能需要等待客户端的 JavaScript 代码执行完成后才能实现。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>客户端渲染和服务端渲染的主要区别在于<strong>渲染过程发生的地点</strong>。</p></div><h3 id="_1-2-客户端渲染" tabindex="-1"><a class="header-anchor" href="#_1-2-客户端渲染"><span>1.2 客户端渲染</span></a></h3><p>CSR 的过程如下：</p><ol><li><strong>客户端发送请求</strong>：客户端浏览器发送页面请求给服务器。</li><li><strong>服务器处理请求</strong>：服务器接收到请求后，返回一个包含基本 HTML 结构和 JavaScript 的响应。</li><li><strong>客户端下载资源</strong>：客户端浏览器接收到响应后，开始下载所需的 JavaScript 文件和其他静态资源。</li><li><strong>客户端执行 JavaScript</strong>：客户端浏览器解析并执行下载的 JavaScript 文件，生成页面的 DOM 结构。</li><li><strong>数据获取和处理</strong>：客户端通过 JavaScript 发起异步请求，从服务器获取所需的数据。</li><li><strong>模板渲染和内容填充</strong>：客户端使用获取到的数据，通过 JavaScript 操作 DOM，将数据填充到页面中的相应位置。</li><li><strong>页面展示</strong>：客户端浏览器根据最终的 DOM 结构和样式，渲染并展示页面给用户。</li></ol><p>CSR 的优点包括：</p><ol><li><strong>更快的页面切换速度</strong>：由于只需要获取基本的 HTML 结构和 JavaScript 文件，页面切换时可以更快地加载和渲染。</li><li><strong>减轻服务器压力</strong>：服务器只需提供基本的 HTML 结构和 JavaScript 文件，不需要进行页面渲染和数据处理，减轻了服务器的压力。</li><li><strong>适用于复杂的交互和动态内容</strong>：通过异步请求和前端 JavaScript 处理，可以实现复杂的交互和动态内容，提供更好的用户体验。</li></ol><p>CSR 的缺点包括：</p><ol><li><strong>首屏加载速度较慢</strong>：由于需要下载和执行 JavaScript 文件，页面的首次加载速度相对较慢，用户可能在加载过程中看到空白页面。</li><li><strong>不利于搜索引擎优化</strong>：由于初次加载的页面内容较少，搜索引擎难以理解和索引页面的全部内容，对搜索引擎优化不友好。</li><li><strong>对浏览器兼容性要求较高</strong>：CSR 需要客户端浏览器支持 JavaScript，并且不同浏览器对 JavaScript 的解析和执行可能存在差异，对兼容性要求较高。</li></ol><p>CSR 通过在客户端浏览器执行 JavaScript，实现了快速的页面切换和复杂交互，但也面临首屏加载速度较慢和搜索引擎优化不友好的问题。在具体项目中，需要综合考虑需求和限制，选择合适的渲染模式。</p><h3 id="_1-3-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_1-3-服务端渲染"><span>1.3 服务端渲染</span></a></h3><p>服务端渲染的过程如下：</p><ol><li><strong>客户端发送请求</strong>：客户端浏览器发送页面请求给服务器。</li><li><strong>服务器处理请求</strong>：服务器接收到请求后，根据请求的路由和数据，执行相应的处理逻辑。</li><li><strong>数据获取和处理</strong>：服务器从数据库或其他数据源中获取所需的数据，并进行必要的处理和转换。</li><li><strong>模板渲染</strong>：服务器使用获取到的数据和事先定义好的模板引擎，将数据填充到模板中，生成完整的 HTML 页面。</li><li><strong>返回渲染结果</strong>：服务器将渲染好的 HTML 页面作为响应返回给客户端浏览器。</li><li><strong>客户端解析和渲染</strong>：客户端浏览器接收到 HTML 响应后，进行解析和渲染，最终呈现给用户。</li></ol><p>SSR 的优点包括：</p><ol><li><strong>更快的首屏加载速度</strong>：由于服务器在渲染过程中已经将页面的大部分内容生成，用户在访问网站时可以快速看到页面的内容，提升了用户体验。</li><li><strong>更好的搜索引擎优化</strong>：搜索引擎可以直接获取到完整的 HTML 页面，可以更好地理解和索引网页内容，提高网站在搜索结果中的排名。</li><li><strong>更好的可访问性</strong>：由于服务器端已经生成了完整的 HTML 页面，即使客户端浏览器不支持 JavaScript 或 JavaScript 出错，用户仍然可以正常访问和浏览网页内容。</li></ol><p>SSR 的缺点包括：</p><ol><li><strong>服务器压力较大</strong>：由于页面的渲染逻辑在服务器端执行，需要服务器进行更多的计算和处理，对服务器的性能要求较高。</li><li><strong>复杂的交互和动态内容有延迟</strong>：复杂的交互和动态内容需要等待客户端的 JavaScript 代码执行完成后才能实现，可能会有一定的延迟。</li><li><strong>开发复杂度较高</strong>：SSR 需要在服务器端和客户端进行不同的处理和逻辑，开发和维护的复杂度相对较高。</li></ol><p>SSR 通过在服务器端生成页面的初始 HTML 内容，提供了更快的加载速度和更好的搜索引擎优化，但也面临服务器压力大和开发复杂度高的挑战。在具体项目中，需要综合考虑需求和限制，选择合适的渲染模式。</p><p>在 SSR 模式下，服务器会执行页面的渲染逻辑，包括数据获取、模板渲染和路由处理等。服务器会将渲染好的 HTML 页面发送给客户端，客户端浏览器接收到 HTML 后，进行解析和渲染，最终呈现给用户。</p><h3 id="_1-4-其他渲染方式-静态网站生成" tabindex="-1"><a class="header-anchor" href="#_1-4-其他渲染方式-静态网站生成"><span>1.4 其他渲染方式 - 静态网站生成</span></a></h3><p><strong>静态网站生成</strong>（Static Site Generation，SSG）是一种在构建阶段生成静态 HTML 文件的技术。与服务端渲染不同，静态网站生成是在构建时（而不是用户请求时）生成页面，所有页面都以静态文件的形式存在。</p><p>这种方式本质上也是客户端渲染，但是不需要由客户端再动态地向后端发送请求来获取数据，这些静态文件可以直接由内容分发网络（CDN）或静态服务器提供。</p><p>优点：</p><ol><li><strong>高性能</strong>：由于服务器仅需提供静态文件，性能极高；而且由于数据不变化，特别适合通过 CDN 缓存加速。</li><li><strong>SEO 友好</strong>:搜索引擎最喜欢的就是静态 HTML 文件，可以轻松索引并提升 SEO 效果。</li><li><strong>简化基础设施</strong>:无需复杂的前后端交互逻辑，静态文件的部署和维护成本较低。</li></ol><p>缺点：</p><ol><li><strong>动态内容有限</strong>：SSG 适合内容变化不频繁的场景，对于需要实时更新内容的网站，生成静态页面可能不够灵活</li><li><strong>构建时间</strong>：生成大量静态页面时，构建时间可能较长，特别是数据量大的时候。</li></ol><p>基于这些优缺点，静态网站生成适合<strong>内容数量有限的、内容基本不变</strong>的网站，比如个人博客。像 VuePress、Hugo、Hexo、Astro 都是主流的静态网站生成器。</p><p>随着静态网站内容越来越多，每次构建会越来越慢。在这种情况下，可以采用增量静态生成技术。</p><p><strong>增量静态生成</strong>（Incremental Static Regeneration，ISR）允许部分页面在构建之后进行更新，而无需重新构建整个站点。这种技术适用于那些大多数内容不变、但某些部分需要动态更新的网站。</p><p>工作流程：</p><ol><li>在构建阶段，生成初始的静态页面。</li><li>当页面内容更新时，通过配置的再生成间隔，静态页面可以增量更新，而不是重新生成整个站点，大幅减少构建时间。</li><li>用户请求时，如果页面内容过期或更新，则后台自动生成新的静态页面并缓存。</li></ol><p>这样一来，可以在既能享受静态网站高性能、SEO 友好特性的同时，又能及时更新网站的内容，并减少构建时间。</p><p>不过缺点就是架构更复杂、维护成本更高。但值得一提的是，很多大型网站为了做 SEO 优化，专门把动态网站转为静态 HTML（静态化）。</p><h3 id="_1-5-结合使用-推荐" tabindex="-1"><a class="header-anchor" href="#_1-5-结合使用-推荐"><span>1.5 结合使用（推荐）</span></a></h3><p>实际情况下，前面讲到的几种方式可以结合使用。</p><p>比如 <strong>部分预渲染</strong>（Partial Prerendering，PPR）是一种将服务端渲染（或静态生成）与客户端渲染结合的技术。</p><p>工作流程：</p><ol><li>在构建阶段或请求阶段，页面的静态部分预先渲染（如导航栏、页脚等）。</li><li>页面加载时，静态部分直接显示，动态部分由 JavaScript 在客户端加载并渲染。</li><li>通过<strong>水合</strong>（Hydration）过程，客户端的 JavaScript 接管已经渲染的静态内容，并继续处理动态交互。</li></ol><p>这样一来，就可以兼具 SSR 的 SEO 友好和快速初始加载、以及 CSR 灵活动态交互的优点。</p><figure><img src="https://cloud.braumace.cn/f/0kaCB/3.2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container info"><p class="hint-container-title">同端渲染</p><p>还有一个跟部分预渲染相似的概念叫 <strong>同构渲染</strong>，是指同一套代码可以在服务端和客户端运行，并在服务端渲染页面的初始内容，然后在客户端接管渲染和交互。</p></div><h2 id="_2-开发-next-js-前端万用模板" tabindex="-1"><a class="header-anchor" href="#_2-开发-next-js-前端万用模板"><span>2. 开发 Next.js 前端万用模板</span></a></h2><p>自主打造一套前端万用模版。</p><h3 id="_2-1-确认环境" tabindex="-1"><a class="header-anchor" href="#_2-1-确认环境"><span>2.1 确认环境</span></a></h3><p>Next.js 官方文档：<a href="https://nextjs.org/docs/app/getting-started/installation" target="_blank" rel="noopener noreferrer">https://nextjs.org/docs/app/getting-started/installation</a></p><blockquote><p>注意：官方文档才是最新版，国内的中文文档不够新！</p></blockquote><p>本项目我们使用的是 14 版本的 Next.js，可以看到 Node.js 的版本要求必须 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>≥</mo></mrow><annotation encoding="application/x-tex">\\geq</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mrel">≥</span></span></span></span> 18.18，一定要注意！</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>Node.js 版本检测命令：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>切换和管理 node 版本的工具：<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">https://github.com/nvm-sh/nvm</a></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注意：Next.js 有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn></mrow><annotation encoding="application/x-tex">2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> 种开发模式。本项目用的是新的开发模式 App Router。</p></blockquote><figure><img src="https://cloud.braumace.cn/f/PaeH0/3.3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-2-创建项目"><span>2.2 创建项目</span></a></h3><p>直接按照官方文档的指引，使用 Npm 自带的 Npx 脚手架工具 <code>create-next-app</code> 来自动安装 Next.js 初始化项目：<a href="https://nextjs.org/docs/getting-started/installation#automatic-installation" target="_blank" rel="noopener noreferrer">https://nextjs.org/docs/getting-started/installation#automatic-installation</a></p><p>执行安装命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create-next-app@latest</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者：npx create-next-app@14.2.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，latest 表示当前脚手架的最新版本。本项目中使用的 <code>create-next-app</code> 脚手架版本是 <code>14.2.6</code>，可以在 <a href="https://www.npmjs.com/package/create-next-app?activeTab=versions" target="_blank" rel="noopener noreferrer">npm 包管理器网站</a> 查看版本情况，可以直接把命令中的 latest 替换为 <code>14.2.6</code>。</p><p>脚手架可以帮我们自动整合 React、Next.js、TypeScript 语法、ESLint 校验等库，如下所示创建前端项目：</p><figure><img src="https://cloud.braumace.cn/f/Q2dTo/3.4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>脚手架会自动生成代码并安装依赖，如果安装依赖卡住，可能需要更换 Npm 镜像为国内源：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://registry.npmmirror.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p>接着使用 WebStorm 打开项目，在终端执行 <code>npm run dev</code> 命令，能访问到网页就成功了。</p><p><img src="https://cloud.braumace.cn/f/o1pi2/3.5.png" alt="" loading="lazy"><br><img src="https://cloud.braumace.cn/f/nw3tz/3.6.png" alt="" loading="lazy"></p><h3 id="_2-3-前端工程化配置" tabindex="-1"><a class="header-anchor" href="#_2-3-前端工程化配置"><span>2.3 前端工程化配置</span></a></h3></div>`,58))])}const h=a(r,[["render",o],["__file","3. 前端模板开发.html.vue"]]),g=JSON.parse('{"path":"/open-source-project/mianshiba/3.%20%E5%89%8D%E7%AB%AF%E6%A8%A1%E6%9D%BF%E5%BC%80%E5%8F%91.html","title":"第三期 - 前端模版开发","lang":"zh-CN","frontmatter":{"order":3,"category":["项目"],"tag":["面试吧"],"description":"面试吧笔记第三期 - 前端模板开发 开发前端服务端渲染网站模板，并完成面试吧 Web 前端的部分基础页面。","head":[["meta",{"property":"og:url","content":"https://blog.braumace.cn/ByteLighting/open-source-project/mianshiba/3.%20%E5%89%8D%E7%AB%AF%E6%A8%A1%E6%9D%BF%E5%BC%80%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"ByteLighting"}],["meta",{"property":"og:title","content":"第三期 - 前端模版开发"}],["meta",{"property":"og:description","content":"面试吧笔记第三期 - 前端模板开发 开发前端服务端渲染网站模板，并完成面试吧 Web 前端的部分基础页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cloud.braumace.cn/f/JpySo/3.1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T09:25:30.000Z"}],["meta",{"property":"article:tag","content":"面试吧"}],["meta",{"property":"article:modified_time","content":"2024-11-24T09:25:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三期 - 前端模版开发\\",\\"image\\":[\\"https://cloud.braumace.cn/f/JpySo/3.1.png\\",\\"https://cloud.braumace.cn/f/0kaCB/3.2.png\\",\\"https://cloud.braumace.cn/f/PaeH0/3.3.png\\",\\"https://cloud.braumace.cn/f/Q2dTo/3.4.png\\",\\"https://cloud.braumace.cn/f/o1pi2/3.5.png\\",\\"https://cloud.braumace.cn/f/nw3tz/3.6.png\\"],\\"dateModified\\":\\"2024-11-24T09:25:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BraumAce\\",\\"url\\":\\"https://blog.braumace.cn/article\\"}]}"]]},"headers":[{"level":2,"title":"1. 服务端渲染","slug":"_1-服务端渲染","link":"#_1-服务端渲染","children":[{"level":3,"title":"1.1 什么是客户端和服务端渲染","slug":"_1-1-什么是客户端和服务端渲染","link":"#_1-1-什么是客户端和服务端渲染","children":[]},{"level":3,"title":"1.2 客户端渲染","slug":"_1-2-客户端渲染","link":"#_1-2-客户端渲染","children":[]},{"level":3,"title":"1.3 服务端渲染","slug":"_1-3-服务端渲染","link":"#_1-3-服务端渲染","children":[]},{"level":3,"title":"1.4 其他渲染方式 - 静态网站生成","slug":"_1-4-其他渲染方式-静态网站生成","link":"#_1-4-其他渲染方式-静态网站生成","children":[]},{"level":3,"title":"1.5 结合使用（推荐）","slug":"_1-5-结合使用-推荐","link":"#_1-5-结合使用-推荐","children":[]}]},{"level":2,"title":"2. 开发 Next.js 前端万用模板","slug":"_2-开发-next-js-前端万用模板","link":"#_2-开发-next-js-前端万用模板","children":[{"level":3,"title":"2.1 确认环境","slug":"_2-1-确认环境","link":"#_2-1-确认环境","children":[]}]}],"git":{"createdTime":1732440330000,"updatedTime":1732440330000,"contributors":[{"name":"BraumAce","email":"1693717911@qq.com","commits":1}]},"readingTime":{"minutes":10.41,"words":3124},"filePathRelative":"open-source-project/mianshiba/3. 前端模板开发.md","localizedDate":"2024年11月24日","excerpt":"\\n<p>面试吧笔记第三期 - 前端模板开发</p>\\n<p>开发前端服务端渲染网站模板，并完成面试吧 Web 前端的部分基础页面。</p>\\n","autoDesc":true}');export{h as comp,g as data};
