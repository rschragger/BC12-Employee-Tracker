require('dotenv').config();
const mysql = require('mysql2/promise');
var consoleCount = 0;

function getConnection() {
  consoleCount++
  return mysql.createPool(
    {
      connectionLimit: 20,
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    consoleCount<2 ? console.log(`Connected to the ${process.env.DB_NAME} database.`) : ''
  );
  
}

/* Connection here - using pool above
function getConnection() {
  return mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
  );
}*/



module.exports = getConnection