import DataSekolah from "../models/DataSekolah.js";


export const getAllDataSekolah = async (req, res) => {
    try {
        const datasekolah = await DataSekolah.findAll();
        res.json(datasekolah);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
export const getDataSekolahbyId = async (req, res) => {
    try {
        const datasekolah = await DataSekolah.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(datasekolah[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createDataSekolah = async (req, res) => {
    try {
        await DataSekolah.create(req.body);
        res.json({
            "message": "Data Sekolah berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateDataSekolah = async (req, res) => {
    try {
        await DataSekolah.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Sekolah berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deleteDataSekolah = async (req, res) => {
    try {
        await DataSekolah.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data Sekolah berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}