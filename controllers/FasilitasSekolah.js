import FasilitasSekolah from "../models/FasilitasSekolah.js";

export const getAllFasilitasSekolah = async(req,res) => {
    try {
        const fasilitas = await FasilitasSekolah.findAll();
        res.json (fasilitas)
    } catch (error) {
        console.log(error)
    }
}
export const getFasilitasSekolahbyId = async (req, res) => {
    try {
        const fasilitas = await FasilitasSekolah.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(fasilitas[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createFasilitasSekolah = async(req, res) => {
    const keterangan  = req.body.keterangan
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/fasilitassekolah/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})

    try {
        await FasilitasSekolah.create({
            keterangan : keterangan,
            foto: finalImageURL,
        })
        res.json({msg: "Berhasil Menambah Fasilitas Sekolah"})
    } catch (error) {
        console.log(error)
    }
} 

export const updateFasilitasSekolah = async (req, res) => {
    const keterangan  = req.body.keterangan
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/fasilitassekolah/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})

    try {
        await FasilitasSekolah.update({
            keterangan : keterangan,
            foto: finalImageURL,
        })
        res.json({msg: "Berhasil Mengupdate Fasilitas Sekolah"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteFasilitasSekolah = async (req, res) => {
    try {
        await FasilitasSekolah.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Fasilitas Sekolah Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}