import {Sequelize} from "sequelize"

const db = new Sequelize('sekolah', 'root', '', {
    host : "localhost",
    dialect : "mysql",
})

export default db;