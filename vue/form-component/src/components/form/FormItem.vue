<template>
    <div class="el-form-item">
        <!-- 1. label
        2. slot input
        3.  -->
        <label v-if="label">{{label}}</label>
        <slot />
        <!-- input 插槽 -->
        <p
            v-if="error"
            class="error"
        >
            {{error}}
        </p>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ElFormItem'
    }
</script>

<script setup lang="ts">
    import { defineProps, withDefaults, ref, onMounted } from 'vue'
    import { emitter } from '../../emitter'

    interface Props {
        label?: string;
        prop?: string
    }

    // props v3 
    const props = withDefaults(defineProps<Props>(), {label: "", prop: ""})
    const error = ref("")  // 唯一值
    onMounted(() => {
        // 向form 汇报 集合
        // console.log(props.prop, '挂载了')
        if (props.prop) {
            emitter.emit('addFormItem', () => {
                validate()
            })
        }
    })

    function validate() {
        
    }
</script>

<style scoped>

</style>