<!-- 评分组件 -->
<template>
    <div :style="fontStyle">
        {{rate}}
    </div>
</template>
<script setup>
    import { defineProps, computed } from 'vue'

    let props = defineProps({
        value: Number,
        theme: {
            type: String,
            default: 'orange'
        }
    })
    const themeObj = {
        'black': '#000',
        'white': '#fff',
        'orange': '#fadb14',
        'red': '#f5222d'
    }
    // 返回 星星
    let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
    let fontStyle = computed(() => {
        return `color:${themeObj[props.theme]}`
    })
</script>
<style>

</style>