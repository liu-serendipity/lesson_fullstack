- any 不想努力了
keyof Color 值的范围 enum

- typescript 有何魅力
    1. 增强语言能力
        interface 泛型 type keyof
        强类型
    2. 编译能力
        边写边编译
    3. 代码建议
    4. 开发更快
        多写了代码 让代码少出bug
        减少了调试，改bug的时间
    5. 有很多现成的类型定义文件 @/types/react

- typescript 怎么取巧呢？
    1. any
    2. 快速修复一下

- api typescript 比较复杂
    1. api 使命是返回数据的，符合模型的定义
        根据table列来定义
    2. 每个模块对应一个table model/ 模型定义文件 interface
    3. 异步，返回的是Promise
        :Promise<MemberEntity>
        每处Promise都得写清楚

- 封装了一个hook函数
    1. 每一个hooks都有使命的函数功能封装
    2. useEffect useState react内置
    3. useNavigate react-router-dom内置
    4. useMemberCollection 的hooks
    5. 状态声明（useState）和接口请求 封装到内部去了