- weui css 框架                            
- weui-react UI组件库  Dialog
- axios + 前端先调用fast mock 伪造远程接口，后端后期会给真正的接口给我们 到时只需要把之前的伪接口 url 切换成后端真正的接口url 就可以了 
- 组件化思想
    1. html + css + js  类section  一个功能组件的封装
    2. 界面开发，组件化开发
    3. 采用一个好用的react UI组件库

- 状态
    1. 组件有自有数据状态和props  useState + props
    2. 静态页面，界面的状态

    界面在那一刻一定对应唯一的状态

- 父子组件传值的时候，props 类型的检测
    prop-types npm
    Address.propTypes = {
        address: PropTypes.array
    }
    当父组件传的值不是我们需要的话， prop-types会报相应的错误