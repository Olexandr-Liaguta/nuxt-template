<template>
  <v-card>
    <v-card-title id="card-title">
      My card
    </v-card-title>
    <v-card-actions>
      <div class="d-flex justify-end w-100">
        <v-btn @click="$emit('close')" color="error">
          Close
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: 'Card'
})

</script>

<style scoped>

</style>

