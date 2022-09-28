// 自定义hooks
// mouseover x y 显示页面上
// react hooks 思想 封装复杂性
import { ref, onMounted, onUnmounted } from 'vue'
function useMouse() {
    const x = ref(0)
    const y = ref(0)
    const update = (e) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return {x, y}
}
export default useMouse