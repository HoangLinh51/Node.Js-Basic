import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

initWebRoute(app);

connectDB();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

