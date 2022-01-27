import BeritaSekolah from "../models/BeritaSekolah.js";

export const getAllBeritaSekolah = async(req,res) => {
    try {
        const berita = await BeritaSekolah.findAll();
        res.json (berita)
    } catch (error) {
        console.log(error)
    }
}
export const getBeritaSekolahbyId = async (req, res) => {
    try {
        const berita = await BeritaSekolah.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(berita[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createBeritaSekolah = async(req, res) => {
    const judul  = req.body.judul
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/berita/sekolah/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})
    const tanggal = req.body.tanggal
    const isiberita = req.body.isiberita
    const pencipta = req.body.pencipta


    try {
        await BeritaSekolah.create({
            judul : judul,
            foto: finalImageURL,
            tanggal : tanggal,
            isi_berita : isiberita,
            pencipta : pencipta,
        })
        res.json({msg: "Berhasil Menambah Berita Sekolah"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteBeritaSekolah = async (req, res) => {
    try {
        await BeritaSekolah.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Berita Sekolah Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}