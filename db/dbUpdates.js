const getConnection = require('../config/connection');

const console_table = require('console.table');
//const { chooseAddDept, chooseRole, chooseEmployee } = require('../inquirerRoutes/addQuestions');
const { updateRoute } = require('../inquirerRoutes/UpdateQuestions');


// Update a Record function
const updateARecord = async () => {
    try {
        const db = await getConnection();

        const updateEmp = await updateRoute();


        const employeeId = await db.query(`SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) LIKE ?`
            , updateEmp.employeeName); //need to get id of the employee

        //This is for update role
        if (updateEmp.roleTitle != undefined) {//need to get id of the role
            const roleId = await db.query(`SELECT id FROM role WHERE title LIKE ?`
                , updateEmp.roleTitle);

            db.query(`UPDATE employee 
            SET role_id = ?
            WHERE id = ?`
                , [roleId[0][0].id, employeeId[0][0].id]);

            console.log(`Updated ${updateEmp.employeeName} to role ${updateEmp.roleTitle} in the database`);
        };

        //This is for update manager
        if (updateEmp.managerName != undefined) {//need to get id of the manager
            const managerId = await db.query(`SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) LIKE ?`
                , updateEmp.managerName)

            db.query(`UPDATE employee 
            SET manager_id = ?
            WHERE id = ?`
                , [managerId[0][0].id, employeeId[0][0].id]);

            console.log(`Updated ${updateEmp.employeeName} to be managed by ${updateEmp.managerName} in the database`);
        };
    } catch (error) {
        console.log('updateARecord error:' + error);
    }
}


// Module Exports
module.exports = {
    updateARecord
}



