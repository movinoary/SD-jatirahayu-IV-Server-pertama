import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const BeritaUmum = db.define('berita_umum',{
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
    sumber : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default BeritaUmum