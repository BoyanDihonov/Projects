import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('main');
});

app.listen(3000, () => {
    console.log("Connected on port:3000");
});
