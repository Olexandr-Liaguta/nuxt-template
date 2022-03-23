<template>
  <div class="pa-2" ref="observerItem"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  name: 'MyIntersectionObserver',

  mounted() {
    const options: IntersectionObserverInit = {
      threshold: 0
    }

    const callback: IntersectionObserverCallback = ((entries, observer) => {
      console.log('appear')
      this.$emit('appear')
      observer.disconnect()
    })

    const observer = new IntersectionObserver(callback, options)

    const target = this.$refs.observerItem as Element;
    observer.observe(target)

    console.log(observer)
  }
})

</script>
