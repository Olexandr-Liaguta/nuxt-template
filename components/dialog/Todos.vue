<template>
  <v-col class="mb-4">
    <v-btn @click="dialog = true" color="primary">
      Show dialog
    </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <div v-if="dialog">
        <Card @close="dialog = false"/>
      </div>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DialogTodos',

  data() {
    return {
      dialog: false
    }
  }
})
</script>

<style scoped>
</style>
