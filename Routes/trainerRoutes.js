import express from "express"
import Trainer from "../models/Trainer.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const trainers = await Trainer.find()
    res.json(trainers)
})

router.post("/", async (req, res) => {
    const trainer = new Trainer(req.body)
    const saved = await trainer.save()
    res.json(saved)
})

export default router
