import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    taskList: [],
    titleSearch: ""
  },

  actions: {
    createTask({ commit }, title) {
      const task = {
        title: title,
        createAt: new Date()
      };
      commit("ADD_TASK", task);
    },

    deleteTask({ commit, state }, task) {
      const index = state.taskList.indexOf(task);
      commit("DELETE_TASK", index);
    }
  },

  mutations: {
    ADD_TASK(state, task) {
      state.taskList.push(task);
    },

    DELETE_TASK(state, index) {
      state.taskList.splice(index, 1);
    },

    SET_TITLE_SEARCH(state, title) {
      state.titleSearch = title;
    }
  }
});
