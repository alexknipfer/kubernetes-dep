import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as dotenv from 'dotenv'
import * as routes from './routes/routes'

export class App {
  protected app: express.Application

  constructor(PORT: number = 8080) {
    const port = process.env.PORT || PORT
    dotenv.config()

    this.app = express()

    this.app.use(helmet())
    this.app.use(bodyParser.json())
    this.app.use(cors())

    let __routes = new routes.Routes()
    __routes.paths(this.app)

    this.app.listen(port, () => {
      console.log(`Weather service running on port ${port}`)
    })
  }
}
