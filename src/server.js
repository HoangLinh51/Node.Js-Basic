import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 2002

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('./index.ejs')
})
app.get('/about', (req, res) => {
    res.send(`I'm Newbie!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

