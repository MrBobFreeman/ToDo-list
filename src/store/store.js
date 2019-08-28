import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
let id = 0;

export default new Vuex.Store({
    state: {
        todoList: [],
    },
    plugins: [createPersistedState()],
    mutations: {
        todoCreate(state, title) {
            let todo = {
                id: id++,
                body: title,
                done: false,
                createAt: new Date()
            };
            state.todoList.push(todo);
        },
        todoUpdate(state, todo) {
            state.todoList.find((i) => i === todo.id);
            
  

        },
        todoDelete(state, todo) {
            state.todoList.splice(state.todoList.indexOf(todo), 1);

        }

    },
    actions: {
        todoCreate({commit}, {title}){
            commit('todoCreate', title);
        }

    }
});

