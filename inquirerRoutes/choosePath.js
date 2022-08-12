const inquirer = require('inquirer');
const dbFunctions = require('../db/dbFunctions')

const mysql = require('mysql2');
const db = require('../config/connection');


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
                 async dbFunctions.viewAll('department').then((viewAllData)=>{
                    console.log(viewAllData);
                    console.log('position 3');
                    choosePath()
                });
                console.log('position 1');
                /*(async () => {
                    try {
                        //console.log('position 2')
                        const deptData = await viewAll2('department');
                        console.log(deptData)
                    } catch (error) {
                        console.log(error)
                    } finally {
                        choosePath()
                    }
                })();*/
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

const viewAll2 = (table) => {
    console.log('position 3')

     db.query(`SELECT * FROM ${table}`, function (err, results) {
        return results;
      });
    
    // try {
    //     const allData = db.query(`SELECT * FROM ${table}`);
    //     console.log(allData);
    //     choosePath()
    //     //inquirerRouter();
    // } catch (error) {
    //     console.log(error);
    // }

}

module.exports = choosePath;