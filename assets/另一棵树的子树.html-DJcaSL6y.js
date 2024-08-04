import{_ as s,c as a,b as e,a as i,e as t,o as n}from"./app-BzwCdWnC.js";const l={},h=i("h1",{id:"另一棵树的子树",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#另一棵树的子树"},[i("span",null,"另一棵树的子树")])],-1),k=t(`<p><a href="https://leetcode.cn/problems/subtree-of-another-tree/description/" target="_blank" rel="noopener noreferrer">572.另一棵树的子树</a></p><h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意"><span>题意</span></a></h2><p>给你两棵二叉树 <code>root</code> 和 <code>subRoot</code> 。检验 <code>root</code> 中是否包含和 <code>subRoot</code> 具有相同结构和节点值的子树。如果存在，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>二叉树 <code>tree</code> 的一棵子树包括 <code>tree</code> 的某个节点和这个节点的所有后代节点。<code>tree</code> 也可以看做它自身的一棵子树。</p><h3 id="思路一" tabindex="-1"><a class="header-anchor" href="#思路一"><span>思路一</span></a></h3><p>直接递归判断:</p><ul><li>如果 <code>subRoot</code> 为空，则和叶节点的空子节点匹配，返回 <code>true</code></li><li>如果当前节点是空节点，无法与 <code>subRoot</code> 匹配，返回 <code>false。</code></li><li>如果当前节点与 <code>subRoot</code> 根节点相同，则递归往下判断，如果是相同的树，返回 <code>true。</code></li><li>否则，递归左右子树，看是否能找到匹配的，如果找到则返回 <code>true</code>。</li></ul><p><strong>代码:</strong></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSametree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> p </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> q;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">val</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">val</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">            &amp;&amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSametree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">            &amp;&amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSametree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSubtree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">TreeNode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> subRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (subRoot </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (root </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSametree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(root, subRoot) </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">            ||</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSubtree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, subRoot)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">            ||</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isSubtree</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, subRoot);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路二-优化" tabindex="-1"><a class="header-anchor" href="#思路二-优化"><span>思路二（优化）</span></a></h2><p><strong>只在高度相同时匹配</strong></p>`,11);function p(r,d){return n(),a("div",null,[h,e(" more "),k])}const B=s(l,[["render",p],["__file","另一棵树的子树.html.vue"]]),c=JSON.parse('{"path":"/algorithm/leetcode/%E5%8F%A6%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%AD%90%E6%A0%91.html","title":"另一棵树的子树","lang":"zh-CN","frontmatter":{"date":"2024-08-04T00:00:00.000Z","category":["数据结构"],"tag":["二叉树","递归"],"head":[["meta",{"property":"og:url","content":"https://blog.braumace.cn/ByteLighting/algorithm/leetcode/%E5%8F%A6%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%AD%90%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"ByteLighting"}],["meta",{"property":"og:title","content":"另一棵树的子树"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-04T08:25:34.000Z"}],["meta",{"property":"article:author","content":"BraumAce"}],["meta",{"property":"article:tag","content":"二叉树"}],["meta",{"property":"article:tag","content":"递归"}],["meta",{"property":"article:published_time","content":"2024-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-04T08:25:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"另一棵树的子树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-04T08:25:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BraumAce\\",\\"url\\":\\"https://blog.braumace.cn/article\\"}]}"]]},"headers":[{"level":2,"title":"题意","slug":"题意","link":"#题意","children":[{"level":3,"title":"思路一","slug":"思路一","link":"#思路一","children":[]}]},{"level":2,"title":"思路二（优化）","slug":"思路二-优化","link":"#思路二-优化","children":[]}],"git":{"createdTime":1722759934000,"updatedTime":1722759934000,"contributors":[{"name":"BraumAce","email":"1693717911@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"algorithm/leetcode/另一棵树的子树.md","localizedDate":"2024年8月4日","excerpt":"\\n"}');export{B as comp,c as data};
