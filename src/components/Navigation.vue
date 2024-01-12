<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  data: Array
})

</script>

<template>
  <ul class="navigation">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about-us" >About Us</router-link></li>
    <li><router-link to="/todo" >Todo</router-link></li>
    <li><router-link to="/posts" >Posts</router-link></li>
    <li><router-link to="/comments" >Comments</router-link></li>
  </ul>
</template>

<style scoped>

</style>