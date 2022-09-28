<script setup>
    import { ref } from 'vue'
    import Rate from './components/Rate0.vue'
    let score = ref(2)
</script>
<template>
    <div>
        <h1>你的评分是{{score}}</h1>
        <Rate :value="score" theme="red"></Rate>
    </div>
</template>