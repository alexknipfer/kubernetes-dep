import * as express from 'express';
export declare class Routes {
    private app;
    constructor(app: express.Application);
    defaultRoute(req: express.Request, res: express.Response): void;
    paths(app: express.Application): void;
}
