---
date: 2024-06-23
category: 
- 笔记
- 图论
tag: 
- DFS
---

# DFS之迷宫问题

DFS 之迷宫问题：1.能否逃出迷宫，2.逃出迷宫的最短路径，3.缺口迷宫

<!-- more -->

本文仅使用 DFS 算法不断回溯来解决迷宫问题，不涉及利用 “栈” 、“队列” 等数据结构来解决问题。
针对于最普通的也是最常见的迷宫问题，总结出相应的模板，不过具体问题还得具体分析，理解之后方才能从容不迫，游刃有余。

## 能否逃出迷宫

最朴素的迷宫问题，通常给定一个 `n × m` 的二维字符数组作为迷宫，其中 `S` 表示起点，`#` 表示墙，无法通过，`.` 表示可走的路，`T` 表示出口，每次只能向上下左右四个方向移动。能逃出迷宫输出 `yes` ，否则输出 `no`.

逃出这种迷宫，有两个关键点：

- 一是：在 DFS 函数中判断能否找到出口，用一个布尔变量记录下来，找到则为真，找不到为假

- 二是：每次递归之后都要回溯，将标记数组重置为 `0`，如果没有重置，那等于说走过一次就不能走了，但实际上后面的搜索中可能还是要走这条路的。

这种题对于已访问的元素，我们不能像 “岛屿问题” 一样简单的把它给 “淹” 了，需要考虑回溯的问题，所以需要使用标记数组 `vis[][]` ，将已访问标记为 `1`，递归后再回溯，重置标记数组即可。

