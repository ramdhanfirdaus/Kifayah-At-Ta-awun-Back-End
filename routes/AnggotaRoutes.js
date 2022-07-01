import express from 'express'
import { getAnggota, getAnggotaByNik, createAnggota, updateAnggota } from '../controllers/AnggotaController.js'
import { upload } from '../helpers/filehelper.js'
const router = express.Router()

router.get('/', getAnggota)
router.get('/:nik', getAnggotaByNik)
router.post('/', upload.array('files'), createAnggota)
router.put('/:nik', upload.array('files'), updateAnggota)

export default router