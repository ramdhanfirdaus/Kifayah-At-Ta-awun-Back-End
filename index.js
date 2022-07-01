import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

import anggotaRoutes from './routes/AnggotaRoutes.js'
import pendaftaranRoutes from './routes/pendaftaranRoutes.js'
import pembayaranRoutes from './routes/pembayaranRoutes.js'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CONNECTION_URL = 'mongodb://ramdhan29:ramdhan29@cluster0-shard-00-00.ykiy5.mongodb.net:27017,cluster0-shard-00-01.ykiy5.mongodb.net:27017,cluster0-shard-00-02.ykiy5.mongodb.net:27017/?ssl=true&replicaSet=atlas-7n4kh0-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL)
    .then(() => console.log(`Connected to Mongodb.....`))
    .catch((error) => console.log(error.message))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/anggota', anggotaRoutes)
app.use('/pendaftaran', pendaftaranRoutes)
app.use('/pembayaran', pembayaranRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})