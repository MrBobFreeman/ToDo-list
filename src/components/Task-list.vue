<template lang="pug">
  div
    ul
      li(v-for='(task, index) in taskList')
        .list-group.w-50.mx-auto
          .list-group-item.d-flex.justify-content-between
            div.my-auto
              span {{index+1}}.
              span {{" " + task.title}}
            div
              span {{date(task.createAt)}}
              button.btn.btn-danger.ml-2(
                type="button" 
                @click="onDeleteTask(task)") Удалить
          
</template>

<script>
import moment from "moment";

export default {
  name: "TodoList",

  computed: {
    taskList() {
      const titleSearch = this.$store.state.titleSearch;
      const taskList = this.$store.state.taskList;

      if (titleSearch.length >= 3) {
        const reg = new RegExp(titleSearch);
        const resultSearch = taskList.filter(item => item.title.match(reg));
        return resultSearch;
      }
      return taskList;
    }
  },
  methods: {
    onDeleteTask(task) {
      this.$store.dispatch("deleteTask", task);
    },

    date(date) {
      return moment(date)
        .locale("ru")
        .format("DD.MM.YYYY, HH:mm");
    }
  }
};
</script>
