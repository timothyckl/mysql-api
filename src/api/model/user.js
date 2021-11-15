// define function LOGIC for db interaction
const db = require('../../config/dbConfig');

module.exports = {
    selectAll: (callback) => {
        const cnx = db.getConn();
        const selectAllQuery = "SELECT * FROM ??;";
        const values = "user";

        cnx.query(selectAllQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    selecOne: (id, callback) => {
        const cnx = db.getConn();
        const selectOneQuery = "SELECT * FROM ?? WHERE ?? = ?;";
        const values = ["user", "id", id];

        cnx.query(selectOneQuery, values, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
}