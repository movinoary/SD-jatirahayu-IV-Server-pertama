import Anggaran from "../models/Anggaran.js";


export const getAllAnggaran = async (req, res) => {
    try {
        const anggaran = await Anggaran.findAll();
        res.json(anggaran);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
export const getAnggaranbyId = async (req, res) => {
    try {
        const anggaran = await Anggaran.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(anggaran[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createAnggaran = async (req, res) => {
    try {
        await Anggaran.create(req.body);
        res.json({
            "message": "Anggaran berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateAnggaran = async (req, res) => {
    try {
        await Anggaran.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Anggaran berhasil diupdate"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deleteAnggaran = async (req, res) => {
    try {
        await Anggaran.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Anggaran berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}