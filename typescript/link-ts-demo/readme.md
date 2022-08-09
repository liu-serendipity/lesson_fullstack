- ts 项目npm 标配
    ts-node  tsc + node
    typescript  .ts -> .js

- ts 运行的工程化
    1. ts 后缀  不能直接运行（node，前端以DOM）
    2. npm i -g typescript
        tsc  typescript compile
    3. tsx --init
        tsconfig.json
    4. tsc 负责编译 .ts  .js
        ts-node  .ts 在内存中编译，之后可以直接运行

- 箭头函数 不适合做构造函数
    - 没有独立的this 
    - 缺少proptotype  __proto__
    - 缺少arguments   (...args) => {}
    - 缺少caller  无法确定上下文
        console.dir 调试过 error