import express from "express";
import { getTrainers, createTrainer } from "../Controllers/trainerController.js";

const router = express.Router();

router.get("/", getTrainers);
router.post("/", createTrainer);

export default router;
