import{_ as n,c as o,a,b as i,g as e,e as s,f as l,d as m,r as p,o as y}from"./app-BS0W_W_c.js";const c={};function d(g,t){const r=p("RouteLink");return y(),o("div",null,[t[5]||(t[5]=a("h1",{id:"并发容器之-copyonwritearraylist",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#并发容器之-copyonwritearraylist"},[a("span",null,"并发容器之 CopyOnWriteArrayList")])],-1)),i(" more "),t[6]||(t[6]=a("h2",{id:"_1-copyonwritearraylist-简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-copyonwritearraylist-简介"},[a("span",null,"1. CopyOnWriteArrayList 简介")])],-1)),t[7]||(t[7]=a("p",null,[e("Java 学习者都清楚 ArrayList 并不是线程安全的，在读线程在读取 ArrayList 的时候如果有写线程在写数据，基于 fast-fail 机制，会抛出 ConcurrentModificationException 异常，也就是说 ArrayList 并不是一个线程安全的容器，当然我们可以用 Vector，或者用 Collections 的静态方法将 ArrayList 包装成一个线程安全的类，但是这些方式都是采用 Java 关键字 "),a("code",null,"synchronzied"),e(" 对方法进行修饰，利用独占式锁来保证线程安全的。但是，由于独占式锁在同一时刻只有一个线程能够获取到对象监视器，很显然这种方式效率并不是太高。")],-1)),t[8]||(t[8]=a("p",null,[e("回到业务场景中，有很多业务往往是读多写少的，比如系统配置的信息，除了在初始进行系统配置的时候需要写入数据，其他大部分时刻其他模块之后对系统信息只需要进行读取，又比如白名单，黑名单等配置，只需要读取名单配置然后检测当前用户是否在该配置范围以内。类似的还有很多业务场景，它们都是属于"),a("strong",null,"读多写少"),e("的场景。")],-1)),a("p",null,[t[1]||(t[1]=e("如果在这种情况用到上述的方法，使用 Vector，Collections 转换的这些方式是不合理的，因为尽管多个读线程从同一个数据容器中读取数据，但是读线程对数据容器的数据并不会发生发生修改。自然而然的我们会想到 ReenTrantReadWriteLock（关于读写锁可以看")),s(r,{to:"/computer/language/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/11.%20%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E8%AF%BB%E5%86%99%E9%94%81ReentrantReadWriteLock.html"},{default:l(()=>t[0]||(t[0]=[e("这篇文章")])),_:1}),t[2]||(t[2]=e("），通过")),t[3]||(t[3]=a("strong",null,"读写分离",-1)),t[4]||(t[4]=e("的思想，使得读读之间不会阻塞，无疑如果一个 list 能够做到被多个读线程读取的话，性能会大大提升。但是，如果仅仅是将 list 通过读写锁（ReentrantReadWriteLock）进行再一次封装的话，由于读写锁的特性，当写锁被写线程获取后，读写线程都会被阻塞。所以如果仅使用读写锁对 list 进行封装的话，仍然存在读线程在读数据的时候被阻塞的情况，如果想 list 的读效率更高的话，这里就是我们的突破口，如果我们保证读线程无论什么时候都不被阻塞，效率岂不是会更高？"))]),t[9]||(t[9]=m('<p>于是乎，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi><mi>o</mi><mi>u</mi><mi>g</mi><mtext> </mtext><mi>L</mi><mi>e</mi><mi>a</mi></mrow><annotation encoding="application/x-tex">Doug \\ Lea</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">Do</span><span class="mord mathnormal" style="margin-right:0.03588em;">ug</span><span class="mspace"> </span><span class="mord mathnormal">L</span><span class="mord mathnormal">e</span><span class="mord mathnormal">a</span></span></span></span> 大师为我们提供了 CopyOnWriteArrayList 容器可以保证线程安全，保证读读之间在任何时候都不会被阻塞，CopyOnWriteArrayList 也被广泛应用于很多业务场景之中，值得好好认识一番。</p>',1))])}const B=n(c,[["render",d],["__file","16. 并发容器之CopyOnWriteArrayList.html.vue"]]),E=JSON.parse('{"path":"/computer/language/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/16.%20%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BCopyOnWriteArrayList.html","title":"并发容器之 CopyOnWriteArrayList","lang":"zh-CN","frontmatter":{"category":["并发编程"],"tag":["JUC"],"head":[["meta",{"property":"og:url","content":"https://blog.braumace.cn/ByteLighting/computer/language/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/16.%20%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BCopyOnWriteArrayList.html"}],["meta",{"property":"og:site_name","content":"ByteLighting"}],["meta",{"property":"og:title","content":"并发容器之 CopyOnWriteArrayList"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T14:19:08.000Z"}],["meta",{"property":"article:tag","content":"JUC"}],["meta",{"property":"article:modified_time","content":"2024-10-25T14:19:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发容器之 CopyOnWriteArrayList\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-25T14:19:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BraumAce\\",\\"url\\":\\"https://blog.braumace.cn/article\\"}]}"]]},"headers":[{"level":2,"title":"1. CopyOnWriteArrayList 简介","slug":"_1-copyonwritearraylist-简介","link":"#_1-copyonwritearraylist-简介","children":[]}],"git":{"createdTime":1729865948000,"updatedTime":1729865948000,"contributors":[{"name":"BraumAce","email":"1693717911@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"computer/language/java/JUC 并发编程/16. 并发容器之CopyOnWriteArrayList.md","localizedDate":"2024年10月25日","excerpt":"\\n"}');export{B as comp,E as data};
