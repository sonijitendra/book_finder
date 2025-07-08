import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

export const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(protect, addProduct);
