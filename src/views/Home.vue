
<template>
  <div id="home">
    <main id="todolist">
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>

      <form name="newform" v-on:submit.prevent="addItem" :class="formError ? 'error': ''">
        <label for="newitem">Add to the todo list</label>
        <input
          type="text"
          name="newitem"
          id="newitem"
          v-model="newitem"
          :placeholder="formError ? 'Please enter a value here.': ''"
        />
        <button type="submit">Add item</button>
      </form>
      <div class="tabgroup">
        <div class="button-group">
          <button
            :class="activeTab === 'allTasks' ? 'active': ''"
            @click="activeTab = 'allTasks'"
          >All</button>
          <button
            :class="activeTab === 'completed' ? 'active': ''"
            @click="activeTab = 'completed'"
          >Completed</button>
          <button
            :class="activeTab === 'incomplete' ? 'active': ''"
            @click="activeTab = 'incomplete'"
          >Incomplete</button>
        </div>
      </div>
      <template v-if="todosToBind.length">
        <toggle-button
          v-if="activeTab === 'allTasks'"
          label="Move done items at the end?"
          name="todosort"
          v-on:clicked="clickontoogle"
          :sortByStatus="sortByStatus"
        />
        <transition-group name="todolist" tag="ul">
          <li
            v-for="item in todosToBind"
            v-bind:class="item.done ? 'done' : ''"
            v-bind:key="item.id"
          >
            <span class="label">{{item.label}}</span>
            <div class="actions">
              <button
                class="btn-picto"
                type="button"
                v-on:click="markAsDoneOrUndone(item)"
                v-bind:aria-label="item.done ? 'Undone' : 'Done'"
                v-bind:title="item.done ? 'Undone' : 'Done'"
              >
                <i
                  aria-hidden="true"
                  class="material-icons"
                >{{ item.done ? 'check_box' : 'check_box_outline_blank' }}</i>
              </button>
              <button
                class="btn-picto"
                type="button"
                v-on:click="deleteItemFromList(item)"
                aria-label="Delete"
                title="Delete"
              >
                <i aria-hidden="true" class="material-icons">delete</i>
              </button>
            </div>
          </li>
        </transition-group>
      </template>
      <p v-else class="emptylist">Your task list is empty.</p>
    </main>
  </div>
</template>

<script>
/* eslint-disable max-len */
import { mapGetters, mapActions } from 'vuex';

const ToggleButton = () => import('@/components/ToggleButton');
export default {
  name: 'todo_app',
  components: {
    ToggleButton,
  },
  data() {
    return {
      formError: false,
      newitem: '',
      activeTab: 'allTasks',
    };
  },
  methods: {
    ...mapActions([
      'addToDo',
      'markTask',
      'deleteFromList',
      'updateSortByState',
    ]),
    addItem() {
      if (this.newitem.length <= 0) {
        this.formError = true;
        return;
      }
      this.addToDo({
        id: this.allToDoCount + 1,
        label: this.newitem,
        done: false,
        createdAt: new Date().getTime(),
      });
      this.newitem = '';
      this.formError = false;
    },
    markAsDoneOrUndone(item) {
      this.markTask(item);
    },
    deleteItemFromList(item) {
      this.deleteFromList(item);
    },
    clickontoogle(active) {
      this.updateSortByState(active);
    },
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'doneTodos',
      'notDoneTodos',
      'doneTodosCount',
      'notDoneTodosCount',
      'allToDoCount',
      'sortByStatus',
    ]),
    allToDosList() {
      if (this.sortByStatus) {
        const notDoneTodos = JSON.parse(JSON.stringify(this.notDoneTodos));
        const doneTodos = JSON.parse(JSON.stringify(this.doneTodos));
        return [
          ...notDoneTodos.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
          ...doneTodos.sort((a, b) => (a.completedAt < b.completedAt ? 1 : -1)),
        ];
      }
      const allTodos = JSON.parse(JSON.stringify(this.allTodos));
      return allTodos.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
    todosToBind() {
      if (this.activeTab === 'allTasks') {
        return this.allToDosList;
      }
      if (this.activeTab === 'completed') {
        const doneTodos = JSON.parse(JSON.stringify(this.doneTodos));
        return doneTodos.sort((a, b) => (a.completedAt < b.completedAt ? 1 : -1));
      }
      const notDoneTodos = JSON.parse(JSON.stringify(this.notDoneTodos));
      return notDoneTodos.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
  },
};
</script>
