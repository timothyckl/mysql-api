// define function LOGIC for db interaction
const db = require('../../config/dbConfig');

module.exports = {
    selectAll: () => {
        const cnx = db.getConn();
        const selectAllQuery = "SELECT * FROM ??;";
        const values = "users";

        cnx.query(selectAllQuery, values, (err, data) => {
            if (err) return err;
            else return data;
        });
    },
}