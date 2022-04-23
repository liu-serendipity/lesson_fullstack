# 网页布局layout---Flex，弹性布局
- 任何容器都可以指定为Flex布局，行内元素也可以使用Flex布局
    ` display: flex; `
    ` display: inline-flex; `
- Webkit内核的浏览器必须加上 `-webkit`
    ` display: -webkit-flex; `
- 设为Flex布局后，子元素的`float、clear、vertical-align`属性将失效

- 使用Flex布局的元素--Flex容器（`flex container`)，它的所有子元素自动成为容器成员，称为 Flex 项目（`flex item`）

- 容器默认两根轴，水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。主轴的开始位置就是与框的交叉点，`mian start`，结束位置即`main end`；交叉轴的开始位置`cross start`，结束位置`cross end`。

- 项目默认沿主轴排列，单个项目的主轴空间叫做`main size`，交叉轴叫做`cross size`。

- 容器的属性：
    ```
        flex-direction
        flex-wrap
        flex-flow
        justify-content
        align-items
        align-content
    ```
## `justify-content` 属性值：
### 定义项目在主轴上的对齐方式，与轴的方向有关，假设主轴从左到右，则
- `flex-start:` 项目与容器的左侧对齐`（默认）`，左对齐
- `flex-end:` 项目与容器的右侧对齐，右对齐
- `center:` 项目在容器的中心对齐，居中
- `space-between:` 项目以相等的间距显示，两端对齐，项目之间的间隔相等
- `space-around:` 项目以相等的间距显示在它们周围，每个项目两侧的间隔相等，so项目之间的间隔比项目与边框的间隔大一倍

## `align-items` 属性值：  
### 项目在交叉轴上如何对齐，与交叉轴的方向有关，假设从上到下，则
- `flex-start:` 项目与容器的顶部对齐，交叉轴的起点对齐
- `flex-end:` 项目与容器的底部对齐，交叉轴的终点对齐
- `center:` 项目在容器的垂直中心对齐，交叉轴的中心对齐
- `baseline:` 项目显示在容器的基线处，项目的第一行文字的基线对齐
- `stretch:` 项目被拉伸以适应容器`（默认值）`，如果项目没有设置高度或auto，将占满整个容器的高度

## `flex-direction` 属性值：
### 决定主轴的方向（项目的排列方向）
- `row:` 项目的放置与文本方向相同，主轴为水平方向，起点在左端
- `row-reverse:` 项目放置在与文本方向相反的位置，主轴为水平方向，起点在右端
- `column:` 项目从上到下放置，主轴为垂直方向，起点在上沿
- `column-reverse:` 项目从下到上放置，主轴为垂直方向，起点在下沿

## `order` 属性：
### 定义项目的排列顺序，数值越小越靠前，默认为0
- 应用于单个项目，也可以使用此属性将其设置为正整数或负整数值（-2、-1、0、1、2）
- 例   `order：1;`

## `flex-wrap` 属性值：
### 项目默认都排在一条轴线上，该属性定义一条轴线排不下时如何换行
- `nowrap:` 每个项目都适合一行，（默认）不换行
- `wrap:` 项目环绕到其他行，换行，第一行在上方
- `wrap-reverse:` 项目反向环绕到其他行，换行，第一行在下方

## `flex-flow`,融合使用：
### 默认值为 `row nowrap`
- `flex-direction` 和 `flex-wrap` 这两个属性经常一起使用，便创建了简写属性 `flex-flow` 来组合它们，接受由空格分隔的两个属性值
- 例： `flex-flow: row wrap;` 

## `align-content` 属性值：   用于行
### 定义多根轴线的对齐方式，如果只有一根则不起作用
- `flex-start:` 行被包装在容器的顶部，与交叉轴的起点对齐
- `flex-end:` 行被包装在容器的底部，与交叉轴的终点对齐
- `center:` 行被包装在容器的垂直中心，与交叉轴的中点对齐
- `space-between:` 行以相等的间距显示，与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around:` 行以相等的间距显示在它们周围，每根轴线两侧的间隔都相等，so轴线之间的间隔比轴线与边框的间隔大一倍
- `stretch:` 行被拉伸以适合容器`（默认值）`，轴线将占满整个交叉轴

## `flex-grow` 属性值：
### 定义项目的放大比例。`默认为0`，即使有多余的空间也不用
    flex-grow: 1; 

## `flex-shrink` 属性值
### 定义项目的缩小比例。`默认为1`，如果空间不足则缩小
    flex-shrink: 2; 
    - 如果一个项目设为0，其他项目默认，则空间不足时，前者不缩小

## `flex-basis` 属性值：
### 定义在分配多余空间之前，项目占据的主轴空间。浏览器依此计算主轴的多余空间，默认为`auto`，即项目原本的大小
    flex-basis: 3;
    - 可以设置成与width、height一样的值，则项目将占据固定空间

## `flex` 属性值：
### `flex`是`flex-grow`、`flex-shrink`、`flex-basis`的简写
- 例  `flex: 1 1 1;`
- 快捷值：`auto(1 1 auto)`，`none(0 0 auto)`

## `align-self` 属性值：
### 允许单个项目有与其他项目不一样的对齐方式，可以覆盖`align-items`
- 默认值`auto`，表示继承父元素`align-items`属性，如果没有父元素则等同于`stretch`


