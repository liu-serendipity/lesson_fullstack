npm  node package management

react 
    npm init @vitejs/app    初始化脚手架 最新
    vitejs  当前最快的脚手架
    - 输入项目名
    - 选择react开发框架
    - 确定用react
    得到了一个模板项目

    cd 项目目录
    npm i  根据项目描述(package.json)，把项目依赖(dependencies + devDependencies)安装
    npm run dev  将项目运行起来

- 项目模板
    1. index.html  / : 3000默认端口
        - 挂载点 #root
        - script 引入  /src/main.jsx
            1. src  js开发目录
            2. main.jsx 入口文件
            3. 文件后缀是 jsx 的时候， react