const express = require('express');
const app = express();
const userRouter = require('../routes/userRouter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);

app.all('*', (req, res) => {
    res.status(405).send("Method not supported at endpoint.");
});

module.exports = app;