# BFC  (Block Formating Context)
    - 块级格式上下文
    - 是一个完全独立的空间（布局环境），让里面的子元素不会影响到外面的布局
    - 看成是一个css属性来使用

    - 怎样触发它呢？
        overflow:hidden;
        display:inline-block;
        position:absolute;
        position:fixed;
        display:table-cell;
        display:flex;

    - 规则
        它是一个块级作用域，块级元素会在垂直方向上一个接一个的排列
        隔离的独立容器，里面的标签不会影响到外部标签
        垂直方向上的距离由margin决定，属于同一个BFC的两个相邻标签外边距会发生重叠
        计算BFC的高度时，浮动元素也参与计算

    - 解决了哪些问题？
        1. 使用float脱离文档流，高度塌陷  1.html
        2. margin边距重叠  2.html
        3. 两栏布局  3.html