export interface WeatherResponse {
  id: string
  dt: number
  name: string
  cod: 200
  wind: Wind
  main: Main
  base?: string
  weather: Array<Weather>
  sys: Sys
  coord: Coordinate
}

export interface Wind {
  speed: number
  deg: number
}

export interface Main {
  temp: number
  humidity: number
  pressure: number
  temp_min: number
  temp_max: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Sys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}

export interface Coordinate {
  lon: number
  lat: number
}
