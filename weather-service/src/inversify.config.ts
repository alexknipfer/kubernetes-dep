import { Container, injectable, decorate } from 'inversify'
import { ExpressServer } from './server/server'
import 'reflect-metadata'
import { OpenWeatherClientImpl } from './clients/OpenWeatherClientImpl'
import { RegistrableController } from './interfaces/RegistrableController'
import { TYPES } from './models/InversifyTypes'
import { WeatherByZipCodeController } from './routes/WeatherByZipCodeController'

const container = new Container()

// Services
bindClass(TYPES.Server, ExpressServer)
bindClass(TYPES.OpenWeatherClient, OpenWeatherClientImpl)

// Registrable controllers
bindClass<RegistrableController>(TYPES.Controller, WeatherByZipCodeController)

function bindClass<InterfaceType>(type: symbol, classToBind: any) {
  decorate(injectable(), classToBind)
  container
    .bind<InterfaceType>(type)
    .to(classToBind)
    .inSingletonScope()
}

export default container
