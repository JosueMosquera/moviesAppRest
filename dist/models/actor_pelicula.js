"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Actor_Pelicula = connection_1.default.define('actor_pelicula', {
    id_pelicula: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_actor: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Actor_Pelicula;
//# sourceMappingURL=actor_pelicula.js.map