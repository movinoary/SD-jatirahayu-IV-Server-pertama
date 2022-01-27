import multer from 'multer'
import path from 'path'

const storagefasilitassekolah = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/fasilitassekolah")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})

const storageberitasekolah = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/berita/sekolah")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})

const storageberitaumum = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/berita/umum")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})

const storageguru = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/profilguru")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})


const storagekegiatangaleri = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/kegiatan/galeri")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})
    
const storagekegiatansekolah = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/kegiatan/sekolah")
    },
    filename: function(req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name +
            "-" +
            Date.now() +
            path.extname(file.originalname)
            )
        }
})

export const uploadfasilitassekolah = multer ({ storage: storagefasilitassekolah })
export const uploadberitasekolah = multer ({ storage: storageberitasekolah })
export const uploadberitaumum = multer ({ storage: storageberitaumum })
export const uploadguru = multer ({ storage: storageguru })
export const uploadkegiatanGaleri = multer ({ storage: storagekegiatangaleri })
export const uploadkegiatanSekolah = multer ({ storage: storagekegiatansekolah })