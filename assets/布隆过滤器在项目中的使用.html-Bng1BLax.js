import{_ as t,c as p,b as s,g as n,d as m,e,o as l}from"./app-6rG1MfjW.js";const o={};function i(r,a){return l(),p("div",null,[a[0]||(a[0]=s("h1",{id:"布隆过滤器在项目中的使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#布隆过滤器在项目中的使用"},[s("span",null,"布隆过滤器在项目中的使用")])],-1)),a[1]||(a[1]=s("p",null,[n("使用 "),s("strong",null,"布隆过滤器"),n(" 快速判断某个元素是否在集合中出现了，可以用于解决 "),s("strong",null,"缓存穿透"),n(" 的问题。")],-1)),m(" more "),a[2]||(a[2]=e('<p>布隆过滤器提供一组 <strong>哈希函数 h1, h2, ..., hk</strong>，对需要存储的数据使用哈希函数计算得到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 个哈希值，将 <code>BitMap</code> 中这 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 个位置都设置为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，如果这 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 个位置都是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，则 <strong>可能</strong> 在集合中，但是如果都不是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，则 <strong>一定不在</strong> 集合中。</p><p>因此布隆过滤器会出现 <strong>误判</strong> 问题，可能将不在集合中的元素判断为在集合中，解决方法之一是可以通过 <strong>增加数组长度</strong> 来降低误判率。</p><p><strong>缓存穿透：</strong> 请求的数据在数据库中不存在，因此数据也不会在缓存中，每次请求都不会命中缓存，而是打到数据库上，也就是直接穿过缓存打到数据库中，导致数据库压力很大甚至崩溃，这就是缓存穿透。</p><p>那么缓存穿透的话，可以使用 Redis 的 <strong>布隆过滤器</strong> 来解决：下载 <strong>RedisBloom</strong> 插件，该插件是 Redis 的布隆过滤器模块，下载之后在 Redis 的 conf 文件中配置之后即可使用</p><p>具体解决缓存穿透的场景，比如： <strong>用户注册场景</strong> ，如果系统用户量很大，在用户注册的时候，需要判断用户的用户名是否重复，初始将用户名的信息都初始化在布隆过滤器中，那么在用户注册时，先去布隆过滤器中快速进行判断用户名是否已经被使用，如果经过 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 次哈希计算发现这 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 次哈希值的位置上都为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，说明 <strong>该用户名可能已经被使用了</strong> ，用户注册用户名重复的话，大不了就换一个用户名就好了，这种情况是可以容忍的，之后用户注册成功之后，再将注册成功的用户名也放入的布隆过滤器中，这样在 <strong>用户注册时可以通过布隆过滤器快速判断用户名是否重复</strong>。</p><p>上边说了布隆过滤器可能存在 <strong>误判</strong> 的情况，误判是可以容忍的，但是布隆过滤器解决缓存穿透还存在另外一个缺点：<strong>无法删除元素</strong>。</p><p><strong>无法删除元素</strong> 会导致如果用户注销帐号了，那么该用户名是无法从布隆过滤器中删除的，因此会导致其他用户也无法注册这个用户名，可以考虑再添加一层 <strong>Redis 缓存</strong> 来存储已经注销的用户名，同时如果注销的用户名较多的话，可能存在 <strong>大 key 问题</strong> ，可以考虑分片存储来解决。</p><p>这里总结一下如何通过 <strong>布隆过滤器解决缓存穿透：</strong></p><p>首先将用户名都初始化在布隆过滤器中，用户注册的时候通过 <strong>布隆过滤器</strong> 快速判断该用户名是否已经被使用了，系统可以容忍一定的误判率，对于布隆过滤器无法删除元素这个缺点，添加一层 Redis 缓存，将已经注销的用户名放在这个 Redis 中的 <code>set</code> 里，这样就可以解决布隆过滤器无法删除元素的缺点了，不过如果注销用户名多了，可能会存在大 key 问题，因此要考虑 <strong>分片存储</strong> 解决大 key 问题，也可以从业务角度上，限制每个用户注销的次数。</p><figure><img src="https://cloud.braumace.cn/f/7j7t9/布隆过滤器解决缓存穿透.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>最后再说一下布隆过滤器中容量的计算：</strong></p><p>先说一下各个参数的含义：</p><ul><li><strong>m：</strong> 布隆过滤器中二进制 <code>bit</code> 数组的长度</li><li><strong>n：</strong> 需要对多少个元素进行存储，比如说我们要存储 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1000</mn></mrow><annotation encoding="application/x-tex">1000</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1000</span></span></span></span> 万个用户名，那么 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding="application/x-tex">n = 1000</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1000</span></span></span></span> 万</li><li><strong>p：</strong> 期望的误判率，可以设置 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo>=</mo><mn>0.001</mn><mo stretchy="false">(</mo><mn>0.1</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p = 0.001(0.1\\%)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.001</span><span class="mopen">(</span><span class="mord">0.1%</span><span class="mclose">)</span></span></span></span> 或者 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo>=</mo><mn>0.0001</mn><mo stretchy="false">(</mo><mn>0.01</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p = 0.0001(0.01\\%)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.0001</span><span class="mopen">(</span><span class="mord">0.01%</span><span class="mclose">)</span></span></span></span></li></ul><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo>×</mo><mi>l</mi><mi>n</mi><mi>p</mi></mrow><mrow><mo stretchy="false">(</mo><mi>l</mi><mi>n</mi><mn>2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex"> m = \\frac{n × lnp}{(ln2)^2} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3074em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">n</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">n</span><span class="mord mathnormal">p</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>将 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> 带入上述公式即可计算出来理想情况下布隆过滤器的二进制数组的长度，也可以根据此公式算出来存储这么多元素大概需要占用多少内存空间，比如需要存储 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>10</mn></mrow><annotation encoding="application/x-tex">10</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span></span></span></span> 亿个用户名，期望误判率为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0.001</mn></mrow><annotation encoding="application/x-tex">0.001</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.001</span></span></span></span>，也就是将 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding="application/x-tex">n = 10</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span></span></span></span> 亿、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo>=</mo><mn>0.001</mn></mrow><annotation encoding="application/x-tex">p = 0.001</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.001</span></span></span></span> 带入，得到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> 约为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.67</mn><mi>G</mi><mi>B</mi></mrow><annotation encoding="application/x-tex">1.67GB</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">1.67</span><span class="mord mathnormal" style="margin-right:0.05017em;">GB</span></span></span></span> ，因此这个布隆过滤器大约占用 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.67</mn><mi>G</mi><mi>B</mi></mrow><annotation encoding="application/x-tex">1.67GB</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">1.67</span><span class="mord mathnormal" style="margin-right:0.05017em;">GB</span></span></span></span> 的空间（可以搜索在线布隆过滤器容量计算）</p>',15))])}const h=t(o,[["render",i],["__file","布隆过滤器在项目中的使用.html.vue"]]),g=JSON.parse('{"path":"/open-source-project/user-match/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"布隆过滤器在项目中的使用","lang":"zh-CN","frontmatter":{"category":["项目"],"tag":["用户匹配系统","布隆过滤器"],"description":"使用 布隆过滤器 快速判断某个元素是否在集合中出现了，可以用于解决 缓存穿透 的问题。","head":[["meta",{"property":"og:url","content":"https://blog.braumace.cn/ByteLighting/open-source-project/user-match/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"ByteLighting"}],["meta",{"property":"og:title","content":"布隆过滤器在项目中的使用"}],["meta",{"property":"og:description","content":"使用 布隆过滤器 快速判断某个元素是否在集合中出现了，可以用于解决 缓存穿透 的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cloud.braumace.cn/f/7j7t9/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E8%A7%A3%E5%86%B3%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-05T12:57:18.000Z"}],["meta",{"property":"article:tag","content":"用户匹配系统"}],["meta",{"property":"article:tag","content":"布隆过滤器"}],["meta",{"property":"article:modified_time","content":"2024-10-05T12:57:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布隆过滤器在项目中的使用\\",\\"image\\":[\\"https://cloud.braumace.cn/f/7j7t9/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E8%A7%A3%E5%86%B3%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.png\\"],\\"dateModified\\":\\"2024-10-05T12:57:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BraumAce\\",\\"url\\":\\"https://blog.braumace.cn/article\\"}]}"]]},"headers":[],"git":{"createdTime":1723643050000,"updatedTime":1728133038000,"contributors":[{"name":"BraumAce","email":"1693717911@qq.com","commits":2}]},"readingTime":{"minutes":4.05,"words":1214},"filePathRelative":"open-source-project/user-match/布隆过滤器在项目中的使用.md","localizedDate":"2024年8月14日","excerpt":"\\n<p>使用&nbsp;<strong>布隆过滤器</strong>&nbsp;快速判断某个元素是否在集合中出现了，可以用于解决&nbsp;<strong>缓存穿透</strong>&nbsp;的问题。</p>\\n","autoDesc":true}');export{h as comp,g as data};
