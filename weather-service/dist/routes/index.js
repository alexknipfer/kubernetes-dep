"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherByZipCode_1 = require("./WeatherByZipCode");
class Routes {
    constructor(app) {
        this.app = app;
    }
    defaultRoute(req, res) {
        res.json({ defaultRoute: 'Your on the default route.' });
    }
    paths(app) {
        new WeatherByZipCode_1.WeatherByZipCode(app);
        app.get('/', (req, res) => {
            this.defaultRoute(req, res);
        });
        app.get('*', (req, res) => {
            this.defaultRoute(req, res);
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map