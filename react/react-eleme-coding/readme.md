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

- 图标字体库
    1. font-awesome
        方便，缺点是没有定制性
    2. iconfont 网站可以去找，下载一个代码包
    3. 先快实现，后慢优化
    assets/fonts

- tabbar 底栏组件
    1. 属于App 不属于任何一个页面组件
    2. Link location active
        classnames 字体变色
    3. flex:1 + 内部flex-direction:column
        多用弹性布局

- 切页面之前 移动端先自适应页面
    html fontSize 动态计算
    不要用px 用rem

- 城市选择功能
    1. city.json 城市数据 接口提供，缺点，每次都得请求
        下一个版本使用配置文件  项目的包有点大
    2. 接口都放在 api/request 方便管理
    3. Link to 复杂版本接受一个对象 {{pathname:'', search: ''}}
        react-router-dom  useSearchParams get('name') 

- 子组件不做数据请求，由父组件统一并传过来
    子组件不做复杂状态，用props传过来

- 幻灯片功能
    1. 使用了swiper
    2. 全局引用css
    3. 固定的html结构
        .swiper-container>.swiper-wrapper>swiper-slide{n}
        .swiper-pagination 分页
    4. 组件挂载后，uesEffect
        实例化幻灯片功能 new Swiper('.btn_banners')