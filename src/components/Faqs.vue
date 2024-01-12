<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  faqs: Array
})

const openMultipleItems = ref([])

function handleClick(id) {
  let multiple = openMultipleItems.value

  if(multiple.includes(id)) {
    let index = multiple.indexOf(id)
    if(index > -1) {
      multiple.splice(index, 1)
    }
  } else {
    multiple.push(id)
  }
}

function checkShow(id) {
  let multiple = openMultipleItems.value;
  return multiple.includes(id);
}
</script>

<template>
  <slot name="header">FAQs</slot>
  <div class="faq">
    <div
      v-for="{ quest, answer, id} in faqs"
      :key="id">
      <label
        class="faq-title"
        :class="{ 'active': checkShow(id) }"
        :key="id"
        v-on:click="handleClick(id)"
      >{{ quest + id}}</label>
      <Transition tag="p" name="fade">
        <p v-if="checkShow(id)">{{ answer }}{{checkShow(id)}}</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
label {
  background: #f2f2f2;
  cursor: pointer;
  border: 1px solid #333;
}
</style>