"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('moviesapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
    //loggin: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map