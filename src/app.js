const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./routes");
require('./database/db');

class App {
    constructor() {
        this.server = express();
        this.server.use(cors());
        this.server.use(bodyParser.urlencoded({extended:true}));
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server