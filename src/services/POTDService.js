import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'
import {logger} from '../utils/Logger'

class POTDService {
//   async searchPictures(query) {
//     const res = await nasaApi.get(query)
//     AppState.photos = res.data.results
//   }

  async setActive(potd) {
      if(!potd.id) {
        let today = new Date();
        let day = this.fixDate(today.getDate());
        let month = this.fixDate(1 + today.getMonth());
        let year = today.getFullYear()
        let currDate = `${year}-${month}-${day}`
        const res = await nasaApi.get("apod?date="+ currDate + "&api_key=7TDfScPMMzWQWGcSGSQeNBvAqaMycsXx7PpaCaTA")
        AppState.photoOfTheDay = res.data
        //logger.log(AppState.photoOfTheDay.explanation)
      } else {
          AppState.photoOfTheDay = potd
          logger.log(potd)
      }
        
  }

  async setSelectedPOTD() {
        let date = document.getElementById("selectedDate").value
      logger.log("Date: " + date)
        const res = await nasaApi.get("apod?date="+ date + "&api_key=7TDfScPMMzWQWGcSGSQeNBvAqaMycsXx7PpaCaTA")
        AppState.photoOfTheDay = res.data
        //logger.log(AppState.photoOfTheDay.explanation)
  }

  async setRandomPOTD() {
        const res = await nasaApi.get("apod?date="+ this.getRandomDate() + "&api_key=7TDfScPMMzWQWGcSGSQeNBvAqaMycsXx7PpaCaTA")
        AppState.photoOfTheDay = res.data
  }

  getRandomDate() {
      let month = this.fixDate(1 + Math.floor(Math.random() * 12))
      let day = this.fixDate(1 + Math.floor(Math.random() * 28))
      let year = 1996 + Math.floor(Math.random() * 25)

      return `${year}-${month}-${day}`
  }

  fixDate(dateNum) {
    if(dateNum < 10) {
        dateNum = '0' + dateNum
    }

    return dateNum
  }
}

export const potdService = new POTDService()