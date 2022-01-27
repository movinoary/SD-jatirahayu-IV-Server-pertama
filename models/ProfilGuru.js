import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ProfilGuru = db.define('profil_guru',{
    nama_depan : {
        type : DataTypes.STRING
    },
    nama_belakang : {
        type : DataTypes.STRING
    },
    gelar : {
        type : DataTypes.STRING
    },
    jabatan : {
        type : DataTypes.STRING
    },
    foto : {
        type : DataTypes.STRING
    },
    tempat_lahir : {
        type : DataTypes.STRING
    },
    tanggal_lahir : {
        type : DataTypes.STRING
    },
    alamat : {
        type : DataTypes.STRING
    },
    desc : {
        type : DataTypes.TEXT
    },
    wa : {
        type : DataTypes.STRING
    },
    facebook : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    instagram : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default ProfilGuru