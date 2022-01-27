import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KegiatanSekolah = db.define('kegiatan_sekolah',{
    keterangan : {
        type : DataTypes.STRING
    },
    foto : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default KegiatanSekolah