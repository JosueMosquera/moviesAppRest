"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbCredentials_1 = require("./dbCredentials");
const db = new sequelize_1.Sequelize(dbCredentials_1.dbCredentials.DATABASENAME, dbCredentials_1.dbCredentials.USERDB, dbCredentials_1.dbCredentials.PASDB, {
    host: dbCredentials_1.dbCredentials.HOSTDB,
    dialect: 'mysql'
    //loggin: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map