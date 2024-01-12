<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Basic',
  data: function() {
    return {
      message: 'Input type !'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    notify() {
      alert('aa')
    }
  }
})
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>

  <button @click="message += '!'">Append "!"</button>
<!--  -->
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>

<style scoped>

</style>