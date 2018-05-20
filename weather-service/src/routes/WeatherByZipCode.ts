import * as express from 'express'
import { OpenWeatherClient } from '../clients/OpenWeatherClient'

export class WeatherByZipCode {
  private routePath: string = '/api/getWeatherByZip/:zipCode'
  private weatherClient: any

  constructor(app: express.Application) {
    app.get(this.routePath, this.routeHandler())
    this.weatherClient = new OpenWeatherClient()
  }

  private routeHandler(): express.Handler {
    return async (req: express.Request, res: express.Response) => {
      const zipCode = req.params.zipCode
      const weather = await this.weatherClient.getWeatherByZip(zipCode)
      res.json({ weather })
    }
  }
}
