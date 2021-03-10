<template>
  <div class="text-center">
      <button class="btn btn-primary my-2" @click="setActivePOTD">Get the picture of the day</button>
      <form @submit.prevent="setSelectedPOTD" class="my-2">
          <input type="date" id="selectedDate" name="selectedDate" min="1996-01-01">
          <button type="submit" class="btn btn-primary">Search</button>
      </form>
      <button class="btn btn-primary my-2" @click="setRandomPOTD">Random Image</button>
  </div>
</template>

<script>
import { potdService } from '../services/POTDService'

export default {
  name: 'potd',
  // NOTE props are passed to an object with a defined type
  props: {
    potd: Object
  },
  // NOTE if you want props in setup must pass param
  setup(props) {
    return {
      setActivePOTD() {
        // NOTE to access the props they can be gotten from the props parameter
        potdService.setActive(props.potd)
      },
      setSelectedPOTD() {
          potdService.setSelectedPOTD()
      },
      setRandomPOTD() {
          potdService.setRandomPOTD()
      }
    }
  },
  components: {}
}
</script>

<style scoped>
img {
  width: 100px;
}
</style>