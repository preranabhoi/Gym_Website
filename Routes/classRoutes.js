import express from "express"
import Class from "../models/Class.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const classes = await Class.find()
    res.json(classes)
})

router.post("/", async (req, res) => {
    const newClass = new Class(req.body)
    const saved = await newClass.save()
    res.json(saved)
})

export default router
