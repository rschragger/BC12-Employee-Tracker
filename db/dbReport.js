const getConnection = require('../config/connection');

const console_table = require('console.table');

const { reportRoute } = require('../inquirerRoutes/reportQuestions');


// Reports function
const reportView = async () => {
    try {
        const db = await getConnection();

        const reportReq = await reportRoute();
switch (reportReq.reportType) {
    case 'View employees by manager':
        let [empByMan] = await db.query(`SELECT CONCAT(MN.first_name," ",MN.last_name) as manager_name,GROUP_CONCAT(EM.first_name," ",EM.last_name SEPARATOR ', ') as employee_names FROM employee as EM  
        JOIN employee as MN
        ON EM.manager_id = MN.id
        GROUP BY MN.id`);

        console.table(empByMan)
        break;

//'View employees by department',
        case 'View employees by department':
            let [empByDept] = await db.query(`SELECT DE.name as department,GROUP_CONCAT(EM.first_name," ",EM.last_name SEPARATOR ', ') as employee_names FROM role as RL  
            JOIN department as DE
            ON DE.id = RL.department_id
            
            JOIN  employee as EM
            ON RL.id = EM.role_id
            
            GROUP BY DE.id`);
    
            console.table(empByDept)
            break;
//'View the total utilized budget of a department'
     case 'View the total utilized budget of a department':
            let [utilizedBudget] = await db.query(`
            SELECT DE.name as department,sum(salary) as budget FROM role as RL  
                        JOIN department as DE
                        ON DE.id = RL.department_id
                        
                        JOIN  employee as EM
                        ON RL.id = EM.role_id
                        
                        GROUP BY DE.id`);
    
            console.table(utilizedBudget)
            break;
    default:
        console.log(`Report '${reportReq.reportType}' not available`);
        break;
}





     
    } catch (error) {
        console.log('reportView error:' + error);
    }
}


// Module Exports
module.exports = {
    reportView
}



