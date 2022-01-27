import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KegiatanGaleri = db.define('kegiatan_galeri',{
    keterangan : {
        type : DataTypes.STRING
    },
    foto : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default KegiatanGaleri