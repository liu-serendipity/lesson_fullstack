<script setup lang="ts">
  // composition API
  import { ref, reactive } from 'vue'
  import ElForm from './components/form/Form.vue'
  import ElFormItem from './components/form/FormItem.vue'
  import ElInput from './components/form/Input.vue'

  const model = reactive({
    username: '',
    password: ''
  })

  const rules = reactive({
    username: [
      {
        required: true,
        message: '请输入用户名'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码'
      }
    ]
  })

  const myForm = ref(null)
  // console.log(myForm.value)
  const login = () => {
    // myForm validate
    myForm.value?.validate()
  }
</script>

<template>
  <div>
    <el-form
      ref="myForm"
      :model="model"
      :rules="rules"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input v-model="model" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="model" />
      </el-form-item>
      <el-form-item>
        <button @click="login">登录</button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
