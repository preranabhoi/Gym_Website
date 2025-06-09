import express from "express";
import { getClasses, createClass } from "../Controllers/classController.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/", createClass);

export default router;
