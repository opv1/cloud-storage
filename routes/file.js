import { Router } from 'express'
import auth from '../middlewares/auth.js'
import {
  createDir,
  uploadFile,
  getFiles,
  downloadFile,
  searchFile,
  deleteFile,
} from '../controllers/file.js'

const router = Router()

router.post('/', auth, createDir)
router.post('/upload', auth, uploadFile)
router.get('/', auth, getFiles)
router.get('/download', auth, downloadFile)
router.get('/search', auth, searchFile)
router.delete('/', auth, deleteFile)

export default router
