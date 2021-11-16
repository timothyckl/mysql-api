// define function LOGIC for db interaction
const db = require('../../config/dbConfig');
const cnx = db.getConn();

module.exports = {
    selectAll: (callback) => {
        const selectAllQuery = "SELECT * FROM ??;";
        const values = "user";

        cnx.query(selectAllQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    selecOne: (id, callback) => {
        const selectOneQuery = "SELECT * FROM ?? WHERE ?? = ?;";
        const values = ["user", "id", id];

        cnx.query(selectOneQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    createOne: (fullName, uname, bio, dob, callback) => {
        const createQuery = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?);";
        const values = ['user', 'full_name', 'username', 'bio', 'date_of_birth',
            fullName, uname, bio, dob];

        cnx.query(createQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    updateOne: (id, fullName, uname, bio, dob, callback) => {
        const updateQuery = "UPDATE user SET full_name = ?, username = ?, bio = ?, date_of_birth = ? WHERE id = ?;";
        const values = [fullName, uname, bio, dob, id];
        cnx.query(updateQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
};