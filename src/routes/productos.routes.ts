import { Router } from "express";
import ProductosController from "../controllers/productos.controller";

const productosController = new ProductosController();

const router = Router();

router.get("/", productosController.getProductos);

export default router;