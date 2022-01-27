import VideoYoutube from "../models/VideoYoutube.js";


export const getAllVideoYoutube = async (req, res) => {
    try {
        const videoyoutube = await VideoYoutube.findAll();
        res.json(videoyoutube);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
export const getbyVideoYoutubeId = async (req, res) => {
    try {
        const videoyoutube = await VideoYoutube.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(videoyoutube[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createVideoYoutube = async (req, res) => {
    try {
        await VideoYoutube.create(req.body);
        res.json({
            "message": "Video Youtube berhasil dibuat"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateVideoYoutube = async (req, res) => {
    try {
        await VideoYoutube.update(req.body, {
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

export const deleteVideoYoutube = async (req, res) => {
    try {
        await VideoYoutube.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Video Youtube berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}