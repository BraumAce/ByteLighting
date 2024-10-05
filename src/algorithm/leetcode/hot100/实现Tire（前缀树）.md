---
category: 
- hot100
- 图论
tag: 
- 字典树
---

# 实现 Trie（前缀树）

<!-- more -->

[208.实现Trie（前缀树）](https://leetcode.cn/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=top-100-liked)

## 题意

<font color="#2980b9">Trie</font>（发音类似 "try"）或者说 **前缀树** 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word` 。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false` 。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix` ，返回 `true` ；否则，返回 `false` 。

## 思路

基于前缀树结构，**每一层的节点并不是直接存储了某个字符，而是记录这一层节点对应字符串的位置是否出现了某个字符**。比如根节点就是记录了字符串首个位置，第二层节点就是记录了字符串索引 `1` 的位置。

![树的结构](https://pic.leetcode.cn/1709344595-HaJKeO-image-20240302095546093.png)

我们可以将每一个字符串存储到树中，并且对于**相同前缀只存储一次**「从根节点出发到任一个节点都是一个前缀」。对于每个加入的字符串我们一定能在树中找到一条路径还原它。

**初始化：**

因为字符串中只存在小写字母，因此每个节点最多有 26 个子节点。

- 使用 `children[26]` 的列表存储当前节点对应出现过的字符的子节点。
- 使用布尔字段 `isEnd`，表示该节点是否为字符串的结尾。

::: tip isEnd

如果要查找一个完整的字符串，当我们找到时，我们如何知道找到的这部分是一个完整的字符串还是某个字符串的前缀呢？

因此我们对每个节点引入一个标志 `isEnd` 标记当前节点对应一个完整字符串，我们在插入字符串的时候将最后一个字符对应的节点的标志位置为 `True`。

当我们查找一个完整字符串时，既要能找到对应的节点，同时节点的标志位还必须为 `true`。

:::

**插入字符串：**

假设当前节点为 `node`，当前要加入的字符为 `ch`：

- 如果当前节点 `node` 的子节点列表中，`ch` 位置没有节点，则新建一个节点
- 然后更新 `node` 为子节点，加入下一个字符
- `node` 初始为前缀树的根节点 `root`

**查找前缀：**

假设当前节点为 `node`，当前要查找的字符为 `ch`：

- 如果当前节点 `node` 的子节点列表中，`ch` 位置没有节点，说明这个字符没有匹配上，前缀不存在退出查找
- 否则更新 `node` 为子节点，寻找下一个字符
- `node` 初始为前缀树的根节点 `root`


## 代码

```java
class Trie {
    private Trie[] children;     // 子节点列表
    private boolean isEnd;       // 标记是否尾节点

    public Trie() {
        children = new Trie[26];
        isEnd = false;
    }
    
    public void insert(String word) {
        Trie node = this;      // 从根节点开始构造这个word对应的路径节点
        int n = word.length();
        for (int i = 0; i < n; i++){
            // 将当前字符添加到当前节点对应的子节点位置，然后递归更新
            int idx = word.charAt(i) - 'a'; 
            if (node.children[idx] == null){
                node.children[idx] = new Trie();
            }
            node = node.children[idx];
        }
        node.isEnd = true;  // 最后一个节点的isEnd置为true，表示一个完整的字符串
    }
    
    public boolean search(String word) {
        Trie node = searchPrefix(word);

        // 返回不为空且节点标记为尾节点，则包含word这个完整的字符串
        return node != null && node.isEnd;  
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;  // 返回不为空，则包含了prefix前缀
    }

    // 查找字典树是否包含word前缀
    private Trie searchPrefix(String word) {
        Trie node = this;  // 从根节点依次开始匹配每个字符
        int n = word.length();
        for (int i = 0; i < n; i++){
            int idx = word.charAt(i) - 'a'; 
            node = node.children[idx];  // 根据当前字符获取对应的子节点
            if (node == null){
                return null;     // 只要当前节点为空，则不包含这个字符串，直接返回空指针
            }
        }
        return node;    // 否则匹配成功返回node
    }
}
```
