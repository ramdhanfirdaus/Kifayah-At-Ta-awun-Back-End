import express from 'express'
import { getPendaftaran, getPendaftaranByNo, createPendaftaran, updatePendaftaran } from '../controllers/PendaftaranController.js'
const router = express.Router()

router.get('/', getPendaftaran)
router.get('/:no', getPendaftaranByNo)
router.post('/',  createPendaftaran)
router.put('/:no', updatePendaftaran)

export default router