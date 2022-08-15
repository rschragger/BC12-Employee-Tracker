const inquirer = require('inquirer');
const { departmentNameList, roleTitleList, employeeNameList } = require('../db/listsForId');

// allows users to delete departments, roles, and employees
async function deleteRoute() {
    const deleteReponses = await deleteQuestionList()
    return deleteReponses
}

const chooseDelete = async () => {
    let questions = [{
        message: 'What do you want to delete?',
        name: 'deleteType',
        type: 'list',
        choices: [
            'Delete a department',
            'Delete an employee role',
            `Delete an employee`
        ]
    }];
    const whichDelete = await inquirer.prompt(questions);
    return whichDelete
};

const deleteQuestionList = async () => {
    const whatToDelete = await chooseDelete();

    const deptNameList = await departmentNameList();
    const employeeNames = await employeeNameList();
    const roleTitles = await roleTitleList();


    let questions = [
        {
            message: `Who is the employee to delete?`,
            name: 'employeeName',
            type: 'list',
            choices: employeeNames,
            when: whatToDelete.deleteType === `Delete an employee`
        }, {
            message: `What is the role to delete?`,
            name: 'roleTitle',
            type: 'list',
            choices: roleTitles,
            when: whatToDelete.deleteType === 'Delete an employee role'
        }, {
            message: `What is the department to delete?`,
            name: 'deptName',
            type: 'list',
            choices: deptNameList,
            when: whatToDelete.deleteType === 'Delete a department'
        }];
    const response = await inquirer.prompt(questions);

    return response

};

module.exports = {
    deleteRoute
};

