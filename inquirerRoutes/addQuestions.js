const inquirer = require('inquirer');
//const { viewAll, addARecord } = require('../db/dbFunctions')


// add a formatted line to the interface to break out the diplayed information
const sepLine = "\x1b[41m\n                 \x1b[0m\n "

async function chooseAddDept() {

    let question = [{
        message: 'What is the name of the department?',
        name: 'deptName',
        type: 'input',
        validate: (deptName) => { return (!deptName ? false : true) }

    }];
    const response = await inquirer.prompt(question);

    return response.deptName

    // choosePath();
};


module.exports = {
    chooseAddDept

};

