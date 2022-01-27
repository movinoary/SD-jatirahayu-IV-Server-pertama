import express from "express"
import { getUsers, Register, Login, Logout, deleteUsers, updateUsers } from "../controllers/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"
import { uploadberitasekolah, uploadberitaumum, uploadfasilitassekolah, uploadguru, uploadkegiatanGaleri, uploadkegiatanSekolah } from "../public/storage.js"
import { createAnggaran, deleteAnggaran, getAllAnggaran, getAnggaranbyId, updateAnggaran } from "../controllers/Anggaran.js"
import { createVideoYoutube, deleteVideoYoutube, getAllVideoYoutube, getbyVideoYoutubeId, updateVideoYoutube } from "../controllers/VideoYoutube.js"
import { createKegiatanSekolah, deleteKegiatanSekolah, getAllKegiatanSekolah, getKegiatanSekolahbyId } from "../controllers/KegiatanSekolah.js"
import { createProfilGuru, deleteProfilGuru, getAllProfilGuru, getProfilGurubyId } from "../controllers/ProfilGuru.js"
import { createBeritaSekolah, deleteBeritaSekolah, getAllBeritaSekolah, getBeritaSekolahbyId } from "../controllers/BeritaSekolah.js"
import { createBeritaUmum, deleteBeritaUmum, getAllBeritaUmum, getBeritaUmumbyId } from "../controllers/BeritaUmum.js"
import { createDataSekolah, deleteDataSekolah, getAllDataSekolah, getDataSekolahbyId, updateDataSekolah } from "../controllers/DataSekolah.js"
import { createFasilitasSekolah, deleteFasilitasSekolah, getAllFasilitasSekolah, getFasilitasSekolahbyId, updateFasilitasSekolah } from "../controllers/FasilitasSekolah.js"
import { createKegiatanGaleri, deleteKegiatanGaleri, getAllKegiatanGaleri, getKegiatanGaleribyId } from "../controllers/KegiatanGaleri.js"

const router = express.Router()



// login - logout
router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.delete('/users/:id', deleteUsers)
router.patch('/users/:id', updateUsers)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

// Anggaran
router.get('/anggaran/', getAllAnggaran)
router.get('/anggaran/:id', getAnggaranbyId)
router.post('/anggaran/', createAnggaran)
router.patch('/anggaran/:id', updateAnggaran)
router.delete('/anggaran/:id', deleteAnggaran)

// Berita Sekolah
router.get('/berita-sekolah', getAllBeritaSekolah)
router.get('/berita-sekolah/:id', getBeritaSekolahbyId)
router.post('/berita-sekolah', uploadberitasekolah.single('photo'), createBeritaSekolah)
router.delete('/berita-sekolah/:id', deleteBeritaSekolah)

// Berita Umum
router.get('/berita-umum', getAllBeritaUmum)
router.get('/berita-umum/:id', getBeritaUmumbyId)
router.post('/berita-umum', uploadberitaumum.single('photo'), createBeritaUmum)
router.delete('/berita-umum/:id', deleteBeritaUmum)

// Data Sekolah
router.get('/data-sekolah/', getAllDataSekolah)
router.get('/data-sekolah/:id', getDataSekolahbyId)
router.post('/data-sekolah/', createDataSekolah)
router.patch('/data-sekolah/:id', updateDataSekolah)
router.delete('/data-sekolah/:id', deleteDataSekolah)

// Fasilitas Sekolah
router.get('/fasilitas-sekolah', getAllFasilitasSekolah)
router.get('/fasilitas-sekolah/:id', getFasilitasSekolahbyId)
router.post('/fasilitas-sekolah', uploadfasilitassekolah.single('photo'), createFasilitasSekolah)
router.patch('/fasilitas-sekolah/:id', uploadfasilitassekolah.single('photo'), updateFasilitasSekolah)
router.delete('/fasilitas-sekolah/:id', deleteFasilitasSekolah)

// Kegiatan Galeri
router.get('/kegiatan-galeri', getAllKegiatanGaleri)
router.get('/kegiatan-galeri/:id', getKegiatanGaleribyId)
router.post('/kegiatan-galeri', uploadkegiatanGaleri.single('photo'), createKegiatanGaleri)
router.delete('/kegiatan-galeri/:id', deleteKegiatanGaleri)

// Kegiatan Sekolah
router.get('/kegiatan-sekolah', getAllKegiatanSekolah)
router.get('/kegiatan-sekolah/:id', getKegiatanSekolahbyId)
router.post('/kegiatan-sekolah', uploadkegiatanSekolah.single('photo'), createKegiatanSekolah)
router.delete('/kegiatan-sekolah/:id', deleteKegiatanSekolah)

// Profil Guru
router.get('/profil-guru', getAllProfilGuru)
router.get('/profil-guru/:id', getProfilGurubyId)
router.post('/profil-guru', uploadguru.single('photo'), createProfilGuru)
router.delete('/profil-guru/:id', deleteProfilGuru)

// Video Youtube
router.get('/video-youtube/', getAllVideoYoutube)
router.get('/video-youtube/:id', getbyVideoYoutubeId)
router.post('/video-youtube/', createVideoYoutube)
router.patch('/video-youtube/:id', updateVideoYoutube)
router.delete('/video-youtube/:id', deleteVideoYoutube)

 
export default router