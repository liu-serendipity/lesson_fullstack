<template>
    <div class="login">
        <div class="container">
            <el-form ref="formRef" :model="form" :rules="rules">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="form.userName" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" />
                </el-form-item>
                <el-row type="flex" justify="center">
                    <el-button type="primary" @click="submit">登录</el-button>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script setup>
    // composition API
    // ref 单一值，reactive JSON  useState
    import { reactive, ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    // form ref?
    const store = useStore()
    const router = useRouter()
    const formRef = ref(null)  // react useRef
    const form = reactive({  // 响应式
        userName: '',
        password: ''
    })
    // error 输出在input
    // Proxy get set
    const rules = reactive({
        // schema
        userName: [{
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
        }],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
        }]
    })

    const submit = () => {
        // console.log(formRef.value)
        formRef.value.validate(async valid => {
            if (!valid) return
            await store.dispatch('EDIT_USER_INFO', form)
            router.push({
                path: '/'
            })
        })
    }
</script>
<style scoped>
    
</style>