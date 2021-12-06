import { Router } from "express";
import { deleteActor, getActor, getActores, postActor, putActor } from "../controllers/actores";
const router = Router();
router.get('/', getActores);
router.get('/:id', getActor);
router.post('/', postActor);
router.put('/:id', putActor);
router.delete('/:id', deleteActor);



export default router