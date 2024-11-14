import express from "express";
import { authLogin, authRegister } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", authLogin);
router.post("/register", authRegister);

export default router;
