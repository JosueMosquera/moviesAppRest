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
exports.deleteActor = exports.putActor = exports.postActor = exports.getActor = exports.getActores = void 0;
const actor_1 = __importDefault(require("../models/actor"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const cloudinaryCloud = cloudinary_1.default.v2;
cloudinaryCloud.config({
    cloud_name: 'dzz16rbdb',
    api_key: '186842746161464',
    api_secret: '41d-ukG-vs87Pkb19nyLdZ4sH0c'
});
const getActores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actores = yield actor_1.default.findAll();
    res.json(actores);
});
exports.getActores = getActores;
const getActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const actor = yield actor_1.default.findByPk(id);
    if (actor) {
        res.json(actor);
    }
    else {
        res.status(404).json({
            msg: `el actor con id ${id} no existe en la db`
        });
    }
});
exports.getActor = getActor;
const postActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { body } = req;
    const fileCloudinary = (_a = req.files) === null || _a === void 0 ? void 0 : _a.foto;
    try {
        const existeNombre = yield actor_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existeNombre) {
            return res.status(400).json({
                msg: `Ya existe un actor con el nombre ${body.nombre}`
            });
        }
        const actor = new actor_1.default(body);
        if (fileCloudinary) {
            const { secure_url } = yield cloudinaryCloud.uploader.upload(fileCloudinary === null || fileCloudinary === void 0 ? void 0 : fileCloudinary.tempFilePath);
            actor.foto = secure_url;
        }
        yield actor.save();
        res.json(actor);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
});
exports.postActor = postActor;
const putActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const actor = yield actor_1.default.findByPk(id);
        if (actor) {
            yield actor.update(body);
            res.json(actor);
        }
        else {
            return res.status(404).json({
                msg: `el actor con id ${id} no existe en la db`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'error'
        });
    }
});
exports.putActor = putActor;
const deleteActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const actor = yield actor_1.default.findByPk(id);
        if (actor) {
            yield actor.update({ estado: false });
            res.json(actor);
        }
        else {
            return res.status(404).json({
                msg: `el actor con id ${id} no existe en la db`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'error'
        });
    }
});
exports.deleteActor = deleteActor;
//# sourceMappingURL=actores.js.map