---
date: 2024-08-11
category: 
- hot100
- 数据结构
tag: 
- 二叉树
- 递归
- 前缀和
- 哈希
---

# 路径总和 III

<!-- more -->

[437.路径总和 III](https://leetcode.cn/problems/path-sum-iii/description/?envType=study-plan-v2&envId=top-100-liked)

## 题意

给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。

**路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

## 思路

运用前缀和的思想，前缀和相当于从根节点开始的路径元素和。对二叉树进行递归遍历，同时用哈希表 `cnt` 统计从根节点到当前节点的路径上各个前缀和出现的次数。当我们递归到节点 `node` 时，设从根到 `node` 的路径元素和为 `s`，那么就找到了 `cnt[s − targetSum]` 个符合要求的路径，加入答案。

设计递归函数 $dfs(node, s)$，表示当前遍历到的节点为 `node`，从根节点到当前节点的路径上的前缀和为 `s`。函数的返回值是统计以 `node` 节点及其子树节点作为路径终点且路径和为 `targetSum` 的路径数目。那么答案就是 $dfs(root, 0)$。

## 代码

```java
class Solution {
    int targetSum;
    Map<Long, Integer> cnt = new HashMap<>();

    int dfs(TreeNode root, long s){
        if (root == null) return 0;

        s += root.val;
        int ans = cnt.getOrDefault(s - targetSum, 0);
        cnt.merge(s, 1, Integer::sum);
        ans += dfs(root.left, s);
        ans += dfs(root.right, s);
        cnt.merge(s, -1, Integer::sum);

        return ans;

    }

    public int pathSum(TreeNode root, int targetSum) {
        cnt.put(0L, 1);
        this.targetSum = targetSum;
        return dfs(root, 0);
    }
}
```
