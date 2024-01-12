<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DeepChild',
  inject: ['globalTest', 'globalTest1']
})
</script>

<template>
  <h3>Deep Child : {{ globalTest }} + {{ globalTest1 }}</h3>
</template>

<style scoped>

</style>