// entry point
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./api/routes/userRouter');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);

app.all('*', (req, res) => {
    res.status(405).send("Method not supported at endpoint.");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});