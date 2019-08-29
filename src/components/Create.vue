<template lang='pug'>
  div.create
    input(placeholder='Новая задача' type="text" v-model="title")
    button.btn_add(@click="todoCreate") Добавить
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    title: ""
  }),
  methods: {
    todoCreate() {
      if (this.title !== "") {
        this.$store.commit("todoCreate", this.title);
        this.title = "";
      } else {
        alert("Вы не ввели текст задания!");
      }
    }
  }
};
</script>

<style scoped>
.create {
  margin: 10px;
}
.btn_add{
  background-color: darkgreen;
  color: white;
}
input{
  width: 50%;
}
</style>
