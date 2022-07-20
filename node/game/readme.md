# 通过node游戏 来聊操作系统
- 石头rock  剪刀scisor  布paper
- 怎么玩？
    选择协议？ http 网页游戏  服务器端是不可以主动发送数据  
    双方都可以相互通信，发送接收信息 TCP/IP 连接 ws websocket
- 电脑来玩  应用层
    冯诺依曼原理
    1. 输入设备 键盘 鼠标  你的选择 交给电脑吧？
    2. 内存  userChoice rock
        电脑  Math.random()  comChoice page
    3. cpu  内存中 调入 cpu 计算，得到结果 computer赢了
    4. 输出设备（显示器） computer赢了

- 业务逻辑拆分很清晰
    index.js 负责输入输出，使用了操作系统的冯诺依曼原理
    在硬件上的软件架构
    throw new Error(message) 进程终止掉
    process.exit() 退下
    c++ node buffer
