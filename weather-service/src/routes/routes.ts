import * as express from 'express'

export class Routes {
  defaultRoute(req: express.Request, res: express.Response) {
    res.json({ defaultRoute: 'Your on the default route.' })
  }

  paths(app: express.Application) {
    app.get('/', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res)
    })

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res)
    })
  }
}
