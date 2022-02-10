import { Router } from "express";
import CategoriasController from "../controllers/categorias.controller";

const categoriasController = new CategoriasController();

const router = Router();

router.post("/", categoriasController.postCategoria);
router.put("/:id", categoriasController.putCategoria);

export default router;