import express from "express"
import Contact from "../models/Contact.js"
const router = express.Router()

router.post("/", async (req, res) => {
    const contact = new Contact(req.body)
    const saved = await contact.save()
    res.json({ message: "Message sent successfully", saved })
})

export default router
