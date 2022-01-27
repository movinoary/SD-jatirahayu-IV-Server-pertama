import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const BeritaSekolah = db.define('berita_sekolah',{
    judul : {
        type : DataTypes.STRING
    },
    foto : {
        type : DataTypes.STRING
    },
    tanggal : {
        type : DataTypes.DATE
    },
    isi_berita : {
        type : DataTypes.TEXT
    },
    pencipta : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default BeritaSekolah