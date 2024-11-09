<template>
  <div id="app">
    <h1>32 Bits Game Store</h1>
    <GameList />
  </div>
</template>

<script>
import GameList from './components/GameList.vue'

export default {
  name: 'App',
  components: {
    GameList
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>