const choosePath = require("../inquirerRoutes/choosePath");

const mysql = require('mysql2');
const db = require('../config/connection');


const inquirerRouter = require('../inquirerRoutes/index');
const console_table = require('console.table');

const viewAll = async () => {
    try {
        const allData =  db.query('SELECT * FROM employee');
        console.log(allData);
        // choosePath()
        inquirerRouter();
    } catch (error) {
        console.log(error);
    }

}


// viewAll(table, async (req, res) => {
//     try {
//          db.query(`SELECT * FROM ${table}`, await function (err, results) {
//             console.log(results);
//         }
//         } catch (error) {
//         console.log(error)
//     }
// });

// async function viewAll(table) {
//     db.query(`SELECT * FROM ${table}`,  function (err, results) {
//          console.log(results);
//     })
// };

/*
const viewAll = ((table) => {
    db.query(`SELECT * FROM ${table}`, function (err, results) {
        console.log(results);
    }
    ).then((data) => {
        return data;
    }
    ).catch((err) => {
        console.log(err);
    })
})
*/


// Module Exports
module.exports = {
    viewAll
}