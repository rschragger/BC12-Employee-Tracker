const getConnection = require('../config/connection');

const console_table = require('console.table');

const { deleteRoute } = require('../inquirerRoutes/deleteQuestions');


// Update a Record function
const deleteARecord = async () => {
    try {
        const db = await getConnection();

        const deleteReq = await deleteRoute();

        //This is for delete employee
        if (deleteReq.employeeName != undefined) {
            const employeeId = await db.query(`SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) LIKE ?`
                , deleteReq.employeeName); //need to get id of the employee

            db.query(`DELETE FROM employee 
            WHERE id = ?`
                , [employeeId[0][0].id]);

            console.log(`Deleted ${deleteReq.roleTitle} role in the database`);
        }

        //This is for delete role
        if (deleteReq.roleTitle != undefined) {//need to get id of the role
            const roleId = await db.query(`SELECT id FROM role WHERE title LIKE ?`
                , deleteReq.roleTitle);

            db.query(`DELETE FROM role 
            WHERE id = ?`
                , [roleId[0][0].id]);

            console.log(`Deleted ${deleteReq.roleTitle} role in the database`);
        };

         //This is for delete department
         if (deleteReq.deptName != undefined) {//need to get id of the role
            const deptId = await db.query(`SELECT id FROM department WHERE name LIKE ?`
                , deleteReq.deptName);

            db.query(`DELETE FROM department 
            WHERE id = ?`
                , [deptId[0][0].id]);

            console.log(`Deleted ${deleteReq.deptName} department in the database`);
        };

     
    } catch (error) {
        console.log('deleteARecord error:' + error);
    }
}


// Module Exports
module.exports = {
    deleteARecord
}



