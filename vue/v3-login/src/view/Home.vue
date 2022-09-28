<template>
    <div>
        <div class="home">
            <div class="container">
                <span>用户名：{{userInfo.userName}}</span>
                <span>密  码：{{userInfo.password}}</span>
                <p><el-button @click="logout" type="warning" size="mini">退出</el-button></p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    const store = useStore()
    const router = useRouter()
    const { userInfo } = store.getters
    const logout = async () => {
        await store.dispatch('EDIT_USER_INFO', {})
        router.push({
            name: 'Login'
        })
    }
</script>
<style scoped>

</style>