# Grid 网格布局
    - 根据屏幕的宽度改变列的数量，实现响应式布局
    - wrapper(父元素，网格)  items(子元素，网格里面的内容)
    - display: grid;  变成一个grid网格
    - grid-template-row  设置行
    - grid-template-column  设置列
    - 例如:
`grid-template-columns: 100px 100px 100px; 三个值即给出三列即对应的列宽`
`grid-template-rows: 50px 50px; 两个值即给出两行即对应的行高`
    - 在网格里面放置子元素
        子元素不会自动填满整个网格，多余格子依然放在那里
```
    .item1 {
        grid-column-start: 1;
        grid-column-end: 4;
        可以简写成 grid-column: 1/4;
    }
    表示item1占据从第一个格子到第四个格子开始的网格线
```
```
    .item3 {
        grid-row-start: 2;
        grid-row-end: 4;
    }
    行的占据
```

    - fr等分单位实现基本的响应式
```
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50px 50px;
    }
    将网格的宽度等分成三个等分，每个占据一个fr单位
```

    - repeat(想要的列数or行数, 指定它们的宽度)

    - auto-fit 自适应
        但永远得不到我们想要的灵活性，因为它们很少会加起来正好等于容器的宽度，所以网格通常会在右侧留下空白区域
```
    .container {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, 100px);
        grid-template-rows: repeat(2, 100px);
    }
    这里自适应列的数量，取代了固定数量
```

    - minmax() 为了解决网格通常会在右侧留下空白区域这个问题
        minmax() 函数定义大于或等于 min 且小于或等于 max 的大小范围
```
    .container {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-template-rows: repeat(2, 100px);
    }
    所以现在列的宽度至少 100px 。但是，如果有更多的可用空间，网格将简单地分配给每个列，因为列的值变成了一个等分单位 1fr ，而不是 100px
```

    - 添加图片 网格中添加图片
        object-fit: cover;  使图片覆盖整个容器，如果需要的话，浏览器会裁剪该图片。