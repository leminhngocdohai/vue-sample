<script setup lang="ts">
import { capitalize, ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String
})

const sortKey = ref('')
const sortOrders = ref(
  props.columns.reduce((o, key) => {
    return ((o[key] = 1), o)
  }, {})
)

const filteredData = computed(() => {
  let { data, filterKey } = props

  console.log(data, filterKey)

  if(filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }

  const key = sortKey.value
  console.log(key)
  if(key) {
    const order = sortOrders.value[key]
    console.log('order', order)
    data = data.slice().sort((a,b) => {
      a = a[key]
      b = b[key]
      console.log(a,b)
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  console.log(data)
  return data
})

function sortBy(key) {
  console.log(key)
  sortKey.value = key
  sortOrders.value[key] *= -1
}

</script>

<template>
  <h1>Grid </h1>

  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns"
            v-on:click="sortBy(key)"
            :class="{ active: sortKey == key }"
        >
          {{ capitalize(key) }}
          <span
            class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          <span>{{ entry[key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No data</p>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>