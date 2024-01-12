<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {
  name: 'Fetching Data',
  data: () => ({
    branches: ['main', 'v2-compat'],
    currentBranch: 'main',
    commits: null
  }),
  created() {
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData'
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`
      console.log(url)
      this.commits = await( (await (fetch(url))).json() )
    }
  }
}
</script>

<template>
  <h3>Fetching Data</h3>
  <template v-for="branch in branches">
    <input type="radio"
           :id="branch"
           :value="branch"
           name="branch"
           v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
  </template>
  <strong> - {{ currentBranch }}</strong>

  <ol>
    <li v-for="item in commits">{{ item.sha }}</li>
  </ol>
</template>
