<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/VuexTest">Vuex Test</router-link>
    <router-link to="/unit-testing">Unit Testing</router-link>
    <router-view/>
  </div>
</template>

<script>/* eslint-disable indent */
    export default {
        name: 'App'
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
