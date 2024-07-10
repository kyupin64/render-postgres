const express = require('express');
const app = express();
const port = process.env.port || 3000;
const db = require('./config/database');

app.get('/getActors', db.getActors);
app.get('/getFilmById/:id', db.getFilmById);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});