<template>
  <div id="app">
    <Create />
    <Search />
    <TaskList />
  </div>
</template>

<script>
import Create from "./components/Create.vue";
import Search from "./components/Search.vue";
import TaskList from "./components/Task-list.vue";

export default {
  name: "app",
  components: {
    Create,
    Search,
    TaskList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
