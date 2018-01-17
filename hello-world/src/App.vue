<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1> {{ title }} </h1>
    <button type="button" name="button" v-on:click="reverse">reverse</button>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data() {
    return {
      title: "Vue is Awesome!"
    }
  },
  methods: {
    reverse: function() {
      this.title = this.title.split('').reverse().join('');
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
  h1 {
    color: pink;
  }
</style>