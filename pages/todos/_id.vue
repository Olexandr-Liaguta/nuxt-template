<template>
  <v-row class="flex-column">
    <v-col class="text-center" :style="{color: todo.completed ? 'green' : 'red'}">
      Todos {{ todo.title }}
    </v-col>
    <v-col>
      <nuxt-link to="/todos">
        Back
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {Context} from "@nuxt/types";
import {TodoItem} from "~/store/todo/state";

export default {
  name: 'TodoId',

  async asyncData({$axios, params}: Context) {
    const todo = await $axios.$get<TodoItem>('https://jsonplaceholder.typicode.com/todos/' + params.id)
    return {todo}
  },

  data() {
    return {
      todo: {} as TodoItem
    }
  },

  validate({params}: Context): Promise<boolean> | boolean {
    return /^\d+$/.test(params.id)
  }
}
</script>
