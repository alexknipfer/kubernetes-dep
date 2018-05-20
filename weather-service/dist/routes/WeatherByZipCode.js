"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OpenWeatherClient_1 = require("../clients/OpenWeatherClient");
class WeatherByZipCode {
    constructor(app) {
        this.routePath = '/api/getWeatherByZip/:zipCode';
        app.get(this.routePath, this.routeHandler());
        this.weatherClient = new OpenWeatherClient_1.OpenWeatherClient();
    }
    routeHandler() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const zipCode = req.params.zipCode;
            const weather = yield this.weatherClient.getWeatherByZip(zipCode);
            res.json({ weather });
        });
    }
}
exports.WeatherByZipCode = WeatherByZipCode;
//# sourceMappingURL=WeatherByZipCode.js.map