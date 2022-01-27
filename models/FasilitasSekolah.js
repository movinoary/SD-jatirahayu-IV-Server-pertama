import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const FasilitasSekolah = db.define('fasilitas_Sekolah',{
    keterangan : {
        type : DataTypes.STRING
    },
    foto : {
        type : DataTypes.STRING
    }
},{
    freezeTableName : true
})

export default FasilitasSekolah