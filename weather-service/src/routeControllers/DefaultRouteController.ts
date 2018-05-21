import * as express from 'express'
import { RegistrableController } from '../interfaces/RegistrableController'

export class DefaultRouteController implements RegistrableController {
  public register(app: express.Application) {
    app.get('/', this.defaultRoute)
    app.get('*', this.defaultRoute)
  }

  private defaultRoute(req: express.Request, res: express.Response) {
    res.json({ defaultRoute: 'Your on the default route.' })
  }
}
