// define functions to take input and pass to model for db interaction
const db = require('../model/user');

module.exports = {
    getAllUsers: (req, res) => {
        db.selectAll((err, data) => {
            if (err) res.status(404).send(err);
            else res.status(200).json({ data: data });
        });
    },
    getOneUser: (req, res) => {
        const { id } = req.params;
        db.selecOne(id, (err, data) => {
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
        db.createOne(full_name, username, bio, date_of_birth, (err, data) => {
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
        db.updateOne(id, full_name, username, bio, date_of_birth, (err, data) => {
            if (err) res.status(404).send(err);
            else res.status(201).json({
                msg: `User with ID ${id} successfully updated!`
            });
        });
    },
};