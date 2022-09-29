<template>
    <div class="el-form">
        <slot />
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ElForm'
    }
</script>

<script setup lang="ts">
    import { defineExpose, ref } from 'vue'
    import { emitter } from '../../emitter'

    const items = ref([])
    emitter.on('addFormItem', (item) => {
        console.log(item)
        items.value.push(item)
    })

    function validate() {
        // 收集所有的item validate forEach
        // const tasks = items.value.map((item) => item.validate())
    }
    defineExpose({
        validate
    })
</script>

<style scoped>

</style>