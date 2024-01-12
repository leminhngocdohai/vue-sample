<script setup lang="ts">
  import { ref } from 'vue'
  import TodoItem from '@/components/TodoItem.vue'

  const message = ref("Hello My Friend")
  const isRed = ref(true)
  const color = ref("green")

  const show = ref(true);
  const list = ref([1, 2, 3])

  const text = ref("input text")
  const checkbox = ref(true)
  const multipleCheckbox = ref(["Jack"])
  const picked = ref("Two")
  const selected = ref("A")
  const multiSelected = ref(["A","B"])

  const groceryList = ref([
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' }
  ])

  function reverseMessage() {
    console.log(message.value)
    message.value = message.value.split('').reverse().join('')
  }

  function notify() {
    alert("Test")
  }

  function toggleColor() {
    color.value = color.value === "green" ? "yellow" : "green";
  }

  function toggleIsRed() {
    isRed.value = !isRed.value
  }

  function toggleList() {
    show.value = !show.value
  }
</script>

<template>
  <h1>{{ message }}</h1>

  <button v-on:click="reverseMessage">Reverse Message</button>
  <br>
  <button v-on:click="message += '!'">Append "!"</button>
  <br>
  <a href="https://vuejs.org" v-on:click.prevent="notify">
    A link with e.preventDefault()
  </a>

  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </p>

  <p :class="{ red: isRed }" v-on:click="toggleIsRed">Toggle is Red</p>
  <p :style="{ color }" v-on:click="toggleColor">Toggle color</p>

  <div>
    <button v-on:click="toggleList">Toggle List</button>
    <button v-on:click="list.push(list.length + 1)">Push Number</button>
    <button v-on:click="list.pop()">List pop</button>
    <button v-on:click="list.reverse()">List reverse</button>

    <ul v-if="show && list.length">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List Hidden</p>
    <p v-else>List Empty</p>
  </div>

  <div>
    <h2>Text Input</h2>
    <input v-model="text" /> {{ text }}

    <h2>checkbox Input</h2>
    <input type="checkbox" v-model="checkbox" /> {{ checkbox }}

    <h2>Multiple checkbox Input {{ multipleCheckbox }}</h2>
    <label for="jack">Jack</label>
    <input id="jack" type="checkbox" value="Jack" v-model="multipleCheckbox" />
    <br>
    <label for="sting">Sting</label>
    <input id="sting" type="checkbox" value="Sting" v-model="multipleCheckbox" />
    <br>
    <label for="ricon">ricon</label>
    <input id="ricon" type="checkbox" value="Ricon" v-model="multipleCheckbox" />

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>

    <h2>Select</h2>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <h2>Multi Select</h2>
    <select v-model="multiSelected" multiple style="width:100px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ multiSelected }}</span>
  </div>

  <ol>
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>

<style scoped>
.red {
  color: red;
}
p:hover {
  cursor: pointer;
}
</style>