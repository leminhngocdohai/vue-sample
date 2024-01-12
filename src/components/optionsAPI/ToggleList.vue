<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleList',
  data() {
    return {
      show: true,
      data: [1,2,3]
    }
  }

})
</script>

<template>
  <h3>Toggle List</h3>
  <button @click="show = !show">Toggle List</button>
  <button @click="data.push(data.length + 1)">Push Number</button>
  <button @click="data.pop()">Pop Number</button>
  <button @click="data.reverse()">Reverse List</button>

  <ul v-if="show && data.length">
    <li v-for="item in data">{{ item }}</li>
  </ul>
  <p v-else-if="data.length">Data Hidden</p>
  <p v-else>No Data</p>
</template>