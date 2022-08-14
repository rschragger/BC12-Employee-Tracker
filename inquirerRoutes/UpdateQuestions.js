const inquirer = require('inquirer');
const { departmentNameList, roleTitleList, managerNameList } = require('../db/listsForId');

async function updateRoute() {
    //const whatToUpdate = await chooseUpdate() ;
   const updateReponses = await updateQuestionList()
return updateReponses
}



const chooseUpdate = async () => {
    let questions = [{
        message: 'What do you want to update?',
        name: 'updateType',
        type: 'list',
        choices: [
            'Update an employee role',
            `Update an employee's manager`,
        ]
    }];
    const whichUpdate = await inquirer.prompt(questions);

    return whichUpdate
};

const updateQuestionList = async () => {
    const whatToUpdate = await chooseUpdate();

    //const deptNameList = await departmentNameList();
    const managerNames = await managerNameList();
    const roleTitles = await roleTitleList();


    let questions = [{
        message: `What is the employee's name?`,
        name: 'employeeName',
        type: 'list',
        choices: managerNames,
    },
    {
        message: `Who is the employee's manager?`,
        name: 'managerName',
        type: 'list',
        choices: managerNames,
        when: whatToUpdate.updateType === `Update an employee's manager`
    }, {
        message: `What is the employee's new role?`,
        name: 'roleTitle',
        type: 'list',
        choices: roleTitles,
        when: whatToUpdate.updateType === 'Update an employee role'
    }];
    const response = await inquirer.prompt(questions);

    return response

};

module.exports = {
    updateRoute
};

