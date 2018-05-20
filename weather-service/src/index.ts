import container from './inversify.config'
import { Server } from './interfaces/Server'
import { TYPES } from './models/InversifyTypes'

const server: Server = container.get<Server>(TYPES.Server)

server.startServer()
