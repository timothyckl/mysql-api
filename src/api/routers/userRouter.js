// user router
const express = require('express');
const userRouter = express.Router();

userRouter.route('/').get((req, res) => res.send('test'));

module.exports = userRouter;