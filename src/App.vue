<template>
  <div class="app">
    <POTDResults />
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from './AppState'
import { potdService } from './services/POTDService'
import POTDResults from './components/POTDResults'


export default {
  name: 'App',
  setup () {
    const state = reactive({
      potd: computed(() => AppState.photoOfTheDay)
    })
    return {
      state,
      async getPOTD() {
        try {
          await potdService.setActive()
        } catch(err) {
          console.error(err)
        }
      }
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    POTDResults
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
