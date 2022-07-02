import express from 'express'
import { getWaktu, getLastWaktu, createWaktu } from '../controllers/WaktuController.js'
const router = express.Router()

router.get('/', getWaktu)
router.get('/:code', getLastWaktu)
router.post('/',  createWaktu)

export default router