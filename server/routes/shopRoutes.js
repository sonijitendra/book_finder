import express from "express";
import { createShop, getShops } from "../controllers/shopController.js";
import { protect } from "../middleware/authMiddleware.js";

export const shopRouter = express.Router();

shopRouter.route("/").get(getShops).post(protect, createShop);
