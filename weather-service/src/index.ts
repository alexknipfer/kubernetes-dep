import container from './inversify.config'
import { Server } from './interfaces/Server'
import { InversifyTypes } from './models/InversifyTypes'

const server: Server = container.get<Server>(InversifyTypes.Server)

server.startServer()
