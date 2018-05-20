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
const axios = require('axios');
class OpenWeatherClient {
    constructor() {
        this.apiKey = process.env.OPEN_WEATHER_API_KEY;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
        this.weatherUrl = '/weather';
    }
    getWeatherByZip(zipCode) {
        const params = {
            zip: zipCode
        };
        return this.doRequest(this.weatherUrl, 'get', params);
    }
    doRequest(url, method, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                method,
                baseURL: this.baseUrl,
                url,
                params: Object.assign({}, params, { APPID: this.apiKey })
            };
            try {
                const { data } = yield axios(config);
                return data ? data : null;
            }
            catch (error) {
                console.log('ERROR: ', error);
            }
        });
    }
}
exports.OpenWeatherClient = OpenWeatherClient;
//# sourceMappingURL=OpenWeatherClient.js.map