import { Router } from "express";
import { deletePeliculaActores,getPeliculasActores, getpeliculasActor, postPeliculaActores, putPeliculaActores } from "../controllers/pelicula_actor";
const router = Router();
router.get('/', getPeliculasActores);
router.get('/:id', getpeliculasActor);
router.post('/', postPeliculaActores);
router.put('/:id', putPeliculaActores);
router.delete('/:id', deletePeliculaActores);



export default router