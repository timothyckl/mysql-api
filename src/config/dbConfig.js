// database config and connection
const mysql = require('mysql2');
require('dotenv').config({ path: '/home/tim/Desktop/mysql-api/src/config/.env' })

module.exports = {
    getConn: () => {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'friendbook',
            dateStrings: true
        })
        return pool;
    }
};