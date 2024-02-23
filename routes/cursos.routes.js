import { Router } from "express";
import { createCurso, deleteCurso, getCurso, getCursos, updateCurso } from "../controllers/cursos.controllers.js";

const router = Router();

router.get("/cursos", getCursos);

router.post("/cursos", createCurso)

router.put("/cursos/:id", updateCurso)

router.delete("/cursos/:id", deleteCurso)

router.get("/cursos/:id", getCurso)

export default router;