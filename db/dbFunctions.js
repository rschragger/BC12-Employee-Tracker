const choosePath = require("../inquirerRoutes/choosePath");
const db = require('../config/connection');
const inquirerRouter = require('../inquirerRoutes/index');
const console_table = require('console.table');





async function viewAll(table) {
    db.query(`SELECT * FROM ${table}`, await function (err, results) {
         console.log(results);
    })
};



// Module Exports
module.exports = {
    viewAll
}