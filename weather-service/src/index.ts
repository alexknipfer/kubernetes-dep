import { Server } from './models/Server'
import container, { TYPES } from './inversify.config'

const server: Server = container.get<Server>(TYPES.Server)

server.startServer()
