<template>
  <v-row class="flex-column relative">

    <div class="background"/>

    <div v-if="todos" class="todos-content">

      <TodoHeader :loading="$fetchState.pending"/>

      <DialogTodos/>

      <v-btn @click="onQuery">
        Query
      </v-btn>

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

      <MyIntersectionObserver v-if="isMount" :key="'obs' + itemsCount" @appear="loadMore"/>

      <v-col v-if="loading" class="w-100 d-flex justify-center">
        <v-progress-circular indeterminate/>
      </v-col>

    </div>

  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import {todoFields, TodoItem, TodoState, TodoStates} from "~/store/todo/state";
import MyIntersectionObserver from "~/components/observer/MyIntersectionObserver.vue";

export default Vue.extend({

  name: 'TodosPage',

  components: {MyIntersectionObserver},

  middleware: 'auth',

  fetch: async function () {
    const todos = this.$store?.state.todo[TodoStates.todos] as TodoState[TodoStates.todos];
    if (todos?.length === 0) {
      await this.$store.dispatch(todoFields.actions.fetch)
    }
    this.isMount = true
  },

  head: {
    title: 'Todo Page',
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'Todo page description'
    }]
  },

  watch: {
    '$route.query': '$fetch'
  },

  data() {
    return {
      dialog: false,
      itemsCount: 20,
      loading: false,
      isMount: false
    }
  },

  computed: {
    todos(): TodoItem[] {
      return (this.$store.getters[todoFields.getters.todos] as TodoItem[])
        .slice(0, this.itemsCount)
    },
  },

  methods: {
    onClickTodo(id: string) {
      console.log(id)
    },

    onQuery() {
      this.$router.push({query: {'some': Math.random().toString()}})
    },

    loadMore() {
      if(this.itemsCount > this.todos.length) return

      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.itemsCount += 20
      }, 2000)
      console.log('load more')
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
