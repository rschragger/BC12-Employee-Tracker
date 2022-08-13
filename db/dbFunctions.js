const choosePath = require("../inquirerRoutes/choosePath");

// const mysql = require('mysql2');
const getConnection = require('../config/connection');


const inquirerRouter = require('../inquirerRoutes/index');
const console_table = require('console.table');




const viewAll = async (table) => {
    try {
        const db = await getConnection();

        const [result] = await db.query(`SELECT * FROM ${table}`);

        return result;

    } catch (error) {
        console.log(error);
    }

}


const addARecord = () => {

}


// Module Exports
module.exports = {
    viewAll,
    addARecord
}

/* 
Select employees with joins


select EM.id, EM.first_name, EM.last_name, RL.title, RL.salary,  CONCAT(MAN.first_Name, ' ',MAN.last_name)  AS Manager
FROM employee as EM
JOIN role as RL on EM.role_id = RL.id
JOIN employee as MAN
ON EM.manager_id = MAN.id
;    
    */





/* Below are some of my attempts before review session with David Impey
I will continue using his techniques to help me learn new methodology. I just did not want to take all credit

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
