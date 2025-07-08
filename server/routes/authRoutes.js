import express from "express";
import { registerUser, authUser } from "../controllers/authController.js";
export const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authUser);
