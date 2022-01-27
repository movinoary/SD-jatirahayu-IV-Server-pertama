import ProfilGuru from "../models/ProfilGuru.js";

export const getAllProfilGuru = async(req,res) => {
    try {
        const profilguru = await ProfilGuru.findAll();
        res.json (profilguru)
    } catch (error) {
        console.log(error)
    }
}
export const getProfilGurubyId = async (req, res) => {
    try {
        const profilguru = await ProfilGuru.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(profilguru[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createProfilGuru = async(req, res) => {
    const namadepan  = req.body.namadepan
    const namabelakang = req.body.namabelakang
    const gelar = req.body.gelar
    const jabatan = req.body.jabatan
    const finalImageURL = 
    req.protocol + '://' + req.get('host') + "/public/profilguru/" + req.file.filename
    res.json({status: "Succes", image: finalImageURL})
    const tempatlahir  = req.body.tempatlahir
    const tanggallahir = req.body.tanggallahir
    const alamat = req.body.alamat
    const desc = req.body.desc
    const facebook  = req.body.facebook
    const wa = req.body.wa
    const email = req.body.email
    const instagram = req.body.instagram
    try {
        await ProfilGuru.create({
            nama_depan : namadepan,
            nama_belakang : namabelakang,
            gelar : gelar,
            jabatan : jabatan,
            foto: finalImageURL,
            tempat_lahir : tempatlahir,
            tanggal_lahir : tanggallahir,
            alamat : alamat,
            desc : desc,
            facebook : facebook,
            wa : wa,
            email : email,
            instagram : instagram,
        })
        res.json({msg: "Berhasil Menambah Profil Guru"})
    } catch (error) {
        console.log(error)
    }
}


export const deleteProfilGuru = async (req, res) => {
    try {
        await ProfilGuru.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Profil Guru Terhapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}