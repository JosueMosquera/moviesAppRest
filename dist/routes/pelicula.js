"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculas_1 = require("../controllers/peliculas");
const router = (0, express_1.Router)();
router.get('/', peliculas_1.getPeliculas);
router.get('/:id', peliculas_1.getPelicula);
router.post('/', peliculas_1.postPelicula);
router.put('/:id', peliculas_1.putPelicula);
router.delete('/:id', peliculas_1.deletePelicula);
exports.default = router;
//# sourceMappingURL=pelicula.js.map