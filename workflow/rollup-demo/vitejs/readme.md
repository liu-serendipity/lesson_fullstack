- react 官方脚手架
    create-react-app
    npm i create-react-app -g

- npm -g 安装到哪？
    安装的是包 package
    全局 prefix 下  npm config ls
    环境变量

- cnpm 是什么？
    music api 国内的源
- pnpm               
    高性能npm
    先设置 registry
- npx ？
    实验一些功能，或直接运行node_modules目录下的包时有用

- 为什么需要vite？
    vite 是 vue 的作者尤雨溪带货的工程化套件  替代webpack
    - vite为什么那么快？
    vite 比 webpack 快6倍
    1. 文件的请求 依赖 花时间
        webpack 叫bundler 打包器 打包成为一个文件
        entry -> output  罪魁祸首
        vite no bundler  按需加载
        - 现代浏览器 直接支持 es module 加载
            <script type="module" script="/src/main.jsx">
        - 遇到的import 都作为一个新的加载
        - 编译的过程
            module script -> main.jsx -> 按需加载 react react-dom index.css... -> 编译器babel（实时）
        - 浏览到新的页面时，再import编译执行

- 在vite项目中，一个import语句即代表一个HTTP请求
    Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码
    vite 提倡的 no bundler
    利用浏览器原生ES模块的支持，实现开发阶段的devServer，进行模块的按需加载，而不是先整体打包再进行加载（webpack）