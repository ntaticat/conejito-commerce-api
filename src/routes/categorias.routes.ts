import { Router } from "express";
import CategoriasController from "../controllers/categorias.controller";

const categoriasController = new CategoriasController();

const router = Router();

router.get("/", categoriasController.getCategorias);
router.get("/:id", categoriasController.getCategoria);
router.post("/", categoriasController.postCategoria);
router.put("/:id", categoriasController.putCategoria);
router.delete("/:id", categoriasController.deleteCategoria);

export default router;