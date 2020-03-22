<template>
  <div id="app">
    <Create />
    <hr />
    <Search />
    <TodoList />
    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
  </div>
</template>

<script>
import Create from "./components/Create.vue";
import Search from "./components/Search.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    Create,
    Search,
    TodoList
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
