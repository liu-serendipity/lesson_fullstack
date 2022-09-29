<template>
    <div class="form_box">
        <a-form :model="formModel" :rules="rules" @finish="handleFinish">
            <p class="text">请输入用户名</p>
            <a-form-item name="username">
                <a-input 
                    class="reset-input"
                    v-model:value="formModel.username"
                    placeholder="管理员: admin, 普通： test"
                ></a-input>
            </a-form-item>
            <p class="text">请输入密码</p>
            <a-form-item name="password">
                <a-input 
                    class="reset-input"
                    v-model:value="formModel.password"
                    placeholder="密码为123456"
                    type="password"
                ></a-input>
            </a-form-item>
            <a-form-item>
                <a-row>
                    <a-col :span="12">
                        <a-checkbox class="reset-box" 
                        v-model:checked="checked">自动登录</a-checkbox>
                    </a-col>
                    <a-col :span="12" class="text-right">
                        <span class="gray_text">忘记密码?</span>
                    </a-col>
                </a-row>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" class="btn" :loading="loading">立即登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../../store/modules/user'

const userStore = useUserStore()
const loading = ref(false)
const checked = ref(true)
const formModel = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [
        { required: true, trigger: 'blur', message: '请输入用户名' }
    ],
    password: [
        { required: true, trigger: 'blur', message: '请输入密码' }
    ]
}
const handleFinish = async (values: any) => {
    console.log(values)
    
    loading.value = true
    const res = await userStore.login(values)
    loading.value = false
}
</script>

<style  scoped>

</style>