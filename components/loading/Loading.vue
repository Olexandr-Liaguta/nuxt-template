<template lang="html">
  <v-overlay v-if="loading" :value="overlay">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({

  name: 'LoadingIndex',

  data() {
    return {
      loading: false,
      overlay: false
    }
  },

  methods: {
    start() {
      this.loading = true
      this.overlay = true
    },

    finish() {
      this.loading = false
      this.overlay = false
    },

    fail(error: any) {
      console.log(error)
    },

    increase(num: number) {
      // console.log(num)
    }
  },

})
</script>
