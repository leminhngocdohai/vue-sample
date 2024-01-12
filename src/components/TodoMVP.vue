<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

const STORAGE_KEY = 'todo-mvp'

const data = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])
const addTodo = ref('')
const checkListItem = ref([])
const activeCheckAll = ref(false)

const route = ref('all')

console.log('start')

const filters = {
  all: (data) => data,
  active: (data) => data.filter((item) => !item.completed),
  completed: (data) => data.filter((item) => item.completed)
}

console.log('fill',filters[route.value](data.value))
const filteredTodos = computed(() => filters[route.value](data.value))

const remaining = computed(() =>
  filters.active(data.value).length
)

// const filters = {
//   active: (todos) => todos.filter((todo) => todo.completed)
// }
//
// window.addEventListener(
//   "hashchange",
//   () => {
//     console.log("The hash has changed!");
//   },
//   false,
// );

watchEffect(() => {
  console.log('effect', data.value)
  localStorage.setItem( STORAGE_KEY, JSON.stringify(data.value) )
  console.log('effect end')
})

function handleAddTodo(e) {
  const value = e.target.value

  if(value) {
    data.value.push({
      id: Date.now(),
      name: value,
      completed: false
    })
  }

  addTodo.value = ''
}

function handleRemove(id) {
  let newData = data.value
  let index = newData.indexOf(id)
  if( index > -1 ) {
    newData.splice(id, 1)
  }
  return newData
}

function toggleAll(e) {
  console.log('toggleAll', e.target.checked)
  const newData = data.value
  newData.forEach((item, index) => {
    item.completed = e.target.checked
  })
}

function changeTab(value) {
  route.value = value

  console.log("filters",route.value, filteredTodos)
}

function removeCompleted() {
  data.value = filters.active(data.value)
}

function sortUp(){
  data.value.sort((a,b) =>
    a.name > b.name ? -1 : 1,
  )
}

function sortDown(){
  data.value.sort((a,b) =>
    a.name > b.name ? 1 : -1,
  )
}

console.log('start2')
</script>

<template>
  <section class="todoapp">
    <header>
      <h2>TODO</h2>
      <p>checklist: {{ checkListItem }}</p>
      <div v-if="data.length">
        <input
          type="checkbox"
          id="toggle-all"
          class="toggle-all"
          :checked="remaining === 0"
          @change="toggleAll"
        />
        <span> Check All</span><br>
        <button @click="sortUp">sort Up</button><br>
        <button @click="sortDown">sort Down</button>
      </div>

      <span v-show="activeCheckAll">Active</span>
    </header>

    <section class="main">
      <div class="add-action">
        <input
          v-model="addTodo"
          placeholder="Typing"
          @keyup.enter="handleAddTodo"
        /> {{ addTodo }}
      </div>
      <div class="view">
        <ol>
          <li v-for="(item, index) in filteredTodos"
            :key="item.id"
              class="todo"
              :class="{ completed: item.completed }"
          >
            <input
              type="checkbox"
              :checked="item.completed"
              v-model="item.completed"
            />
<!--            <span v-on:dblclick="changeName(item)">{{ item.name}}</span>-->
            <input v-model="item.name" />
            <span>{{ "   -    complete : " + item.completed }}</span>

            <a @click.prevent="handleRemove(item)">x</a>
          </li>
        </ol>

      </div>
      <div class="toolbar" v-if="data.length">
        <p>{{ remaining }} <span v-if="remaining === 1">items</span><span v-else>item</span> left</p>
        <button
          v-if="remaining < data.length"
          v-on:click="removeCompleted"
        >Clear Completed {{ remaining }}</button>
      </div>

      <ul class="filters" v-if="data.length">
        <li >
          <a @click="changeTab('all')" href="#" :class="{ active: route === 'all' }">All</a>
        </li>
        <li>
          <a @click="changeTab('active')" href="#" :class="{ active: route === 'active' }">Active</a>
        </li>
        <li>
          <a @click="changeTab('completed')" href="#" :class="{ active: route === 'completed' }">Completed</a>
        </li>
      </ul>
    </section>
  </section>
<!--  <input type="date" v-model="departureDate">-->
</template>

<style scoped>
.view li {
  padding: 10px;
  border: 1px solid #333;
  display: flex;
  gap: 10px;
  align-items: center;
}
.view ul, .view ol {
  padding: 0;
  margin: 0;
}
.view a {
  margin-left: auto;
  cursor: pointer;
  padding: 5px 10px;
}
.toolbar {
  padding: 10px;
}

.filters .active {
  border: 1px solid orange
}
.hide {
  display: none;
}

.todo.completed{
  background: #60ac60;
}
</style>