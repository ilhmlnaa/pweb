import express from "express";
import {
  getMhs,
  getMhsByNpm,
  createMhs,
  updateMhs,
  deleteMhs,
} from "../controllers/mhsController.js";

const router = express.Router();

router.get("/mhs", getMhs);
router.get("/mhs/npm/:npm", getMhsByNpm);
router.post("/mhs", createMhs);
router.patch("/mhs/:npm", updateMhs);
router.delete("/mhs/:npm", deleteMhs);

export default router;
