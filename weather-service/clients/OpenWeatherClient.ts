const axios = require('axios')

export class OpenWeatherClient {
  apiKey: string | undefined
  baseUrl: string
  weatherUrl: string

  constructor() {
    this.apiKey = process.env.OPEN_WEATHER_API_KEY
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/'
    this.weatherUrl = '/weather'
  }

  getWeatherByZip(zipCode: string) {
    const params = {
      zip: zipCode
    }
    return this.doRequest(this.weatherUrl, 'get', params)
  }

  async doRequest(url: string, method: string, params = {}) {
    const config = {
      method,
      baseURL: this.baseUrl,
      url,
      params: { ...params, APPID: this.apiKey }
    }

    try {
      const { data } = await axios(config)
      return data ? data : null
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }
}
