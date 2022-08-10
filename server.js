require('dotenv').config();

const inquirer = require('inquirer');
const mysql = require('mysql2');
const console_table = require('console.table');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create DB connection
const db = mysql.createConnection(
    {
      host: 'localhost', 
     /* process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_NAME
*/
      
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
      
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
  );

  // Example Query database
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });


//Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
