import { Router } from "express";
import { createRuta, deleteRuta, getRuta, getRutas, updateRuta } from "../controllers/rutas.controllers.js";

const router = Router();
//rutas
router.get("/rutas", getRutas);

router.post("/rutas", createRuta)

router.put("/rutas/:id", updateRuta)

router.delete("/rutas/:id", deleteRuta)

router.get("/rutas/:id", getRuta)


export default router;