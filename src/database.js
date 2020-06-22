const mysql = require('mysql');
const {promisify} = require('util');
const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('DATABASE CONNECTION WAS CLOSED');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.log('DATABASE HAS TO MANY CONNECTIONS');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('ACCESS DENIED');
    }
  }
  if (connection) connection.release();
  console.log('db is Connected');
  return;
});
// promisify pool querys
pool.query = promisify(pool.query);

module.exports = pool;
