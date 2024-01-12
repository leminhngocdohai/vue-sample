<script setup lang="ts">

import { ref, watchEffect } from 'vue'

const API_URL = 'https://jsonplaceholder.typicode.com/posts/'
const postData = ref(null)

watchEffect(async () => {
  postData.value = await (await fetch(API_URL)).json()
})
</script>

<template>
<h1>Posts Page</h1>
  <p>{{ console.log($route) }}</p>
  <div class="container">
    <ul>
      <li v-for="post in postData" :key="post.id"><router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link></li>
    </ul>
  </div>
</template>

<style scoped>

</style>