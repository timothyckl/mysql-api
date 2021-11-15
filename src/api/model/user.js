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
        const createOneQuery = "INSERT INTO user (full_name, username, bio, date_of_birth) VALUES (?, ?, ?, ?);";
        const values = [fullName, uname, bio, dob];

        cnx.query(createOneQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
}