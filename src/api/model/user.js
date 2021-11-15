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
}