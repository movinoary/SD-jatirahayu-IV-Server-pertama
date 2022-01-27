import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Anggaran = db.define('anggaran',{
    keterangan : {
        type : DataTypes.STRING
    },
    icon : {
        type : DataTypes.STRING
    },
    jumlah_rp : {
        type : DataTypes.STRING
    },
    data_rp : {
        type : DataTypes.STRING
    },
},{
    freezeTableName : true
})

export default Anggaran