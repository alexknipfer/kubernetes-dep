import { WeatherResponse } from '../models/WeatherResponse'

export interface OpenWeatherClient {
  /**
   * Gets the weather for a specific zip code
   * @param zipCode zip code of city to get weather for
   */
  getWeatherByZip(zipCode: string): Promise<WeatherResponse>
}
