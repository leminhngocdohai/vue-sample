<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']

const currentBranch = ref(branches[0])
const commits = ref(null)

watchEffect(async ()=> {
  const url = `${API_URL}${currentBranch.value}`
  console.log(url)
  commits.value = await (await fetch(url)).json()
  console.log(commits.value)
})

</script>

<template>
  <h1>Fetching Data</h1>

  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>

  <ul>
    <li v-for="{ html_url, sha, url } in commits">{{ html_url }}<p><a href="#">{{ url }}</a></p></li>
  </ul>
</template>

<style scoped>

</style>