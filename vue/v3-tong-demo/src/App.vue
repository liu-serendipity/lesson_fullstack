<script setup>
  import TodoList from '@/components/TodoList.vue'
  // vue3 借鉴了函数式编程 + hooks威力
  // 把vue2的类式编程 通过 inject api 函数式组件调用
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  // 和数据仓库联系起来? hooks 来搞
  // state commit method
  let store = useStore()  // 连上了
  let count = computed(() => store.state.count)
  function add() {
    // redux mapDispatchToProps
    // vuex 不需要那么复杂
    store.commit('add')
  }
</script>

<template>
  <div>
    <TodoList />
    <div @click="add">{{count}}</div>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
