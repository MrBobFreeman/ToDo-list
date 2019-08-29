import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: [],
        search: ''
    },
    plugins: [createPersistedState()],
    mutations: {
        todoCreate(state, title) {
            let todo = {
                body: title,
                done: false,
                createAt: new Date()
            };
            state.todoList.push(todo);
        },
        todoDelete(state, todo) {
            state.todoList.splice(state.todoList.indexOf(todo), 1);
        },
        searchSet(state, search) {
            state.search = search;
        }
    },
});

