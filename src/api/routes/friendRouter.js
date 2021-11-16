// friend router
const express = require('express');
const friendRouter = express.Router();

friendRouter.route('/')
    .get();

friendRouter.route('/:friendID')
    .post()
    .delete();

module.exports = friendRouter;