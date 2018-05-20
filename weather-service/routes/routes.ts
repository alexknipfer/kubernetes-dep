import * as express from 'express'
import { WeatherByZipCode } from './WeatherByZipCode'

export class Routes {
  defaultRoute(req: express.Request, res: express.Response) {
    res.json({ defaultRoute: 'Your on the default route.' })
  }

  paths(app: express.Application) {
    new WeatherByZipCode(app)

    app.get('/', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res)
    })

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res)
    })
  }
}
