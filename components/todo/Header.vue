<template>
  <v-col class="text-center my-6">
    <v-row justify="center" align="center">
      <h3 class="mr-2">
        {{ loading ? 'Loading...' : 'Todos' }}
      </h3>
      <div class="d-flex align-center">
        <img class="todos__img" src="~/assets/todos.png" alt="">
      </div>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  name: 'TodoHeader',

  props: {
    loading: Boolean
  }

})
</script>

<style scoped>
.todos__img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
