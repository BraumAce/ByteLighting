---
url: 'https://blog.bytelighting.cn/domains/algorithms/for-offer/tongcheng-0924.md'
---
# 同程旅行笔试 - 0924

两道编程题 $50$ 分，都非常简单，但前面的选择题有一定难度，考了很多多线程和操作系统方面的知识，希望能进面。

## 小红的方案数

::: info 题面

小红想构造一个大小为 $n$ 的数组，满足第奇数个元素都是奇数，第偶数个元素都是偶数（即和它的序偶性相同，数组下标从 $1$ 开始计算）。且每个元素都在区间 `[1, m]` 内。

小红想知道一共有多少种不同的方案？答案请对 $10^9 + 7$ 取模。

输入描述：\
第一行两个正整数 $n, m$\
$1 \leq n, m \leq 10^6$

输出描述：
输出一个数，代表构造的方案数对 $10^9 + 7$ 取模的值。

示例：

```
输入：3 3
输出：4
```

:::

**思路与代码**

1. 先确定奇数和偶数的数量：
   * 如果 $n$ 是奇数，则数组中有 $\frac{n + 1}{2}$ 个奇数和 $\frac{n - 1}{2}$ 个偶数。
   * 如果 $n$ 是偶数，则数组中有 $\frac{n}{2}$ 个奇数和 $\frac{n}{2}$ 个偶数。

2. 再计算奇数和偶数的可选数量：

   * 在区间 `[1, m]` 内，奇数的数量为 $\frac{m + 1}{2}$。
   * 在区间 `[1, m]` 内，偶数的数量为 $\frac{m}{2}$。

3. 最后计算总的方案数：

   * 对于每个奇数位置，有 $\frac{m + 1}{2}$ 种选择。
   * 对于每个偶数位置，有 $\frac{m}{2}$ 种选择。
   * 总的方案数为 $(\frac{m + 1}{2})$ ^ 奇数数量 $×$ $(\frac{m}{2})$ ^ 偶数数量。

注意每次运算都需要取模。

```java
import java.util.*;

public class Main {
    private static final long mod = 1000000007;

    private static long qmi(long x, int n) {
        long res = 1;
        while (n > 0) {
            if ((n & 1) == 1) {
                res = res * x % mod;
            }
            x = x * x % mod;
            n >>= 1;
        }

        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        int oddCount = (n + 1) / 2;
        int evenCount = n / 2;

        long oddChoices = (m + 1) / 2;
        long evenChoices = m / 2;

        long res = qmi(oddChoices, oddCount) * qmi(evenChoices, evenCount) % mod;

        System.out.println(res);
    }
}
```

## 小红的密码

::: info 题面

小红准备在一个网站注册一批账号和密码。已知当小红进行注册时，该网站会给出以下提示：

1. 用户名为 $6$ ~ $12$ 的字符串，且必须全部由英文字母（大小写均可）组成。
2. 用户名必须没有被注册过。

小红想知道，自己每次操作会得到什么样的返回？

输入描述：\
第一行输入一个正整数 $t$，代表小红的注册次数。\
之后每行输入一个长度不超过 $20$ 的字符串(字符串不含空格)，代表小红的操作。\
数据范围：\
$1 ≤ t ≤ 10^5$

输出描述：\
对于每次注册：\
若账号长度不合法，则输出 "illegal length"\
若账号长度合法但出现了英文字母以外的字符，则输出 "illegal character"\
若该账号合法但已经被注册过，则输出 "account existed"\
若注册成功，则输出  "registration complete"

示例：

```
输入：4
      abcdef
      abc
      abcdef
      abcd2f
输出：registration complete
      illegal length
      account existed
      illegal character
```

:::

**思路与代码**

直接模拟即可。

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();

        Set<String> registeredAccounts = new HashSet<>();
        for (int i = 0; i < t; i++) {
            String account = sc.nextLine();
            if (account.length() < 6 || account.length() > 12) {
                System.out.println("illegal length");
            } else if (!account.matches("[a-zA-Z]+")) {
                System.out.println("illegal character");
            } else if (registeredAccounts.contains(account)) {
                System.out.println("account existed");
            } else {
                registeredAccounts.add(account);
                System.out.println("registration complete");
            }
        }
    }
}
```
