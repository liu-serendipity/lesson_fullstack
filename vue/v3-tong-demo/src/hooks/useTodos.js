import { ref, computed } from 'vue'

function useTodos() {
    let title = ref('')  // 双向绑定 onChange 指令
    let todos = ref([{
        title: '去大厂',
        done: false
    }])
    let active = computed(() => todos.value.filter(v => !v.done).length)
    let all = computed(() => todos.value.length)
    // v3
    let allDone = computed({
        get: function() {
            return active.value === 0
        },
        set: function(value) {
            todos.value.forEach((todo) => {
                todo.done = value
            })
        }
    })

    const addTodo = () => {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ''
    }

    const clear = () => {
        todos.value = todos.value.filter((v) => !v.done)
    }

    return {
        title,
        todos,
        addTodo,
        clear,
        active,        
        all,
        allDone
    }
}

export default useTodos
