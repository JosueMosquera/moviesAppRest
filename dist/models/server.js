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
const express_1 = __importDefault(require("express"));
const actor_1 = __importDefault(require("../routes/actor"));
const pelicula_1 = __importDefault(require("../routes/pelicula"));
const peliculaActor_1 = __importDefault(require("../routes/peliculaActor"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
class Server {
    constructor() {
        this.apiPaths = {
            actor: '/api/actor',
            pelicula: '/api/pelicula',
            peliculaActor: '/api/peliculaActor'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //conectarse a la db
        this.dbConnection();
        //ejecutar middlewares
        this.middlewares();
        // definir las rutas
        this.routes();
    }
    //conectar base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true
        }));
    }
    routes() {
        this.app.use(this.apiPaths.actor, actor_1.default);
        this.app.use(this.apiPaths.pelicula, pelicula_1.default);
        this.app.use(this.apiPaths.peliculaActor, peliculaActor_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map