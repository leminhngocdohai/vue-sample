<script>
export default {
  name: "Grid",
  props: {
    data: Array,
    column: Array,
    filterKey: String
  },
  data() {
    return {
      sortKey: '',
      sortOrders: this.column.reduce((o, key) => ((o[key] = 1), o), {})
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey
      const order = this.sortOrders[sortKey] || 1
      console.log('sortKey', sortKey, 'order', order)

      let data = this.data

      const filterKey = this.filterKey && this.filterKey.toLowerCase()

      if (filterKey) {
        // data = [
        //  {name: 'Stan', pow: 500}
        //  {name: 'Lee', pow: 200}
        // ]
        data = data.filter((row) => {

          // console.log(Object.keys(row), 'obj')
          // Object.keys(row).some((key) => {
          //     console.log(String(row[key]).toLowerCase())
          // })

          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }

      if(sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }

      console.log('data', data)
      return data
    }
  }
}
</script>

<template>
  <h3>Grid : Search : {{ filterKey }}</h3>

  <table>
    <thead>
      <tr>
        <th
          v-for="key in column"
          :class="{ active: sortKey === key }"
          @click="sortBy(key)"
        >
          {{ key }}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
          ></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="gridItem in filteredData">
        <td v-for="key in column">
          {{ gridItem[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
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
