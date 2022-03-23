<template>
  <v-row class="flex-column relative">

    <div class="background"/>

    <div v-if="todos" class="todos-content">

      <TodoHeader :loading="$fetchState.pending"/>

      <ul
        v-for="todo in todos"
        :key="todo.id"
        class="mb-2 pr-2"
        @click="onClickTodo(todo.title)"
      >
        <li class="my-card pl-2">
          <nuxt-link no-prefetch :to="'/todos/' + todo.id">{{ todo.title }}</nuxt-link>
        </li>
      </ul>

    </div>

  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import {todoFields, TodoItem, TodoState, TodoStates} from "~/store/todo/state";
import {TodoActionTypes, useTodoDispatch} from "~/store/todo/actions";

export default Vue.extend({

  name: 'UsersPage',

  middleware: 'auth',
  fetch: async function () {
    const todos = this.$store.state.todo[TodoStates.todos] as TodoState[TodoStates.todos];
    if (todos?.length === 0) {
      await useTodoDispatch(this.$store.dispatch, TodoActionTypes.fetch, undefined)
    }
  },
  head: {
    title: 'Users Page',
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'Users page description'
    }]
  },

  data() {
    return {
      dialog: false
    }
  },

  computed: {
    todos(): TodoItem[] {
      return this.$store.getters[todoFields.getters.todos]
    }
  },

  methods: {
    onClickTodo(id: string) {
      console.log(id)
    }
  }

})
</script>

<style scoped>
.background {
  background: url("~assets/back.png");
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(4px);
}

.todos-content {
  z-index: 1;
}

</style>
