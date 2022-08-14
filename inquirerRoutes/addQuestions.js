const inquirer = require('inquirer');
//const { viewAll, addARecord } = require('../db/dbFunctions')
const { departmentNameList, roleTitleList ,managerNameList } = require('../db/listsForId');

// add a formatted line to the interface to break out the diplayed information
//const sepLine = "\x1b[46m\n                 \x1b[0m\n "

async function chooseAddDept() {

    let questions = [{
        message: 'What is the name of the department?',
        name: 'deptName',
        type: 'input',
        validate: (deptName) => { return (!deptName ? false : true) }

    }];
    const response = await inquirer.prompt(questions);

    return response//.deptName

};

async function chooseRole() {
    const deptNameList = await departmentNameList();

    let questions = [{
        message: 'What is the title of the role?',
        name: 'roleTitle',
        type: 'input',
        validate: (roleTitle) => { return (!roleTitle ? false : true) }
    },
    {
        message: 'What is the salary for this role?',
        name: 'salary',
        type: 'input',
        //validate: (salary) => { return (!salary ? false : isNaN(salary) ? false : true) }
        //https://pakstech.com/blog/inquirer-js/ to make a better error mechanism
        validate(answer) {
            if(!answer || isNaN(answer )) {
                return "Please only give a number!"
            }else if (answer<= 10000){return "That salary looks a bit low"}
            return true
        }
    },
    {
        message: 'Which department does this role belong to?',
        name: 'deptName',
        type: 'list',
        //choices: deptList
        choices: deptNameList,
    }];
    const response = await inquirer.prompt(questions);

    return response

};

async function chooseEmployee() {
    const roleTitles = await roleTitleList();
    const managerNames = await managerNameList();

    let questions = [{
        message: `What is the employee's first name?`,
        name: 'firstName',
        type: 'input',
        validate: (firstName) => { return (!firstName ? false : true) }
    },
    {
        message: `What is the employee's last name?`,
        name: 'lastName',
        type: 'input',
        validate: (lastName) => { return (!lastName ? false : true) }
    },
    {
        message: `What is the employee's role?`,
        name: 'roleTitle',
        type: 'list',
        choices: roleTitles,
    },
    {
        message: `Who is the employee's manager?`,
        name: 'managerName',
        type: 'list',
        choices: managerNames,
    }];
    const response = await inquirer.prompt(questions);

    return response

};


// const departmentNameList = async () => {
//     try {
//         const db = await getConnection();
//         let [resultList] = await db.query(`SELECT DISTINCT name FROM department ORDER BY name;`);
//         return resultList;
//     } catch (error) {
//         console.log('departmentNameList' + error);
//     }
// }




module.exports = {
    chooseAddDept,
    chooseRole,
    chooseEmployee

};

