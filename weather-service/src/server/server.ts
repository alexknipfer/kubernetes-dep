import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as dotenv from 'dotenv'
import { Server } from '../interfaces/Server'
import container from '../inversify.config'
import { RegistrableController } from '../interfaces/RegistrableController'
import { TYPES } from '../models/InversifyTypes'

export class ExpressServer implements Server {
  protected server: express.Application

  constructor() {
    dotenv.config()

    this.server = express()

    this.server.use(helmet())
    this.server.use(bodyParser.json())
    this.server.use(cors())

    const controllers: RegistrableController[] = container.getAll<
      RegistrableController
    >(TYPES.Controller)
    controllers.forEach(controller => controller.register(this.server))
  }

  public startServer() {
    const port: number | string = process.env.PORT || 8080
    this.server.listen(port, () => {
      console.log(`Weather service running on port ${port}`)
    })
  }
}
