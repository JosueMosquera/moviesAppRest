import { Router } from "express";
import { deletePelicula, getPelicula, getPeliculas, postPelicula, putPelicula } from "../controllers/peliculas";
const router = Router();
router.get('/', getPeliculas);
router.get('/:id', getPelicula);
router.post('/', postPelicula);
router.put('/:id', putPelicula);
router.delete('/:id', deletePelicula);



export default router