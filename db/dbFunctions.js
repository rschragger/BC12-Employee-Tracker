const choosePath = require("../inquirerRoutes/choosePath");

// const mysql = require('mysql2');
const getConnection = require('../config/connection');


//const inquirerRouter = require('../inquirerRoutes/index');
const console_table = require('console.table');
const { chooseAddDept, chooseRole } = require('../inquirerRoutes/addQuestions');

// View all SQL function
const viewAll = async (table) => {
    try {
        const db = await getConnection();
        switch (table) {
            case 'employee':
                let [resultEmp] = await db.query(
                    `SELECT EM.id, EM.first_name, EM.last_name, RL.title, DE.name as department, RL.salary,  CONCAT(MAN.first_Name, ' ',MAN.last_name)  AS manager
        FROM employee as EM
        JOIN role as RL on EM.role_id = RL.id
        JOIN employee as MAN
        ON EM.manager_id = MAN.id
        JOIN department as DE 
        ON RL.department_id = DE.id
        ; `);
                return resultEmp;
                break;

            case 'department':
                let [resultDep] = await db.query(
                    `SELECT id, name as 'department name'
                    FROM department
                    ;`);
                return resultDep;
                break;

            case 'role':
                let [resultRol] = await db.query(
                    `SELECT RL.id, RL.title, DE.name as department, RL.salary  
                        FROM role as RL
                        JOIN department as DE 
                        ON RL.department_id = DE.id
                        ;`);
                return resultRol;
                break;

            default:
                console.log(`Choice ${table} not defined`)
                break;
        }
    } catch (error) {
        console.log('viewAll error:' + error);
    }
}

// Add a Record function
const addARecord = async (table) => {
    try {
        const db = await getConnection();
        switch (table) {
            case 'department':
                const deptData = await chooseAddDept(); //
                db.query(`INSERT INTO department(name) VALUES (?)`, deptData.deptName);
                console.log(`Added ${deptData.deptName} to the database`);
                break;
            case 'role':
                const roleData = await chooseRole();

                const deptId = await db.query(`SELECT id FROM department WHERE name LIKE ?`
                    , roleData.deptName);

                // console.log('deptId: ' + deptId)

                db.query(`INSERT INTO role (  title , salary , department_id  ) VALUES (?,?,?)`
                    ,[ roleData.roleTitle, roleData.salary, deptId[0][0].id]);

                console.log(`Added ${roleData.roleTitle} to the database`);

                break;

            default:
                console.log(`${table} is not defined`);

                break;
        }
        //choosePath();
    } catch (error) {
        console.log('addARecord error:' + error);
    }
}


// const departmentNameList = async () => {
//     try {
//         const db = await getConnection();
//         let [resultList] = await db.query(`SELECT DISTINCT name FROM department ORDER BY name;`);
//         return resultList;
//     } catch (error) {
//         console.log('departmentNameList' + error);
//     }
// }


// Module Exports
module.exports = {
    viewAll,
    addARecord,
    //departmentNameList
}

/* VIEW ALL SQL
View all employees (with joins)

| id | first_name | last_name | title           | department  | salary | manager         |

SELECT EM.id, EM.first_name, EM.last_name, RL.title, DE.name as department, RL.salary,  CONCAT(MAN.first_Name, ' ',MAN.last_name)  AS manager
FROM employee as EM
JOIN role as RL on EM.role_id = RL.id
JOIN employee as MAN
ON EM.manager_id = MAN.id
JOIN department as DE 
ON RL.department_id = DE.id
;    

View All Roles (with joins)

| id | title           | department  | salary |

SELECT RL.id, RL.title, DE.name as department, RL.salary  
FROM role as RL
JOIN department as DE 
ON RL.department_id = DE.id
;


View All departments

| id | department name |

SELECT id, name as 'department name'
FROM department
;


    */

/* ADD A RECORD SQL
Add a department ----------------------------------------

INSERT INTO department ( name)
VALUES
    ( "Logistics")
   ;

Select * from department;

Add a role----------------------------------------------------

| id | title           | salary | department_id |
+----+-----------------+--------+---------------+
|  1 | Salesperson     |  60000 |             1 |
|  2 | Junior Engineer |  75000 |             2 |

INSERT INTO role (  title , salary , department_id  )
VALUES
   ( "salesperson",	60000 ,	1  )

   ( Q:Title,	Q:salary,	get id*1)

get id*1 - ask for department, get id -------
SELECT id FROM department WHERE name LIKE (Q:roleName)



Add an employee ----------------------------------------

INSERT INTO employee (  first_name , last_name ,role_id , manager_id )
VALUES
   ( "Reeve",	"Schragger",	1 ,		1 )
;
   ( Q:Fname,	Q:Lname,		get id*1,	get id*2)


get id*1 - ask for role, get id -------
SELECT id FROM role WHERE title LIKE (Q:roleName)


get id*2 - ask for manager's name, get id ------
SELECT id FROM employee WHERE name LIKE (Q:managerName)


-----------------------------------------------------------
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
