"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pelicula = connection_1.default.define('pelicula', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    duracion: {
        type: sequelize_1.DataTypes.STRING
    },
    genero: {
        type: sequelize_1.DataTypes.ENUM('Animadas', 'Romántica', 'Comedia', 'Terror')
    },
    sinopsis: {
        type: sequelize_1.DataTypes.TEXT
    }
});
exports.default = Pelicula;
//# sourceMappingURL=pelicula.js.map