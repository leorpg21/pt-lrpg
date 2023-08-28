
const mysql = require('promise-mysql');
const dotenv = require('dotenv');
dotenv.config();

const conexion = mysql.createConnection({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

const getConnection = async () => await conexion;

module.exports = {
    getConnection
}