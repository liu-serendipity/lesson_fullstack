<script setup>
  import useMouse from '../mouse'

  defineProps({
    msg: String
  })

  let {x, y} = useMouse()
</script>

<template>
  <h2>{{msg}}</h2>
  <h1>{{x}}, {{y}}</h1>
</template>
