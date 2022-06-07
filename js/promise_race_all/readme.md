- 脚本文件中定义了Promise

1. 首先创建了两个函数，代码的执行从20行开始
2. 函数里的同步代码async1 start
3. 之后碰到await  它会阻塞async1 后面代码的执行
    从 async1函数 跳转到 async2函数 中去运行

    可以理解为 紧跟 await 后面的语句相当于放到了 promise.then
    程序idle之后才会运行