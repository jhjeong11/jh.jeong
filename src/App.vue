<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import MainView from './components/MainView.vue';

export default {
  name: 'App',
  components: {
    MainView,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
