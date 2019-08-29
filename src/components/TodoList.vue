<template lang='pug'>
  div
    ul
      li(v-for='(todo, index) in todoList')
        div.todo
          div        
            b {{index+1}}.
            em {{" " + todo.body}}
          div
            button(type="button" @click="todoDelete(todo)" ) Удалить
          
</template>

<script>
export default {
  name: "TodoList",
  data: () => ({}),
  computed: {
    todoList() {
      if (this.$store.state.search.length >= 3) {
        let regSearch = new RegExp(this.$store.state.search);
        let resultSearch = this.$store.state.todoList.filter(todo =>
          todo.body.match(regSearch)
        );
        return resultSearch.slice(0,10);
      }
      return this.$store.state.todoList;
    }
  },
  methods: {
    todoDelete(todo) {
      this.$store.commit("todoDelete", todo);
    }
  }
};
</script>

<style>
ul {
  padding-inline-start: 0px;
}
li {
  list-style: none;
  padding: 1px 20px;
}
.todo {
  background-color: rgb(216, 211, 211);
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
