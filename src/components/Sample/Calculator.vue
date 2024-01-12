<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoApp',
  data() {
    return {
      result: 0
    }
  }
})
</script>

<template>
  <p class="result">= {{ result }}</p>
<h1>Calculator</h1>
  <div class="calculator">
    <div><p>C</p></div>
    <div><p>+</p></div>
    <div><p>-</p></div>
    <div><p>0</p></div>

    <div><p>1</p></div>
    <div><p>2</p></div>
    <div><p>3</p></div>
    <div><p>x</p></div>

    <div><p>4</p></div>
    <div><p>5</p></div>
    <div><p>6</p></div>
    <div><p>%</p></div>

    <div><p>7</p></div>
    <div><p>8</p></div>
    <div><p>9</p></div>
    <div><p>=</p></div>

  </div>
</template>

<style scoped>
.calculator {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}
.calculator > div {
  flex: 25%;
  border: 1px solid #333;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.calculator > div:nth-child(4n) {
  background: orange;
}
.result {
  margin-top: 20px;
  background: #fff;
  width: 400px;
  padding: 20px;
  font-size: 20px;
}
</style>