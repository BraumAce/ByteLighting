---
category: 
- hot100
- 数据结构
tag: 
- 链表
- 优先队列
---

# 合并 K 个升序链表

<!-- more -->

[23.合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked)

## 题意

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

## 思路一：优先队列

合并后的第一个节点 `first`，一定是某个链表的头节点（因为链表已按升序排列）。

合并后的第二个节点，可能是某个链表的头节点，也可能是 `first `的下一个节点。

例如有三个链表 `1->2->5, 3->4->6, 4->5->6`，找到第一个节点 `1` 之后，第二个节点不是另一个链表的头节点，而是节点 `1` 的下一个节点 `2`。

按照这个过程继续思考，每当我们找到一个节点值最小的节点 `x`，就把节点 `x.next` 加入「可能是最小节点」的集合中。

因此，我们需要一个数据结构，它支持：

- 从数据结构中找到并移除最小节点。
- 插入节点。

这可以用 **最小堆** 实现。

初始把所有链表的头节点入堆，然后不断弹出堆中最小节点 `x`，如果 `x.next` 不为空就加入堆中，循环直到堆为空。把弹出的节点按顺序接在链表后面，返回链表即可。

**代码：**

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) 
            return null;
        
        // 虚拟头结点
        ListNode dummy = new ListNode(-1);
        ListNode p = dummy;
        
        // 优先级队列，最小堆
        PriorityQueue<ListNode> pq = new PriorityQueue<>(
            lists.length, (a, b)->(a.val - b.val));
        
        // 将 k 个链表的头结点加入最小堆
        for (ListNode head : lists) {
            if (head != null)
                pq.add(head);
        }

        while (!pq.isEmpty()) {
            // 获取最小节点，接到结果链表中
            ListNode node = pq.poll();
            p.next = node;
            if (node.next != null) {
                pq.add(node.next);
            }
            // p 指针不断前进
            p = p.next;
        }

        return dummy.next;
    }
}
```

## 思路二：分治



