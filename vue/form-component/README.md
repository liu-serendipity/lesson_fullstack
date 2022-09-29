- Form/FormItem/Input/Button 
    - model
    - rules
        1. rules 自定义 数组
        {
            固定的字段 Schema
        }
        2. login 
            ref.validate
            form items validate
            true 
            false
        3. prop 
            rules[prop] validate
        4. async validate
        5. async-validator

- slot 复杂的组件 自定义插槽
    1. Form
        ref 绑定 Form对象 App.vue login validate
        model 数据绑定 v-model model input model.username 一直传递
        rules 定义
    2. FormItem 
        label error
        slot input
        error v-if
    3. input @input 通知上级 emit 

- 响应式 es6 proxy 
    react vue 修改DOM 
    设计模式  订阅发布者模式
    template jsx {{title}} 订阅title
    title 变化 订阅的函数运行一下 emit提供了
    事件的概念
    emit on emit 跨组件传值的设计模式方式
