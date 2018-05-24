import { Server } from './interfaces/Server'
import { InversifyTypes } from './models/InversifyTypes'
import { InversifyConfiguration } from './inversify.config'
import './InversifyBinder'

const server: Server = InversifyConfiguration.container.get<Server>(
  InversifyTypes.Server
)

server.startServer()
