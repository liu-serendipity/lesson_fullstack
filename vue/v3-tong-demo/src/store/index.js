import { createStore } from 'vuex'
// commit mutations
// dispatch actions
const store = createStore({
    state() {
        return {
            count: 666
        }
    },
    mutations: {
        add (state) {  // 
            state.count++
        }
    }
})

export default store