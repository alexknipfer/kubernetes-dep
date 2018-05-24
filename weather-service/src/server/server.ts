import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as dotenv from 'dotenv'
import { Server } from '../interfaces/Server'
import { RegistrableController } from '../interfaces/RegistrableController'
import { InversifyTypes } from '../models/InversifyTypes'
import { InversifyConfiguration } from '../inversify.config'

export class ExpressServer implements Server {
  protected server: express.Application

  constructor() {
    dotenv.config()

    this.server = express()

    this.server.use(helmet())
    this.server.use(bodyParser.json())
    this.server.use(cors())

    const controllers: RegistrableController[] = InversifyConfiguration.container.getAll<
      RegistrableController
    >(InversifyTypes.Controller)
    controllers.forEach(controller => controller.register(this.server))
  }

  public startServer() {
    const port: number | string = process.env.PORT || 8080
    this.server.listen(port, () => {
      console.log(`Weather service running on port ${port}`)
    })
  }
}
