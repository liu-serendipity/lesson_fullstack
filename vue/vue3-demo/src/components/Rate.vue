<template>
    <div :style="fontStyle">
        <!-- 打分功能 this.$emit -->
        <div class="rate" @mouseout="mouseOut">
            <span 
                v-for="num in 5" 
                :key="num"
                @mouseover="mouseOver(num)"
            >☆</span>
            <span class="hellow" :style="fontwidth">
                <span 
                    v-for="num in 5" 
                    :key="num" 
                    @mouseover="mouseOver(num)"
                    @click="onRate(num)"
                >★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
    import { defineEmits, defineProps, computed, ref } from 'vue' 
    let props = defineProps({
        value: Number,
        theme: {
            type: String,
            default: 'orange'
        }
    })
    let width = ref(props.value)
    let emits = defineEmits(['update-rate'])
    function onRate(num) {
        // this.$emit
        emits('update-rate', num)
    }
    function mouseOver(i) {
        width.value = i
    }
    function mouseOut() {
        width.value = props.value
    }
    const themeObj = {
        'black': '#000',
        'white': '#fff',
        'orange': '#fadb14',
        'red': '#f5222d'
    }
    let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
    let fontStyle = computed(() => {
        return `color:${themeObj[props.theme]}`
    })
    let fontwidth = computed(() => `width:${width.value}em;`)
</script>

<style scoped>
    .rate {
        position: relative;
        display: inline-block;
    }
    .rate > span.hellow {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0;
        overflow: hidden;
    }
</style>