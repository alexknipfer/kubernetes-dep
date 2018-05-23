import MockAdapter from 'axios-mock-adapter'
import { OpenWeatherClient } from '../../src/interfaces/OpenWeatherClient'
import { OpenWeatherClientImpl } from '../../src/clients/OpenWeatherClientImpl'
import { WeatherResponse } from '../../src/models/WeatherResponse'

describe('Open weather client tests', () => {
  let openWeatherClient: OpenWeatherClient
  let axiosMock

  beforeEach(() => {
    openWeatherClient = new OpenWeatherClientImpl()
    axiosMock = new MockAdapter(axios)
  })

  it('getWeatherByZipCode - Should return weather data', () => {
    const zipCode = 'testZipCode'

    const weatherResponse: WeatherResponse = {
      id: 'id',
      dt: 123,
      name: 'name',
      cod: 200,
      wind: {
        speed: 33,
        deg: 33
      }
    }

    axiosMock.onGet('/weather').reply(200, weatherResponse)

    return openWeatherClient.getWeatherByZip(zipCode).then(result => {
      expect(result).toEqual(weatherResponse)
    })
  })
})
