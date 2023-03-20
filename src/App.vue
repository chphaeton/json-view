<template>
  <div id="app">
    <json-view :data="data"></json-view>
  </div>
</template>

<script>
  import data from './data.json'

  data.g1 = [undefined]
  data.g2 = [null]
  data.g3 = [true]
  data.g4 = ['3']
  data.g5 = []
  export default {
    name: 'App',
    data() {
      return {data}
    },
  }
</script>

<style>
#app {
}
</style>
