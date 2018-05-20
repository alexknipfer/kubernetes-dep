import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as dotenv from 'dotenv'
import * as routes from '../routes/routes'
import { Server } from '../models/Server'

export class ExpressServer implements Server {
  protected server: express.Application

  constructor() {
    dotenv.config()

    this.server = express()

    this.server.use(helmet())
    this.server.use(bodyParser.json())
    this.server.use(cors())

    let __routes = new routes.Routes()
    __routes.paths(this.server)
  }

  public startServer() {
    const port: number | string = process.env.PORT || 8080
    this.server.listen(port, () => {
      console.log(`Weather service running on port ${port}`)
    })
  }
}
