- npm init @vitejs/app
    react 脚手架
    基于vitejs 工程化工具
    npm命令 node默认命令

- webpack
    另一个vite
    1. template
        src 目录是开发目录
        main.js 单点入口文件
            import 项目组织起来
    2. package.json
    3. npm run dev
        3000 端口上提供 http服务

- webpack 工程化流程
    1. npm init -y
        初始化项目为node项目
        工程化是node的产物，前端就更加专业了
    2. src  开发目录
        main.js / index.js  入口文件
    3. npm i webpack webpack-cli -D
        -D  开发依赖  工程化是开发阶段的
    4. 把项目运行起来
        npx webpack
        src/index.js -> dist/main.js  打包过程
        npx 后期推出的新功能
        1. 命令行 调用package 里的npm包
        2. 默认production    --mode=development 来设置当前模式

    5. webpack 运行后有什么效果
        - 打包工具 pack  bundler，src -> dist
        - 应用场景
            development 开发，调试便捷为主
            production 上线 代码体积、性能
    6. webpack 默认会去找根目录下的webpack.config.js 运行
        ```js
            module.exports = {
                mode: 'development',
                entry: './src/index.js',  // 入口文件
                output: {  // 出口文件
                    filename: 'bundle.js',
                    path: path.join(__dirname, 'dist')
                }
            }
        ···
    7. 何为打包的概念呢
        从入口进入，根据依赖关系，都打包成一个文件 bundle.js
    8. webpack 默认只处理js类型的文件，甚至如果你从ES6 -> ES5，也要用loader css 文件，
        需要手动添加loader(webpack可以打包一切静态资源，选配) loader，加载特顶类型文件处理的工具
        css -> css-loader
    9. plugins
        webpack 有插件机制
        html-webpack-plugin 把 index.html 搬到 dist 目录下
        把打包结果 bundle.js 自动的在html里引入
    10. [name].[hash].js
        - [] name原来文件名，hash 唯一文件内容，只要改变了内容，就会生成新的hash，否则绝对不变
        - 浏览器本地缓存
        - 如果更新了，main.js
            hash值  根据内容计算得到
        - 使用hash值创建版本号
    11. js 和 css 分离

    12. webpack 全家桶
        webpack 5.73.0
        webpack-cli 4.10.0 命令行
        npx webpack   npx -> node_modules/webpack-cli -> webpack
        webpack-dev-server  http server