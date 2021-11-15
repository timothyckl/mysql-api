// user router
const express = require('express');
const userRouter = express.Router();
const user = require('../controller/userController');

userRouter.route('/')
    .get(user.getAllUsers)
    .post();

userRouter.route('/:id')
    .get()
    .put();

// userRouter.route('/:id/friends')
//     .get()
//     .post()
//     .delete();

module.exports = userRouter;