// user router
const express = require('express');
const userRouter = express.Router();
const user = require('../controller/userController');

userRouter.route('/')
    .get(user.getAllUsers)
    .post(user.createUser);

userRouter.route('/:id')
    .get(user.getOneUser)
    .put(user.updateUser);

userRouter.route('/:id/friends')
    .get()
    .post()
    .delete();

module.exports = userRouter;