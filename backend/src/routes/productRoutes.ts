import { Router } from "express";
import { getProducts } from "../controllers/productController";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.get("/", validateToken, getProducts);

export default router;