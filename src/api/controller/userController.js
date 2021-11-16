// define functions to take input and pass to model for db interaction
const user = require('../model/user');

module.exports = {
    getAllUsers: (req, res) => {
        user.selectAll((err, data) => {
            if (err) res.status(404).send(err);
            else res.status(200).json({ data: data });
        });
    },
    getOneUser: (req, res) => {
        const { id } = req.params;
        user.selecOne(id, (err, data) => {
            if (err) res.status(404).send(err);
            else res.status(200).json({ data: data });
        });
    },
    createUser: (req, res) => {
        const {
            full_name,
            username,
            bio,
            date_of_birth
        } = req.body;
        user.createOne(full_name, username, bio, date_of_birth, (err, data) => {
            if (err) res.status(404).send(err);
            else res.status(201).json({
                msg: `User ${username} successfully created!`
            });
        });
    },
    updateUser: (req, res) => {
        const { id } = req.params;
        const {
            full_name,
            username,
            bio,
            date_of_birth
        } = req.body;
        user.updateOne(id, full_name, username, bio, date_of_birth, (err, data) => {
            if (err) res.status(404).send(err);
            else res.status(201).json({
                msg: `User with ID ${id} successfully updated!`
            });
        });
    },
};