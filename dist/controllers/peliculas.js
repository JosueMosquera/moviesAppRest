"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePelicula = exports.putPelicula = exports.postPelicula = exports.getPelicula = exports.getPeliculas = void 0;
const pelicula_1 = __importDefault(require("../models/pelicula"));
const getPeliculas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const peliculas = yield pelicula_1.default.findAll();
    res.json(peliculas);
});
exports.getPeliculas = getPeliculas;
const getPelicula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pelicula = yield pelicula_1.default.findByPk(id);
    if (pelicula) {
        res.json(pelicula);
    }
    else {
        res.status(404).json({
            msg: `la pelicula con id ${id} no existe en la db`
        });
    }
});
exports.getPelicula = getPelicula;
const postPelicula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeNombre = yield pelicula_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existeNombre) {
            return res.status(400).json({
                msg: `Ya existe una pelicula con el nombre ${body.nombre}`
            });
        }
        const pelicula = new pelicula_1.default(body);
        yield pelicula.save();
        res.json(pelicula);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
});
exports.postPelicula = postPelicula;
const putPelicula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pelicula = yield pelicula_1.default.findByPk(id);
        if (pelicula) {
            yield pelicula.update(body);
            res.json(pelicula);
        }
        else {
            return res.status(404).json({
                msg: `la pelicula con id ${id} no existe en la db`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'error'
        });
    }
});
exports.putPelicula = putPelicula;
const deletePelicula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pelicula = yield pelicula_1.default.findByPk(id);
        if (pelicula) {
            yield pelicula.update({ estado: false });
            res.json(pelicula);
        }
        else {
            return res.status(404).json({
                msg: `la pelicula con id ${id} no existe en la db`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'error'
        });
    }
});
exports.deletePelicula = deletePelicula;
//# sourceMappingURL=peliculas.js.map