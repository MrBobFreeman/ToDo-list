<template lang='pug'>
  div.search
    input(placeholder='Найти задачу' type="text" :value="todoSearch" @input='searchSet')
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
    searchSet(event) {
      this.$store.commit("searchSet", event.target.value);
    }
  }
};
</script>

<style scoped>
.search {
  margin: 10px;
}
input{
  width: 30%;
}
</style>
