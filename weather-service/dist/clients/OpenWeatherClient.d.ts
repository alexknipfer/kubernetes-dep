declare const axios: any;
declare class OpenWeatherClient {
    apiKey: string | undefined;
    baseUrl: string;
    weatherUrl: string;
    constructor();
    getWeatherByZip(zipCode: string): Promise<any>;
    doRequest(url: string, method: string, params?: {}): Promise<any>;
}
