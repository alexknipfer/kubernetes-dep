"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
class App {
    constructor(PORT = 8080) {
        const port = process.env.PORT || PORT;
        dotenv.config();
        this.app = express();
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(cors());
        let __routes = new routes.Routes();
        __routes.paths(this.app);
        this.app.listen(port, () => {
            console.log(`Weather service running on port ${port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=server.js.map