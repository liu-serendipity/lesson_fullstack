<template>
    <div>
        <!-- @事件绑定，自定义事件 -->
        <Rate :value="score" @update-rate="update" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Rate from './components/Rate.vue'
    let score = ref(2.5)
    const update = (num) => {
        score.value = num
    }
</script>

<style scoped>

</style>