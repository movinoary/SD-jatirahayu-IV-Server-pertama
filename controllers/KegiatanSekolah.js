import KegiatanSekolah from "../models/KegiatanSekolah.js";

export const getAllKegiatanSekolah = async(req,res) => {
    try {
        const kegiatan = await KegiatanSekolah.findAll();
        res.json (kegiatan)
    } catch (error) {
        console.log(error)
    }
}
export const getKegiatanSekolahbyId = async (req, res) => {
    try {
        const kegiatan = await KegiatanSekolah.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(kegiatan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createKegiatanSekolah = async(req, res) => {
    const keterangan  = req.body.keterangan
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/kegiatan/sekolah/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})

    try {
        await KegiatanSekolah.create({
            keterangan : keterangan,
            foto: finalImageURL,
        })
        res.json({msg: "Berhasil Menambah Kegiatan Sekolah"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteKegiatanSekolah = async (req, res) => {
    try {
        await KegiatanSekolah.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kegiatan Sekolah Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}