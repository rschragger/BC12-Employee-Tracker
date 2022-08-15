require('dotenv').config();

const inquirer = require('inquirer');
const mysql = require('mysql2');
const console_table = require('console.table');
const express = require('express');

const inquirerRouter = require('./inquirerRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create DB connection
const db = require('./config/connection');

//const dbFunctions = require('./db/dbViewAdd')
/*
const db = mysql.createConnection(
    {
      host: 'localhost',  
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME     
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
  );
*/

  // Example Query database
/*
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
*/

// const viewAll2 = async () => {
//     try {
//         const allData =  db.query('SELECT * FROM employee');
//         console.log(allData);
//         // choosePath()
//         inquirerRouter();
//     } catch (error) {
//         console.log(error);
//     }

// }

//Listen (not sure if needed in this node app)
/*
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
*/



function init(){
    console.log("\x1b[41m\n\n  Welcome to\n\n     EMPLOYEE  \n     TRACKER   \n\x1b[0m\n ");
    inquirerRouter()
}
function endFunction(){
    console.log("\x1b[41m\n\n   \n  Thank you for using this product   \n    \n\x1b[0m\n ");

    process.exit(1)
}


init()