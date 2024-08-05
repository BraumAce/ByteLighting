---
date: 2024-06-21
category: 
- 笔记
- 图论
tag: 
- DFS
---

# DFS之岛屿问题

三种岛屿问题的 DFS 模板：1.岛屿数量，2.封闭岛屿的树木，3.岛屿的最大面积

<!-- more -->

本文主要针对常见的岛屿问题，总结出相应的 DFS 模板，在面对具体题目时，只需要稍加修改即可。

## 岛屿数量

输入一个二维数组，其中 `0` 代表海水，`1` 代表陆地，且每座岛屿只能由上下左右四个方向相连的陆地组成。为搜索方便，可定义方向数组来进行遍历，如下所示：

```cpp
int dx[4] = {1, 0, -1, 0}; //横轴x方向
int dy[4] = {0, 1, 0, -1}; //纵轴y方向
```

通常来说，都是上下左右四个方向，但某些题目会描述为“四周环绕”或“水平、垂直、对角线上相邻”，那么就需要搜索八个方向。那么对应的方向数组也需要做出改变：

```cpp
int dx[8] = {1, 1, 0, -1, -1, -1, 0, 1};
int dy[8] = {0, 1, 1, 1, 0, -1, -1, -1};
```

大多数 DFS 中会使用一个标记数组 `vis[][]`（初始化数组元素为 $0$ ，将走过的元素标记为 $1$ ）来记录搜索过的元素，但对于 “岛屿数量” 这种单纯的题型，一种更简洁的写法是将走过的陆地都给 “淹” 了，将其赋值为海水，避免维护 `vis` 数组，更省事。

以 [200.岛屿数量](https://leetcode.cn/problems/number-of-islands/description/) 为例，完整 C++ 代码如下：

```cpp
#include <bits/stdc++.h>
#define N 1010    //定义地图范围，为防止数组越界，通常比所给数据范围大一点
using namespace std;

int n, m, cnt;   //定义行、列、岛屿数量
char mp[N][N];   //题中所给数据大多都是字符，所以常常定义字符数组

void dfs(int x, int y){
    if (x < 0 || y < 0 || x >= n || y >= m ){
        //若超出地图边界，则返回
        return;
    }
    if (mp[x][y] == '0'){
        //若已经是海水了，则也返回
        return;
    }

    //将搜索过的mp[x][y]淹了变成海水
    mp[x][y] = '0';

    //定义方向数组，用来遍历上下左右四个方向
    int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};
    for (int i = 0; i < 4; i++){
        int xx = x + dx[i], yy = y + dy[i];
        dfs(xx, yy);     //递归
    }
}

int main(){
    cin >> n >> m;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            cin >> mp[i][j];
        }
    }

    //初始化岛屿数量为0
    cnt = 0;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            if (mp[i][j] == '1'){
                cnt++;
                dfs(i, j);
            }
        }
    }

    //最后输出岛屿的数量
    cout << cnt << endl;

    return 0;
```

## 封闭岛屿数量

与上题类似，同理输入一个二维数组，其中 `0` 代表海水，`1` 代表陆地，且每座岛屿只能由上下左右四个方向相连的陆地组成。

所谓 “封闭岛屿” ，就是上下左右全部被海水包围，靠边的陆地不算作封闭岛屿，所以我们可以先将地图边界的陆地 “淹” 了，搜索并将其赋值为海水。

以 [1254.统计封闭岛屿的数目](https://leetcode-cn.com/problems/number-of-closed-islands/) 为例，不同的是它是⽤ `0` 表示陆地，⽤ `1` 表示海⽔。这里我们仍然用 `0` 代表海水，`1` 代表陆地，完整 C++ 代码如下（重复的注释就不再赘述了）：

```cpp
#include <bits/stdc++.h>
using namespace std;
#define N 1010

int n, m, cnt;
char mp[N][N];

void dfs(int x, int y){
    if (x < 0 || y < 0 || x >= n || y >= m || mp[x][y] == '0'){
    	//越界，或已经是海水了则返回
        return;
    }

    //从（i，j）开始，将与之相邻的陆地都变成海水
    mp[x][y] = '0';

    //定义方向数组，用来遍历上下左右四个方向
    int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};
    for (int i = 0; i < 4; i++){
        int xx = x + dx[i], yy = y + dy[i];
        dfs(xx, yy);     //递归
    }
}

int main(){
    cin >> n >> m;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            cin >> mp[i][j];
        }
    }

    for (int i = 0; i < n; i++){
        dfs(i, 0);      //把靠左边的岛屿淹掉
        dfs(i, m - 1);  //把靠右边的岛屿淹掉
    }

    for (int j = 0; j < m; j++){
        dfs(0, j);      //把上边的岛屿淹掉
        dfs(n - 1, j);  //把下边的岛屿淹掉
    }

    //初始化岛屿数量为0
    cnt = 0;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            if (mp[i][j] == '1'){
                cnt++;        //每找到一个数量加一
                dfs(i, j);
            }
        }
    }

    //最后输出岛屿的数目
    cout << cnt << endl;

    return 0;
}
```

## 岛屿的最大面积

这种题的⼤体思路和之前完全⼀样，只不过 DFS 函数淹没岛屿的同时，还应该想办法记录这个岛屿的⾯积。
以 [695.岛屿的最大面积](https://leetcode-cn.com/problems/max-area-of-island/) 为例，完整 C++ 代码如下：

```cpp
#include <bits/stdc++.h>
using namespace std;
#define N 1010

int n, m;
char mp[N][N];

//淹没与（i，j）相邻的陆地，并返回淹没的陆地面积
int dfs(int x, int y){
    if (x < 0 || y < 0 || x >= n || y >= m || mp[x][y] == '0'){
        //超出地图边界，或已经是海水了
        return 0;
    }

    //每次都将面积加一
    //sum++;

    //将（i，j）变为海水
    mp[x][y] = '0';

    return dfs(x + 1, y) + dfs(x, y + 1)
         + dfs(x - 1, y) + dfs(x, y - 1) + 1;    //记得加上它本身
}

int main(){
    cin >> n >> m;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            cin >> mp[i][j];
        }
    }

    //记录岛屿的最大面积
    int res = 0;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            if (mp[i][j] == '1'){
                //淹没岛屿，并更新最大岛屿面积
                res = max(res, dfs(i, j));
            }
        }
    }

    //最后输出岛屿的最大面积
    cout << res << endl;

    return 0;
}
```

## 小结

以上就是本文的内容，三种常见的岛屿问题，当然还会有很多相关的岛屿变型题，但都是大同小异，大体的思路都是一样的，理解了本质就可以傻瓜式地套用模板。
