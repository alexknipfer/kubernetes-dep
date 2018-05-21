import * as express from 'express'
import { inject } from 'inversify'
import { OpenWeatherClient } from '../interfaces/OpenWeatherClient'
import { RegistrableController } from '../interfaces/RegistrableController'
import { InversifyTypes } from '../models/InversifyTypes'

export class WeatherByZipRouteController implements RegistrableController {
  private routePath: string = '/api/getWeatherByZip/:zipCode'

  constructor(
    @inject(InversifyTypes.OpenWeatherClient)
    private weatherClient: OpenWeatherClient
  ) {}

  public register(app: express.Application) {
    app.get(
      this.routePath,
      async (req: express.Request, res: express.Response) => {
        const zipCode = req.params.zipCode
        const weather = await this.weatherClient.getWeatherByZip(zipCode)
        res.json({ weather })
      }
    )
  }
}
