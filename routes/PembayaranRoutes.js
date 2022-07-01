import express from 'express'
import { getPembayaran, getPembayaranByBulanTahun, createPembayaran, updatePembayaran } from '../controllers/PembayaranController.js'
const router = express.Router()

router.get('/', getPembayaran)
router.get('/:bulan/:tahun', getPembayaranByBulanTahun)
router.post('/', createPembayaran)
router.put('/', updatePembayaran)

export default router