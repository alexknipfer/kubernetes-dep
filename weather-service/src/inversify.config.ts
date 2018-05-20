import { Container, injectable, decorate } from 'inversify'
import { ExpressServer } from './server/server'
import 'reflect-metadata'

export const TYPES = {
  Server: Symbol('Server')
}

const container = new Container()

bindClass(ExpressServer)

function bindClass<InterfaceType>(classToBind: any) {
  decorate(injectable(), classToBind)
  container
    .bind<InterfaceType>(TYPES.Server)
    .to(classToBind)
    .inSingletonScope()
}

export default container
