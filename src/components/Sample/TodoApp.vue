<script>
import { defineComponent } from 'vue'

const STORAGE_KEY = 'todo-app'

const filtered = {
  all: (lists) => lists,
  active: (lists) => lists.filter((list) => !list.completed),
  completed: (lists) => lists.filter((list) => list.completed)
}

export default defineComponent({
  name: 'TodoApp',
  data: function() {
    return {
      lists: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
      search: '',
      status: 'all',
      branches: ['all', 'active', 'completed']
    }
  },
  methods: {
    handleAdd() {
      if(this.search) {
        this.lists.push({
          id: Date.now(),
          name: this.search,
          completed: false
        })
        this.search = ''
      }
    },
    handleRemove(item) {
      let index = this.lists.indexOf(item)
      if(index > -1) {
        this.lists.splice(index, 1)
      }
    },
    toggleAll(e) {
      this.lists.forEach((list) => {
        list.completed = e.target.checked
      })
    },
    removeCompleted() {
      this.lists = filtered.active(this.lists)
    }
  },
  watch: {
    lists: {
      handler(lists) {
        console.log('lists')
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))
      },
      deep: true
    }
  },
  computed: {
    remaining() {
      return filtered.active(this.lists).length
    },
    filteredStatus() {
      console.log(filtered[this.status](this.lists))
      return filtered[this.status](this.lists)
    }
  }
})
</script>

<template>
  <h1>Todo App</h1>
  <h3>Remaining : {{ remaining }}</h3>
  <div>
    <input
      v-model="search"
      @keyup.enter="handleAdd"
      placeholder="Add..."
    />
    <button @click="handleAdd">Add: {{ search }}</button>
  </div>
  <div>
    <input
      type="checkbox"
      :checked="remaining === 0"
      @change="toggleAll"
    /> Check All
    <ul>
      <li v-for="(list, index) in filteredStatus"
        :key="list.id"
          :class="{ active : list.completed }"
      >
        <input
          type="checkbox"
          v-model="list.completed"
        />
        <input
          v-model="list.name"
          class="item"
        />
        {{" - " + list.completed }}
        <span @click="handleRemove(list)">X</span></li>
    </ul>
  </div>
  <div>
    <p>Status: {{ status }}</p>
    <button :class="{ active: status === 'all' }" @click="status = 'all'" >All</button>
    <button :class="{ active: status === 'active' }" @click="status = 'active'">Active</button>
    <button :class="{ active: status === 'completed' }" @click="status = 'completed'">Completed</button>
  </div>
  <div><button @click="removeCompleted">Clear Completed</button></div>
</template>

<style scoped>
li {
  padding: 5px 10px;
  border-bottom: 1px solid #333;
  position: relative;
}
li span {
  position: absolute;
  right: 20px;
  background: red;
  padding: 0 10px;
  border-radius: 4px;
  cursor: pointer;
}
li span:hover {
  background: #6d0000;
}
li.active {
  background: #cfffcf;
}
.item {
  margin: 0 10px;
}
.item:not(:focus) {
  background: transparent;
  border-color: transparent;
  outline: 0;
}
button.active {
  background: #00bd7e;
}

</style>