import { createStore } from 'vuex'

export default createStore({
    state: {
        // 健壮
        userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}')
    },
    // 对状态修饰
    // 修改状态不可以 dispatch action async -> commit mutations -> state.userInfo
    // 读取状态可以直接 state.userInfo,使用getters
    getters: {
        userInfo: state => state.userInfo
    },
    actions: {
        // 修改状态 store.dispatch(action) commit -> mutation -> 
        EDIT_USER_INFO({commit}, payload) {
            // 退出 复用
            return new Promise((resolve, reject) => {
                commit('changeUserInfo', payload || {})
                sessionStorage.setItem('userInfo', JSON.stringify(payload))
                resolve()
            })
        }
    },
    mutations: {
        // mutations 才可以修改状态mutation
        // redux actions return { type:, payload:}
        // vuex 加了 mutation
        changeUserInfo(state, payload) {
            state.userInfo = payload
        }
    },
    // redux combineReducers
    modules: {

    }
})