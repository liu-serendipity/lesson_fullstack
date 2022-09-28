<script setup>
  import { ref } from 'vue'
  // import useMouse from './mouse'
  import HelloWorld from './components/HelloWorld.vue'
  // let {x, y} = useMouse()

  let num = ref(1)
  let add = () => {
    num.value++
  }
</script>

<template>
  <div>
    <h1 @click="add">{{num}}</h1>
    <!-- <div>{{x}}, {{y}}</div> -->
    <HelloWorld msg="你好 vue3"/>
  </div>
</template>

<style>

</style>
