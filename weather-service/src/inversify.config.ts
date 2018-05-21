import 'reflect-metadata'
import { Container, injectable, decorate } from 'inversify'
import { ExpressServer } from './server/server'
import { OpenWeatherClientImpl } from './clients/OpenWeatherClientImpl'
import { RegistrableController } from './interfaces/RegistrableController'
import { InversifyTypes } from './models/InversifyTypes'
import { WeatherByZipRouteController } from './routeControllers/WeatherByZipRouteController'
import { DefaultRouteController } from './routeControllers/DefaultRouteController'

const container = new Container()

// Services
bindClass(InversifyTypes.Server, ExpressServer)
bindClass(InversifyTypes.OpenWeatherClient, OpenWeatherClientImpl)

// Registrable controllers
bindClass<RegistrableController>(
  InversifyTypes.Controller,
  WeatherByZipRouteController
)
bindClass<RegistrableController>(
  InversifyTypes.Controller,
  DefaultRouteController
)

function bindClass<InterfaceType>(type: symbol, classToBind: any) {
  decorate(injectable(), classToBind)
  container
    .bind<InterfaceType>(type)
    .to(classToBind)
    .inSingletonScope()
}

export default container
