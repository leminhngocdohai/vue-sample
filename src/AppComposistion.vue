<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Basic from './components/Basic.vue'
import MarkdownEditor from '@/components/MarkdownEditor.vue'
import FetchingData from '@/components/FetchingData.vue'
import Grid from '@/components/Grid.vue'
import Faqs from '@/components/Faqs.vue'
import Modal from '@/components/Modal.vue'
import TodoMVP from '@/components/TodoMVP.vue'
import Homepage from '@/components/Homepage.vue'
import Navigation from '@/components/Navigation.vue'
import { aw } from 'vitest/dist/reporters-O4LBziQ_'

import BasicOption from '@/components/optionsAPI/Basic.vue'

// const searchQuery = ref('')
// const modal = ref(false)
// const gridColumns = ['name', 'power']
// const gridData = [
//   { name: 'Chuck Norris', power: Infinity },
//   { name: 'Bruce Lee', power: 9000 },
//   { name: 'Jackie Chan', power: 7000 },
//   { name: 'Jet Li', power: 8000 }
// ]
//
// const faqs = [
//   { id: 1, quest: 'Chuck Norris', answer: Infinity },
//   { id: 2, quest: 'Bruce Lee', answer: 9000 },
//   { id: 3, quest: 'Jackie Chan', answer: 7000 },
//   { id: 4, quest: 'Jet Li', answer: 8000 }
// ]
//
// const API_URL = 'https://jsonplaceholder.typicode.com/'
// const branches = ['posts', 'comments', 'albums', 'photos', 'users']
// const currentBranch = ref(branches[0])
// const sourceData = ref(null)


// watchEffect( async () => {
//   const url = `${API_URL}${currentBranch.value}`
//   sourceData.value = await( await fetch(url)).json()
// })
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  <body>
<!--    <Basic />-->

<!--    <MarkdownEditor />-->
<!--    <FetchingData />-->
<!--  <div>-->
<!--    <form>-->
<!--      Search-->
<!--      <input name="query" v-model="searchQuery" />-->
<!--    </form>-->
<!--    <Grid-->
<!--      :columns="gridColumns"-->
<!--      :data="gridData"-->
<!--      :filter-key="searchQuery"-->
<!--    ></Grid>-->
<!--  </div>-->
<!--  <div>-->
<!--    <Faqs :faqs="faqs">-->
<!--      <template #header>-->
<!--        <h3>FAQs</h3>-->
<!--      </template>-->
<!--    </Faqs>-->
<!--  </div>-->
<!--<button-->
<!--  v-on:click="modal = true"-->
<!--&gt;Show Modal</button>-->
<!--  <Teleport to="body">-->
<!--    <Modal-->
<!--      :show="modal"-->
<!--      @close="modal = false"-->
<!--    >-->
<!--      <template #header>-->
<!--          <h3>Custom Header</h3>-->
<!--      </template>-->
<!--    </Modal>-->
<!--  </Teleport>-->

<!--  <div>-->
<!--    <Navigation :data="sourceData"></Navigation>-->
<!--&lt;!&ndash;    <router-link v-for="data in sourceData" to="/posts/{data.id}">{{ data.id }}</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link v-for="branch in branches" to="/${branch}">{{ branch }}</router-link>&ndash;&gt;-->
<!--    <div class="container">-->
<!--      <router-view></router-view>-->
<!--    </div>-->
<!--  </div>-->

  </body>
</template>
