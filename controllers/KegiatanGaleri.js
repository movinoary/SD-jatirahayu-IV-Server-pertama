import KegiatanGaleri from "../models/KegiatanGaleri.js";


export const getAllKegiatanGaleri = async(req,res) => {
    try {
        const kegiatan = await KegiatanGaleri.findAll();
        res.json (kegiatan)
    } catch (error) {
        console.log(error)
    }
}
export const getKegiatanGaleribyId = async (req, res) => {
    try {
        const kegiatan = await KegiatanGaleri.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(kegiatan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createKegiatanGaleri = async(req, res) => {
    const keterangan  = req.body.keterangan
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/kegiatan/galeri/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})

    try {
        await KegiatanGaleri.create({
            keterangan : keterangan,
            foto: finalImageURL,
        })
        res.json({msg: "Berhasil Menambah Kegiatan Galeri"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteKegiatanGaleri = async (req, res) => {
    try {
        await KegiatanGaleri.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kegiatan Galeri Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}