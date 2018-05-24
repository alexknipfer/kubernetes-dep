import { InversifyConfiguration } from './inversify.config'
import { InversifyTypes } from './models/InversifyTypes'
import { ExpressServer } from './server/server'
import { OpenWeatherClientImpl } from './clients/OpenWeatherClientImpl'
import { WeatherByZipRouteController } from './routeControllers/WeatherByZipRouteController'
import { DefaultRouteController } from './routeControllers/DefaultRouteController'

// Services
InversifyConfiguration.decorateAndBind(InversifyTypes.Server, ExpressServer)
InversifyConfiguration.decorateAndBind(
  InversifyTypes.OpenWeatherClient,
  OpenWeatherClientImpl
)

// Registrable Controllers
InversifyConfiguration.decorateAndBind(
  InversifyTypes.Controller,
  WeatherByZipRouteController
)
InversifyConfiguration.decorateAndBind(
  InversifyTypes.Controller,
  DefaultRouteController
)
