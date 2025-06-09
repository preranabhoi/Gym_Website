import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"

import classRoutes from "./routes/classRoutes.js"
import trainerRoutes from "./routes/trainerRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Gym API is running')
})

app.use("/api/classes", classRoutes)
app.use("/api/trainers", trainerRoutes)
app.use("/api/contact", contactRoutes)

// Connect to DB
db()

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
