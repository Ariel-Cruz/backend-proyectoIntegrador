import { Router } from "express";
import { AsignarCurso, QuitarCurso, createRuta, deleteRuta, getRuta, getRutas, updateRuta } from "../controllers/rutas.controllers.js";

const router = Router();
//rutas
router.get("/rutas", getRutas);

router.post("/rutas", createRuta)

router.put("/rutas/:id", updateRuta)

router.delete("/rutas/:id", deleteRuta)

router.get("/rutas/:id", getRuta)

//asignar curso a ruta
router.put("/asignar-curso/:id", AsignarCurso )

//eliminar curso de ruta
router.delete("/eliminar-curso/:id", QuitarCurso )

export default router;