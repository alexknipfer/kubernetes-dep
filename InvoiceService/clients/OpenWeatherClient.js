const axios = require('axios')

class OpenWeatherClient {
  constructor() {
    this.apiKey = process.env.OPEN_WEATHER_API_KEY
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/'
    this.weatherUrl = '/weather'
  }

  getWeatherByZip(zipCode) {
    const params = {
      zip: zipCode
    }
    return this.doRequest(this.weatherUrl, 'get', params)
  }

  async doRequest(url, method, params = {}) {
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

module.exports = new OpenWeatherClient()
