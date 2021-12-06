"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pelicula_actor_1 = require("../controllers/pelicula_actor");
const router = (0, express_1.Router)();
router.get('/', pelicula_actor_1.getPeliculasActores);
router.get('/:id', pelicula_actor_1.getpeliculasActor);
router.post('/', pelicula_actor_1.postPeliculaActores);
router.put('/:id', pelicula_actor_1.putPeliculaActores);
router.delete('/:id', pelicula_actor_1.deletePeliculaActores);
exports.default = router;
//# sourceMappingURL=peliculaActor.js.map