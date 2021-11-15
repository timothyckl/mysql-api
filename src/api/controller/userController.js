// define functions to take input and pass to model for db interaction
const user = require('../model/user');

module.exports = {
    getAllUsers: (req, res) => {
        user.selectAll((err, data) => {
            if (err) res.status(404).send(err);
            else res.status(200).send(data);
        });
    },
    getOneUser: (req, res) => {
        const { id } = req.params
        user.selecOne(id, (err, data) => {
            if (err) res.status(404).send(err);
            else res.status(200).send(data);
        })
    }
};