// friend router
const express = require('express');
const friendRouter = express.Router();

friendRouter.route('/').get((req, res) => res.send('test'));

module.exports = friendRouter;