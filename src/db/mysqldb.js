// get the client

const mysql = require('mysql2');
const dotenv = require('dotenv').config({ path: './config/config.env' });

// create the connection to database
const connection = mysql.createConnection({
  // host: '3.16.245.249',
  // host: 'localhost',
  host: process.env.HOST,
  password: process.env.PASSWORD,

  // password: '#@AB@2020bng',
  user: process.env.USERNAME,
  // password: 'Loki@143',
  database: process.env.DATABASE,

  charset: 'latin1',
});

module.exports = {
  connection,
  poolConnection: connection.promise(),
};
