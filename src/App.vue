<template>
  <div id="app">
    <Create />
    <hr>
    <Search />
    <TodoList />
  </div>
</template>

<script>
import Create from './components/Create.vue'
import Search from './components/Search.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    Create,
    Search,
    TodoList
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
button {
  height: 20px;
  width: 80px;
  margin-left: 5px;
  background-color: firebrick;
  color: white;
}
</style>
