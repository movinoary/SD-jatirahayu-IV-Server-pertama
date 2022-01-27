import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DataSekolah = db.define('data_sekolah',{
    keterangan : {
        type : DataTypes.STRING
    },
    jumlah : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default DataSekolah