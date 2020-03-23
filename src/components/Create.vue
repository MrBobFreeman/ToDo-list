<template lang="pug">
  .input-group.mx-auto.mt-5.w-50
    input.form-control.rounded-lg(
      placeholder="Новая задача" 
      type="text" 
      v-model="taskTitle")
    button.btn.btn-primary.ml-2(
      @click="createTask") Добавить
    span.fixed-top.my-3.color-red(v-if="isEmptyTitle") Введите название задачи!
</template>

<script>
export default {
  name: "Create",

  data: () => ({
    taskTitle: "",
    isEmptyTitle: false
  }),

  methods: {
    createTask() {
      if (!this.taskTitle) {
        this.isEmptyTitle = true;
        return;
      }

      this.$store.dispatch("createTask", this.taskTitle);
      this.isEmptyTitle = false;
      this.taskTitle = "";
    }
  }
};
</script>
