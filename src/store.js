import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersistLocalStorage = new VuexPersist({
  key: 'local-storage',
  storage: localStorage,
});

export default new Vuex.Store({
  state: {
    todos: [],
    sortByStatus: false,
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    notDoneTodos: state => state.todos.filter(todo => !todo.done),
    doneTodosCount: state => state.todos.filter(todo => todo.done).length,
    notDoneTodosCount: state => state.todos.filter(todo => !todo.done).length,
    allToDoCount: state => state.todos.length,
    // allTodos: (state, getters) => [...getters.notDoneTodos, ...getters.doneTodos],
    allTodos: state => state.todos,
    sortByStatus: state => state.sortByStatus,
  },
  mutations: {
    mutationAddToDo: (state, payload) => {
      state.todos.push(payload);
    },
    mutationMarkAsDoneOrUndone: (state, payload) => {
      const taskToUpdate = state.todos.find(task => task.id === payload.id);
      if (!taskToUpdate.done) {
        taskToUpdate.completedAt = new Date().getTime();
      }
      taskToUpdate.done = !taskToUpdate.done;
    },
    mutationDeleteItemFromList: (state, payload) => {
      state.todos = state.todos.filter(task => task.id !== payload.id);
    },
    mutationUpdateSortByState: (state, payload) => {
      state.sortByStatus = payload;
    },
  },
  actions: {
    addToDo: ({ commit }, payload) => {
      commit('mutationAddToDo', payload);
    },
    markTask: ({ commit }, payload) => {
      commit('mutationMarkAsDoneOrUndone', payload);
    },
    deleteFromList: ({ commit }, payload) => {
      commit('mutationDeleteItemFromList', payload);
    },
    updateSortByState: ({ commit }, payload) => {
      commit('mutationUpdateSortByState', payload);
    },
  },
  plugins: [vuexPersistLocalStorage.plugin],
});
