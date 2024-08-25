import{_ as e,c as a,o as t,e as r}from"./app-BWCK0xyU.js";const i={},n=r('<h1 id="_3-值得收藏的-eureka-控制台详解" tabindex="-1"><a class="header-anchor" href="#_3-值得收藏的-eureka-控制台详解"><span>3. 值得收藏的 Eureka 控制台详解</span></a></h1><blockquote><p>转载自<strong>悟空聊架构</strong>，原文链接：<a href="https://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&amp;mid=2451959513&amp;idx=1&amp;sn=4d400f00c182f2ddf3f38acc5db2e73b&amp;chksm=8d1c1746ba6b9e50f01b8e99491715813e58da3c22fc8499c191c7c8876d5ef26af7ae303078&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">值得收藏的 Eureka 控制台详解</a></p></blockquote><p>本篇将会给大家讲解我在本地搭建的 Eureka 集群环境下，Eureka 控制台的参数说明。</p><h2 id="系统状态" tabindex="-1"><a class="header-anchor" href="#系统状态"><span>系统状态</span></a></h2><p>首先就得进入 Eureka 控制台页面，本地可以通过访问 http://localhost:8762/ 打开。</p><p>最上面的是 System Status，就是系统状态。</p><figure><img src="https://cloud.braumace.cn/f/RRLtg/3_1.png" alt="System Status" tabindex="0" loading="lazy"><figcaption>System Status</figcaption></figure><p><strong>Environment</strong>: 环境，默认为 <code>test</code>。</p><p><strong>Data center</strong>：数据中心，默认为 <code>default</code>。</p><p><strong>Current time</strong>：当前的系统时间。</p><p><strong>Uptime</strong>：已经运行了多长时间。</p><p><strong>Lease expiration enabled</strong>：是否启用租约过期 ，自我保护机制关闭时，该值默认是 <code>true</code>， 自我保护机制开启之后为 <code>false</code>。</p><p><strong>Renews threshold</strong>：期望每分钟最少续约数。也就是 Eureka Server 期望每分钟收到客户端实例续约的总数。目前悟空我的机器上显示的 3 个。</p><p><strong>Renews (last min)</strong>：最后一分钟的续约数量（不含当前，1分钟更新一次），Eureka Server 最后 1 分钟收到客户端实例续约的总数。目前悟空我的机器上显示的 2 个。</p><h2 id="自我保护机制" tabindex="-1"><a class="header-anchor" href="#自我保护机制"><span>自我保护机制</span></a></h2><figure><img src="https://cloud.braumace.cn/f/zO0hy/3_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>系统在三种情况下会出现红色加粗的字体提示：</p><ul><li>1）自我保护机制配置已经配置成关闭了。</li></ul><blockquote><p>RENEWALS ARE LESSER THAN THE THRESHOLD. THE SELF PRESERVATION MODE IS TURNED OFF.THIS MAY NOT PROTECT INSTANCE EXPIRY IN CASE OF NETWORK/OTHER PROBLEMS.</p></blockquote><p>关闭自我保护模式</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">eureka</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">preservation </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>2）自我保护机制开启了</li></ul><blockquote><p>EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY&#39;RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE.</p></blockquote><p><strong>Eureka 的自我保护模式</strong> 是非常有意义的，该模式被激活后，它不会从注册列表中剔除因长时间没收到心跳导致租期过期的服务，而是等待修复，直到心跳恢复正常之后，它自动退出自我保护模式。</p><p>这种模式旨在避免因网络分区故障导致服务不可用的问题。</p><p>例如：两个客户端实例 C1 和 C2 的连通性是良好的，但是由于网络故障，C2 未能及时向 Eureka 发送心跳续约，这时候 Eureka 不能简单的将 C2 从注册表中剔除。因为如果剔除了，C1 就无法从 Eureka 服务器中获取 C2 注册的服务，但是这时候 C2 服务是可用的。</p><ul><li>3）在配置上，自我保护机制关闭了，但是一分钟内的续约数没有达到 85%，可能发生了网络分区，会有如下提示</li></ul><blockquote><p>THE SELF PRESERVATION MODE IS TURNED OFF.THIS MAY NOT PROTECT INSTANCE EXPIRY IN CASE OF NETWORK/OTHER PROBLEMS.</p></blockquote><h2 id="集群信息" tabindex="-1"><a class="header-anchor" href="#集群信息"><span>集群信息</span></a></h2><p>DS Replicas 代表集群信息，当有多个 Eureka Server 组成集群时，DS Replicas 会展示集群 的其他节点。当前是单节点的。</p><figure><img src="https://cloud.braumace.cn/f/6KVfw/3_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果配置成<code>集群环境</code>，则会显示其他服务，而且在服务实例列表里面也会显示集群节点。</p><figure><img src="https://cloud.braumace.cn/f/aVyso/3_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cloud.braumace.cn/f/YQwF8/3_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="已注册的实例列表" tabindex="-1"><a class="header-anchor" href="#已注册的实例列表"><span>已注册的实例列表</span></a></h2><p>已注册的实例列表会显示在 Instances currently registered with Eureka 列表里面。目前显示了一个，</p><p>名称：SERVICEA</p><p>状态：<strong>UP</strong> (1) - localhost:ServiceA:8006</p><figure><img src="https://cloud.braumace.cn/f/m2Df1/3_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="通用信息" tabindex="-1"><a class="header-anchor" href="#通用信息"><span>通用信息</span></a></h2><figure><img src="https://cloud.braumace.cn/f/V2ytN/3_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>total-avail-memory</strong> : 总共可用的内存，598 MB。</p><p><strong>environment</strong> : 环境名称，默认 test。</p><p><strong>num-of-cpus</strong> : CPU 的个数，12 核。</p><p><strong>current-memory-usage</strong> : 当前已经使用内存的百分比，使用了 110 MB，使用率 18%。</p><p><strong>server-uptime</strong> : 服务已启动时间，6 分钟。</p><p><strong>registered-replicas</strong> : 当前 Eureka Server 是往哪个 Eureka Server 进行注册的。悟空我的本机是 eureka-server1 往 eureka-server 2 进行注册了。</p><p><strong>unavailable-replicas</strong> ：不可用的集群复制节点，用法没懂。</p><p><strong>available-replicas</strong> ：可用的相邻集群复制节点。</p><h2 id="服务实例信息" tabindex="-1"><a class="header-anchor" href="#服务实例信息"><span>服务实例信息</span></a></h2><figure><img src="https://cloud.braumace.cn/f/eL5u5/3_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>ipAddr</strong>：Eureka 服务端 IP。</p><p><strong>status</strong>：Eureka 服务端状态。</p><h2 id="最近-1000-个取消的租约" tabindex="-1"><a class="header-anchor" href="#最近-1000-个取消的租约"><span>最近 1000 个取消的租约</span></a></h2><p>Last 1000 cancelled leases 这个列表里面会显示最近 1000 个取消的租约。</p><figure><img src="https://cloud.braumace.cn/f/7e3T9/3_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Last 1000 newly registered leases，这个列表里面会显示最后 1000 个新注册的租约。比如悟空我的机器上就是 Service A。</p><figure><img src="https://cloud.braumace.cn/f/3jrUr/3_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',58),s=[n];function p(c,o){return t(),a("div",null,s)}const g=e(i,[["render",p],["__file","3. 值得收藏的 Eureka 控制台详解.html.vue"]]),d=JSON.parse('{"path":"/framework/spring-cloud/%E6%BA%90%E7%A0%81%E5%89%96%E6%9E%90/3.%20%E5%80%BC%E5%BE%97%E6%94%B6%E8%97%8F%E7%9A%84%20Eureka%20%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%AF%A6%E8%A7%A3.html","title":"3. 值得收藏的 Eureka 控制台详解","lang":"zh-CN","frontmatter":{"date":"2024-05-17T00:00:00.000Z","category":["常用框架"],"tag":["SpringCloud"],"reprint":true,"description":"3. 值得收藏的 Eureka 控制台详解 转载自悟空聊架构，原文链接：值得收藏的 Eureka 控制台详解 本篇将会给大家讲解我在本地搭建的 Eureka 集群环境下，Eureka 控制台的参数说明。 系统状态 首先就得进入 Eureka 控制台页面，本地可以通过访问 http://localhost:8762/ 打开。 最上面的是 System S...","head":[["meta",{"property":"og:url","content":"https://blog.braumace.cn/ByteLighting/framework/spring-cloud/%E6%BA%90%E7%A0%81%E5%89%96%E6%9E%90/3.%20%E5%80%BC%E5%BE%97%E6%94%B6%E8%97%8F%E7%9A%84%20Eureka%20%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"ByteLighting"}],["meta",{"property":"og:title","content":"3. 值得收藏的 Eureka 控制台详解"}],["meta",{"property":"og:description","content":"3. 值得收藏的 Eureka 控制台详解 转载自悟空聊架构，原文链接：值得收藏的 Eureka 控制台详解 本篇将会给大家讲解我在本地搭建的 Eureka 集群环境下，Eureka 控制台的参数说明。 系统状态 首先就得进入 Eureka 控制台页面，本地可以通过访问 http://localhost:8762/ 打开。 最上面的是 System S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cloud.braumace.cn/f/RRLtg/3_1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-25T12:31:37.000Z"}],["meta",{"property":"article:author","content":"BraumAce"}],["meta",{"property":"article:tag","content":"SpringCloud"}],["meta",{"property":"article:published_time","content":"2024-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-25T12:31:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3. 值得收藏的 Eureka 控制台详解\\",\\"image\\":[\\"https://cloud.braumace.cn/f/RRLtg/3_1.png\\",\\"https://cloud.braumace.cn/f/zO0hy/3_2.png\\",\\"https://cloud.braumace.cn/f/6KVfw/3_3.png\\",\\"https://cloud.braumace.cn/f/aVyso/3_4.png\\",\\"https://cloud.braumace.cn/f/YQwF8/3_5.png\\",\\"https://cloud.braumace.cn/f/m2Df1/3_6.png\\",\\"https://cloud.braumace.cn/f/V2ytN/3_7.png\\",\\"https://cloud.braumace.cn/f/eL5u5/3_8.png\\",\\"https://cloud.braumace.cn/f/7e3T9/3_9.png\\",\\"https://cloud.braumace.cn/f/3jrUr/3_10.png\\"],\\"datePublished\\":\\"2024-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-25T12:31:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BraumAce\\",\\"url\\":\\"https://blog.braumace.cn/article\\"}]}"]]},"headers":[{"level":2,"title":"系统状态","slug":"系统状态","link":"#系统状态","children":[]},{"level":2,"title":"自我保护机制","slug":"自我保护机制","link":"#自我保护机制","children":[]},{"level":2,"title":"集群信息","slug":"集群信息","link":"#集群信息","children":[]},{"level":2,"title":"已注册的实例列表","slug":"已注册的实例列表","link":"#已注册的实例列表","children":[]},{"level":2,"title":"通用信息","slug":"通用信息","link":"#通用信息","children":[]},{"level":2,"title":"服务实例信息","slug":"服务实例信息","link":"#服务实例信息","children":[]},{"level":2,"title":"最近 1000 个取消的租约","slug":"最近-1000-个取消的租约","link":"#最近-1000-个取消的租约","children":[]}],"git":{"createdTime":1724589097000,"updatedTime":1724589097000,"contributors":[{"name":"BraumAce","email":"1693717911@qq.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1060},"filePathRelative":"framework/spring-cloud/源码剖析/3. 值得收藏的 Eureka 控制台详解.md","localizedDate":"2024年5月17日","excerpt":"\\n<blockquote>\\n<p>转载自<strong>悟空聊架构</strong>，原文链接：<a href=\\"https://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&amp;mid=2451959513&amp;idx=1&amp;sn=4d400f00c182f2ddf3f38acc5db2e73b&amp;chksm=8d1c1746ba6b9e50f01b8e99491715813e58da3c22fc8499c191c7c8876d5ef26af7ae303078&amp;scene=21#wechat_redirect\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">值得收藏的 Eureka 控制台详解</a></p>\\n</blockquote>","autoDesc":true}');export{g as comp,d as data};
