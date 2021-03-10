<template>
    <div class="potd text-center mt-5">
        <div class="media row text-light" v-if="state.potd.url">
        <!-- //NOTE props can be accessed directly within the template by name -->
            <div class="col-12" v-if="state.potd.media_type == 'video'">
                <iframe :src="`${state.potd.url}`"></iframe>
            </div>
            <div class="col-12" v-else>
                <img class="mr-3" :src="`${state.potd.url}`" alt="Picture Of The Day">
            </div>
            
            <div class="media-body col-8 offset-2">
                <h5 class="mt-3">{{state.potd.date}}</h5>
                <p class="mx-5">{{state.potd.explanation}}</p>
            </div>
        </div>
        
    </div>
  <div>
      <POTD :potd="state.potd"/>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
import POTD from './POTD'
export default {
  name: 'POTDResults',
  setup() {
    const state = reactive({
      // NOTE computed watches for changes on any of its returned values
      potd: computed(() => AppState.photoOfTheDay)
    })
    return {
      state
    }
  },
  components: {
    POTD
  }
}
</script>

<style scoped>
li {
  cursor: pointer
}
li:hover {
  background-color: rgb(187, 186, 186);
}
img {
    width: 95%;
    height: 100vh;
}
iframe {
    width: 95%;
    height: 100vh;
}
</style>