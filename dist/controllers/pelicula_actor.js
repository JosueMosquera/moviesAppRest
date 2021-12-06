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
exports.deletePeliculaActores = exports.putPeliculaActores = exports.postPeliculaActores = exports.getpeliculasActor = exports.getPeliculasActores = void 0;
const actor_pelicula_1 = __importDefault(require("../models/actor_pelicula"));
const getPeliculasActores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const peliculasActores = yield actor_pelicula_1.default.findAll();
    res.json(peliculasActores);
});
exports.getPeliculasActores = getPeliculasActores;
const getpeliculasActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const peliculasActores = yield actor_pelicula_1.default.findByPk(id);
    if (peliculasActores) {
        res.json(peliculasActores);
    }
    else {
        res.status(404).json({
            msg: `la pelicula con id ${id} no existe en la db`
        });
    }
});
exports.getpeliculasActor = getpeliculasActor;
const postPeliculaActores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const pelicula = new actor_pelicula_1.default(body);
        yield pelicula.save();
        res.json(pelicula);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
});
exports.postPeliculaActores = postPeliculaActores;
const putPeliculaActores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pelicula = yield actor_pelicula_1.default.findByPk(id);
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
exports.putPeliculaActores = putPeliculaActores;
const deletePeliculaActores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pelicula = yield actor_pelicula_1.default.findByPk(id);
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
exports.deletePeliculaActores = deletePeliculaActores;
//# sourceMappingURL=pelicula_actor.js.map