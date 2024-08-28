---
date: 2024-08-18
category: 
- hot100
- 数据结构
tag: 
- 链表
- 双指针
---

# 删除链表的倒数第N个节点

<!-- more -->

[19.删除链表的倒数第N个节点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-100-liked)

## 题意

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

## 思路

链表无法像数组那样直接通过索引来获取元素，如果是顺数第 `n` 个结点，那直接循环判断即可。但题目要求倒数第 `n` 个结点，在不知道链表长度的情况下，如果快速地删除指定结点并返回头结点呢？

答案就是使用双指针中的 `快慢指针`。

要删除倒数第 `n` 个结点，就要获得倒数第 `n + 1` 个结点的引用。

整体思路就是让快指针先移动 `n` 步，然后两个指针同时移动，当快指针移动到末尾时，慢指针就指向倒数第 `n + 1` 个结点。这样，只遍历了一次链表，就获得了倒数第 `n` 个节点 `left`。

先要在链表头部接一个虚拟结点 `dummy`，为了避免删除倒数第一个元素时出现空指针异常，在头部加入 `dummy` 结点并不影响尾部倒数第 `n` 个元素是什么。

1. 我们先让快指针 `right` 指向链表的头结点 `head`，然后走 `n` 步：

2. 用慢指针指针 `right` 指向链表头结点 `head`：

3. 之后 `left` 和 `right` 同时向前走，此时二者的距离为 `n`，到 `right` 到尾部时，`left` 的位置恰好是倒数第 `n + 1` 个结点；

4. 因为要删除该结点，所以要移动到该结点的前一个才能删除，所以循环条件为 `right.next != null`

5. 删除后返回 `dummy.next`，保证在 `n = 1` 的情况下也能正常返回。

## 代码

```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // 由于可能会删除链表头部，用哨兵节点简化代码
        ListNode dummy = new ListNode(0, head);
        ListNode left = dummy, right = dummy;
        while (n-- > 0) {
            right = right.next; // 右指针先向右走 n 步
        }
        while (right.next != null) {
            left = left.next;
            right = right.next; // 左右指针一起走
        }
        left.next = left.next.next; // 左指针的下一个节点就是倒数第 n 个节点
        return dummy.next;
    }
}
```
