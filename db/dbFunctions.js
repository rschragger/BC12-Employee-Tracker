const choosePath = require("../inquirerRoutes/choosePath");

// const mysql = require('mysql2');
const getConnection = require('../config/connection');


const inquirerRouter = require('../inquirerRoutes/index');
const console_table = require('console.table');

const viewAll = async (table) =>  {
    try {
        const db = await getConnection();
        
        const [result] = await db.query(`SELECT * FROM ${table}`);

        return result;       
       
    } catch (error) {
        console.log(error);
    }

}

// const viewAll = (table) =>  {
//     try {
//         return getConnection().then((db) => {
//             return db.query(`SELECT * FROM ${table}`);
//         }).then(([result]) => {
//             return result;
//         })
        

//         // return result;

//         //const allData =  await db.query('SELECT * FROM employee');
//         //console.log(allData);
//         // choosePath()
       
//     } catch (error) {
//         console.log(error);
//     }

// }

// const viewAll = (table) => new Promise((resolve, reject) => {
//     try {
//         const allData = db.query(`SELECT * FROM ${table}`, function(error, result){
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });

//         //const allData =  await db.query('SELECT * FROM employee');
//         //console.log(allData);
//         // choosePath()
       
//     } catch (error) {
//         console.log(error);
//     }

// });


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

const viewOne = () => {
    
}


// Module Exports
module.exports = {
    viewAll,
    viewOne
}