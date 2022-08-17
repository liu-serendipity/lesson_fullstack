- 每天投递50+
    中小 知名企业不投
    - 面经 题目记录下来 录音  每周在掘金发一篇面经

- url 页面显示
- JS 相关
    1. 高频考题的掘金文章
        三元js上
    2. js的执行机制
        1. js 引擎解析代码 分成几个阶段？
            树是核心的概念
            js 语法树
    - 解释阶段
        - 读取代码，进行词法分析 Lexical analysis，分解成一个个词元 token
        - 对词元进行语法分析 parsing 然后将代码整理成语法树 syntax tree
        - 使用翻译器 translator 将代码转为字节码 bytecode
            JIT Just in Time compiler
        - 用字节码解释器 转为机器码
            chrome v8 因为有 JIT 缓存了一些编译结果。更快
    - js的预处理阶段 分号补全 变量提升，语法错误也会检测
        目的：做些准备，为保证js正确运行
    - js的执行阶段
        1. 到底怎么执行
            执行栈
                作用域 全局 函数（局部） 块级作用域
                变量查找的过程  作用域链的过程
                在一个作用域里可以找到其他作用域的变量 闭包
            内存空间分配问题
                栈内存 堆内存

        栈底 全局变量 window global  关掉页面 退出程序

        - 执行上下文 context 执行栈相关
            全局上下文Global Context 当前上下文 AO VO 对象
            - js有执行上下文
            - 浏览器首次载入脚本。创建全局执行上下文，并压入栈顶
            - 每进入其他作用域，创建对应的上下文并把它压入执行栈的顶部
            - 执行完后，弹出，交出上下文的控制权给执行栈
            - 执行，直到回到全局上下文
            VO 变量对象 当前Context变量的组织对象 vars function declaration args
            - 作用域 Scope chain 变量查找
            - this？ 
            - arguments
        - 作用域链
            Variable Object + all parent scopes
            VO { , __parent__ }

        在函数上下文中 VO === AO
        全局上下文中  VO === this === global

- boss打招呼的话术
    设置
        boss你好，我js，react实战能力挺好的，平时业喜欢在掘金写文章，学习开源项目，算法每周在leetcode刷题，想来贵公司实习，请问可以安排下面试吗？
