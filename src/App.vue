<script>
import Basic from '@/components/optionsAPI/Basic.vue'
import Input from '@/components/optionsAPI/Input.vue'
import ToggleList from '@/components/optionsAPI/ToggleList.vue'
import FetchingData from '@/components/optionsAPI/FetchingData.vue'
import Grid from '@/components/optionsAPI/Grid.vue'
export default {
  components: {
    Grid
  },
  data: function() {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  },
  methods: {
    alertAction(n) {
      alert(`Test EMIT ${n}`)
    }
  },
  provide() {
    return {
      globalTest: 'global title',
      globalTest1: 'global test 1'
    }
  }
}
</script>

<template>
<!--  <input type="search" placeholder="Search . . ." v-model="searchQuery" />-->
  <div>
<!--    <ToggleList></ToggleList>-->
<!--    <FetchingData></FetchingData>-->
<!--    <Grid-->
<!--      :filter-key="searchQuery"-->
<!--      :column="gridColumns"-->
<!--      :data="gridData"-->
<!--    ></Grid>-->
    <div class="nav">
      <router-link to="/todo-app">Todo App</router-link>
      <router-link to="/calculator">Calculator</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>