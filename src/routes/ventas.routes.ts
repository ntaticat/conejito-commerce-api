import { Router } from "express";
import VentasController from "../controllers/ventas.controller";

const ventasController = new VentasController();

const router = Router();

router.get("/", ventasController.getVentas);
router.get("/:id", ventasController.getVenta);
router.post("/", ventasController.postVenta);

export default router;