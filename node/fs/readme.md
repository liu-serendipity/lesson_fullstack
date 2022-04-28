# 帅气之路

- 读取文件  fs  api
    拥有两种代码风格
    1. 同步写法
    2. 异步写法

- 查找指定目录下的最大文件
    1. api 获得目录下的内容？ readdir
    2. let maxSize = 0;  循环遍历 fs.stat  详细
    3. 如果是目录？ isDir  递归