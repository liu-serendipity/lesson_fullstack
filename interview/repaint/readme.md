# 浏览器重绘(repaint)重排(reflow)与优化[浏览器机制]

- 浏览器渲染机制
    1. html 怎么解析？
    2. css 如何绘制？
    3. js

- 知识点 
    - 重排  性能开销更大 Reflow
        页面渲染后的 再次排列
        html + css 渲染树 -> 浏览器渲染过程 绘制
        何时重排？
            - 窗口大小调整 onresize  防抖
            - display: block || none 除了自己， 还会影响周边
            - box  padding margin ....
    - 重绘 Repaint
    - 优化

- 网页生成过程
    1. HTML被HTML解析器解析成DOM 树
    2. css则被css解析器解析成CSSOM 树
    3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
    4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
    5. 将布局绘制（paint）在屏幕上