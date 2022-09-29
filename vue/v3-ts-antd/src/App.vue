<script setup lang="ts">
  import { useTitle } from './hooks/useTitle'

  const pageTitle = useTitle()
</script>

<template>
  <div>
    <!-- <router-link to="/login">login</router-link> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
