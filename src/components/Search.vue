<template lang="pug">
  input.form-control.rounded-lg.mx-auto.my-3(
      placeholder="Найти задачу" 
      type="text" 
      style="width: 30%"
      :value="titleSearch" 
      @input="onTaskSearch")
</template>

<script>
export default {
  name: "Search",

  computed: {
    titleSearch() {
      return this.$store.state.titleSearch;
    }
  },
  methods: {
    onTaskSearch(event) {
      this.$store.commit("SET_TITLE_SEARCH", event.target.value);
    }
  }
};
</script>
