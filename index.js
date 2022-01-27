import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './config/Database.js';
import router from './routes/index.js';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...')
    // await (nama_database).sync()
} catch (error) {
    console.error(error)
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }))
app.use('/public', express.static( 'public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())
app.use(router);


app.listen(3210, () => {
    console.log('web berjalan di port 3210')
})