- react 项目初始化之优化
    1. git 版本控制系统也是工程化得一部分
    2. 开源思维  找 + 供
    3. 加速

- 页面 layout
    App 组件
    1. 页面级别组件共享布局方案
        header + 动态路由组件（routes + route path） + footer

- Header 组件的版本化及配置
    1. 页面中layout 固定部分，不属于页面组件的内部，属于layout
    2. BOM  location.pathname 第一个版本