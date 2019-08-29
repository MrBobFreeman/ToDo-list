<template lang='pug'>
  div.search
    input(placeholder='Найти задачу' type="text" :value="todoSearch" @input='setSearch')
</template>

<script>
export default {
  name: "Search",
  computed: {
    todoSearch() {
      return this.$store.state.search;
    }
  },
  methods: {
    setSearch(event) {
      this.$store.commit("searchSet", event.target.value);
    }
  }
};
</script>

<style scoped>
.search {
  margin: 10px;
}
.btn_search {
  background-color: darkblue;
  color: white;
}
input{
  width: 30%;
}
</style>
