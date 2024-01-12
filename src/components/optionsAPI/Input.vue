<script>
import { defineComponent, ref } from 'vue'

import DeepChild from '@/components/optionsAPI/DeepChild.vue'

export default defineComponent({
  name: 'Input',
  components: {
    DeepChild
  },
  data() {
    return {
      count: 0,
      input: {
        text: ''
      }
    }
  },
  mounted() {
    console.log(this.$attrs)
  },
  emits: ['alertAction'],
  inject: ['globalTest']

})
</script>

<template>
  <h3>Input form : {{ globalTest }}</h3>
  <input ref="input" v-model="input.text" /> {{ input.text }}
  <button @click="count++">count : {{ count }}</button>
  <button @click="$emit('alertAction', 2)">{{$attrs}}</button>

  <DeepChild></DeepChild>
</template>

<style scoped>

</style>