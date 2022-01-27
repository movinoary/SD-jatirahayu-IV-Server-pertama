import BeritaUmum from "../models/BeritaUmum.js";

export const getAllBeritaUmum = async(req,res) => {
    try {
        const berita = await BeritaUmum.findAll();
        res.json (berita)
    } catch (error) {
        console.log(error)
    }
}
export const getBeritaUmumbyId = async (req, res) => {
    try {
        const berita = await BeritaUmum.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(berita[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createBeritaUmum = async(req, res) => {
    const judul  = req.body.judul
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/berita/umum/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})
    const tanggal = req.body.tanggal
    const isiberita = req.body.isiberita
    const sumber = req.body.sumber


    try {
        await BeritaUmum.create({
            judul : judul,
            foto: finalImageURL,
            tanggal : tanggal,
            isi_berita : isiberita,
            sumber : sumber,
        })
        res.json({msg: "Berhasil Menambah Berita Umum"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteBeritaUmum = async (req, res) => {
    try {
        await BeritaUmum.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Berita Umum Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}