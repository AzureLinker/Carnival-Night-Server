const express = require('express');
const { createRequire } = require('module');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'files', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use ((req, res, next) => {
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});
app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'));
});
app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});
app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
});