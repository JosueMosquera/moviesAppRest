"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actores_1 = require("../controllers/actores");
const router = (0, express_1.Router)();
router.get('/', actores_1.getActores);
router.get('/:id', actores_1.getActor);
router.post('/', actores_1.postActor);
router.put('/:id', actores_1.putActor);
router.delete('/:id', actores_1.deleteActor);
exports.default = router;
//# sourceMappingURL=usuario.js.map