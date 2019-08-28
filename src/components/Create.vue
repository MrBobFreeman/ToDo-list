<template lang='pug'>
  div
    input(type="text" value ='Новая задача' v-model="title")
    button(@click="addTask") Добавить задачу
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    title: ''
  }),
  methods: {
    addTask: function() {
      this.$store.commit("todoCreate", this.title);
      this.title='';
    }
  }
};
</script>

<style>
</style>
