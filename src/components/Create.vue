<template lang="pug">
  .input-group.mx-auto.mt-3(style="width: 50%")
    input.form-control.rounded-lg(placeholder="Новая задача" type="text" v-model="title")
    button.btn.btn-primary.ml-1(@click="todoCreate") Добавить
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

input {
  width: 50%;
}
</style>
