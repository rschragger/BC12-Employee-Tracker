const inquirer = require('inquirer');
//const { departmentNameList, roleTitleList, employeeNameList } = require('../db/listsForId');

// allows users to view employees by manager, view employees by department, view the total utilized budget of a department (in other words, the combined salaries of all employees in that department)



async function reportRoute() {
    const reportReponses = await chooseReport()
    return reportReponses
}

const chooseReport = async () => {
    let questions = [{
        message: 'Whatreport do you want to view?',
        name: 'reportType',
        type: 'list',
        choices: [
            'View employees by manager',
            'View employees by department',
            'View the total utilized budget of a department'
        ]
    }];
    const whichReport = await inquirer.prompt(questions);
    return whichReport
};

module.exports = {
    reportRoute
};

/* ---
const reportQuestionList = async () => {
    const whatToReport = await chooseReport();

    //const deptNameList = await departmentNameList();
    //const employeeNames = await employeeNameList();
   // const roleTitles = await roleTitleList();

    let questions = [
        {
            message: `Who is the employee to report?`,
            name: 'employeeName',
            type: 'list',
            choices: employeeNames,
            when: whatToReport.reportType === `Report an employee`
        }, {
            message: `What is the role to report?`,
            name: 'roleTitle',
            type: 'list',
            choices: roleTitles,
            when: whatToReport.reportType === 'Report an employee role'
        }, {
            message: `What is the department to report?`,
            name: 'deptName',
            type: 'list',
            choices: deptNameList,
            when: whatToReport.reportType === 'Report a department'
        }];
    const response = await inquirer.prompt(questions);

    return response

};
*/


