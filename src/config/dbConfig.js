// database config and connection
const mysql = require('mysql2');
require('dotenv').config({ path: 'src/config/.env' })

module.exports = {
    getConn: () => {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: 'friendbook',
            dateStrings: true,
            connectionLimit: 10
        })
        return pool;
    }
};