const inquirer = require('inquirer');
const dbFunctions = require('../db/dbFunctions')


//const inquirerRouter = require('./inquirerRoutes/index');

function choosePath() {

    let question = [{
        message: 'What would you like to do?',
        name: 'pathChoice',
        type: 'list',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',

            'Quit'
        ],
    }];
    return inquirer
        .prompt(question)
        .then((response) => {
            if (response.pathChoice === 'View all departments') {
                dbFunctions.viewAll('department').then(choosePath());
                //viewAll('department');
            }

            else if (response.pathChoice === 'Add a department') {
                addADepartment();
            }

            else {  //FINAL
                console.log("\x1b[41m\n\n Thank you for using this product\n\x1b[0m\n ");
                //  endFunction()
                process.exit(1);
            }
        })
        .catch((err) => {
            console.log('Error in choosePath()')
            console.log(err)
            //choosePath()
        })
};

module.exports = choosePath;