<template>
  <div id="app">
    <taskList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import taskList from './components/home.vue'

export default {
  name: 'app',
  components: {
    taskList
  }
}
</script>