下面以 [计蒜客-T1595](https://nanti.jisuanke.com/t/T1595) 为例，判断能否逃出迷宫，完整 C++ 代码如下：

```cpp
#include <bits/stdc++.h>   //万能头文件
using namespace std;
const int N = 110;   //定义地图范围，范围开大一点防止数组越界
//#define N 1010      //用define定义的话后面不用加分号

int n, m, ans;   //ans用来标记是否找到出口
char mp[N][N];   //迷宫地图数组
int vis[N][N];   //标记数组

void dfs(int x, int y){
    if (mp[x][y] == 'T'){
        //如果找到了出口，标记为1，再返回
        ans = 1;
        return;
    }

	//定义方向数组
    int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};
    for (int i = 0; i < 4; i++){
        int xx = x + dx[i], yy = y + dy[i];
        
        //如果未越界，可走且未访问
        if (xx >= 0 && yy >= 0 && xx < n && yy < m &&
            (mp[xx][yy] == '.' || mp[xx][yy] == 'T') && !vis[xx][yy]){
            vis[xx][yy] = 1;    //标记为已访问
            dfs(xx, yy);        //递归继续搜索
            vis[xx][yy] = 0;    //递归搜索完成后回退，将已访问状态重置为未访问
        }
    }
}

int main(){
	//初始化输入数据
    cin >> n >> m;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            cin >> mp[i][j];
        }
    }

	//标记默认为0
    ans = 0;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            if (mp[i][j] == 'S'){
            	//找到了起点，开始搜索
                dfs(i, j);
            }
        }
    }

	//若ans为1，则为真，输出yes；若为0，则为假，输出no
    if (ans) cout << "yes" << endl;
    else cout << "no" << endl;

    return 0;
}
```

## 逃出迷宫的最短路径

与上题一样，唯一不同的是需要计算出每次逃出迷宫的路径，再进行比较得出最短路径。若无法逃出，则输出 `-1`.

以 [计蒜客-T1596](https://nanti.jisuanke.com/t/T1597) 为例，题中 `*` 为墙，`.` 为路，完整 C++ 代码如下：

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 110;

int n, m;
int sx, sy;     //定义起点坐标
int tx, ty;     //定义终点坐标
char mp[N][N];  //迷宫数组
int vis[N][N];  //标记数组
int minx;       //记录最短路径

void dfs(int x, int y, int step){
	//减枝，用来将之后多余的步数去掉
	if (step >= minx)
		return;
	
    //找到了终点，比较路径是否最短
    if (x == tx && y == ty){
        if (step < minx){
            minx = step;
        }
        return;
    }

    int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};
    for (int i = 0; i < 4; i++){
        int xx = x + dx[i], yy = y + dy[i];

        //若可走且未访问
        if (xx >= 0 && yy >= 0 && xx < n && yy < m &&
             (mp[xx][yy] == '.' || mp[xx][yy] == 'T') && vis[xx][yy] == 0){
            vis[xx][yy] = 1;        //标记为已访问
            dfs(xx, yy, step + 1);
            vis[xx][yy] = 0;        //递归搜索完成后回退，重置为未访问
        }
    }
}

int main(){
    minx = 9999;     //保证初始值足够大
    cin >> n >> m;
    for (int i = 0; i < n; i++){
         for (int j = 0; j < m; j++){
            cin >> mp[i][j];
            vis[i][j] = 0;
            //找到入口
            if (mp[i][j] == 'S'){
                sx = i;
                sy = j;
            }
            //找到出口
            if (mp[i][j] == 'T'){
                tx = i;
                ty = j;
            }
        }
    }

    //标记入口已走过
    vis[sx][sy] = 1;

    //开始搜索，初始步数为0
    dfs(sx, sy, 0);

    //输出结果
    if (minx == 9999)
        cout << "-1" << endl;
    else 
        cout << minx << endl;

    return 0;
```

## 缺口迷宫

所谓缺口迷宫，是指迷宫的出口在地图的边界，出口处不一定有像 `T`这样的出口符号，而是只有像 `.` 这样的路。

有些题只需要判断能不能逃出迷宫，有些题则在判断的同时需要计算出最短路径。

这里我们计算下最短路径，与第二种迷宫差不多，只需要将 DFS 函数中迷宫出口的判断条件稍加修改即可。

即将 `return` 条件由 `mp[x][y] == 'T'` 改为 `mp[x][y] == '.' && (x == 0 || y == 0 || x == n - 1 || y == m - 1)`.

以 [计蒜客-T1597](https://nanti.jisuanke.com/t/T1597) 为例，题中 `@` 为起点，`#` 为墙，`.` 为路，若无法逃出，则输出 `−1`，完整的 C++ 代码如下：

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 110;

int sx, sy;       //定义起点坐标
int n, m, minx;   //定义行、列、最短路径
char mp[N][N];    //迷宫数组
int vis[N][N];    //标记数组

void dfs(int x, int y, int step){
    //找到了位于边界上的出口，比较路径是否最短
    if (mp[x][y] == '.' && (x == 0 || y == 0 || x == n - 1 || y == m - 1)){
        if (step < minx){
            minx = step;
        }
        return;
    }

    int dx[4] = {1, 0, -1, 0};
    int dy[4] = {0, 1, 0, -1};
    for (int i = 0; i < 4; i++){
        int xx = x + dx[i], yy = y + dy[i];

        //若可走且未访问
        if (xx >= 0 && yy >= 0 && xx < n && yy < m && mp[xx][yy] == '.' && vis[xx][yy] == 0){
            vis[xx][yy] = 1;        //标记为已访问
            dfs(xx, yy, step + 1);
            vis[xx][yy] = 0;        //递归搜索完成后回退，重置为未访问
        }
    }
}

int main(){
    //初始化
    minx = 99999999;//保证初始值足够大
    cin >> n >> m;
    
    for (int i = 0; i < n; i++){
         for (int j = 0; j < m; j++){
            cin >> mp[i][j];
            //找到入口
            if (mp[i][j] == '@'){
                sx = i;
                sy = j;
            }
        }
    }

    //标记入口已走过
    vis[sx][sy] = 1;

    //开始搜索，初始步数为0
    dfs(sx, sy, 0);

    //输出结果
    if (minx == 99999999)
        cout << "-1" << endl;
    else 
        cout << minx << endl;

    return 0;
}
```

## 小结

当然，像这种迷宫问题，有很多种解法，这里展示的只是我个人总结下来的一些使用 DFS 递归解题的模板，多多少少也会有点不足。
