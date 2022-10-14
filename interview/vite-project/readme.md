# 如何在hooks中留下好影响
    高级应用场景
        - useEffect []参数 好多个
        - useEffect return function 组件卸载前，处理定时器，未到达的请求等
        - useMemo useCallback 防抖搜索 减少组件不必要的渲染
        - ahooks等自定义hooks中提供的useRequest这样的方便hooks调用
        - useContext + createContext + useReducer 代替redux 实现登录流程