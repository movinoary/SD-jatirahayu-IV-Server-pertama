import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const VideoYoutube = db.define('video_youtube',{
    judul : {
        type : DataTypes.STRING
    },
    link_youtube : {
        type : DataTypes.STRING
    },
    
},{
    freezeTableName : true
})

export default VideoYoutube