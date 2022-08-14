const inquirer = require('inquirer');
const { viewAll, addARecord } = require('../db/dbFunctions')

// add a formatted line to the interface to break out the diplayed information
const sepLine = "\x1b[41m\n                 \x1b[0m\n "

async function choosePath() {

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

    const response = await inquirer.prompt(question);

    // Function to cover all View All questions
    if (response.pathChoice.substring(0, 8) === 'View all') {
        let thisTable = response.pathChoice.substring(9, response.pathChoice.length - 1)

        const thisData = await viewAll(thisTable);

        console.log(console.table(thisData));

        console.log(sepLine)
    }

    if (response.pathChoice.substring(0, 5) === 'Add a') {
        let thisTable = response.pathChoice.substring(6) //String after 'add a' or 'add an'

        const thisData = await addARecord(thisTable);

        console.log(console.table(thisData));

        console.log(sepLine)
    }

    // Quit Function
    if (response.pathChoice === 'Quit') {

        console.log("\x1b[41m\n\n Thank you for using this product\n\x1b[0m\n ");
        //  endFunction()
        process.exit(1);
    }
    choosePath();
};


module.exports = choosePath;

/*Below are some of my attempts before review session with David Impey
I will continue using his techniques to help me learn new methodology. I just did not want to take all credit


    // return inquirer
    //     .prompt(question)
    //     .then((response) => {
    //         if (response.pathChoice === 'View all departments') {
    //             dbFunctions.viewAll('department').then((viewAllData) => {
    //                 console.log(viewAllData);
    //                 console.log('position 3');
    //                 choosePath()
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //             });
    //             console.log('position 1');
    //             /*(async () => {
    //                 try {
    //                     //console.log('position 2')
    //                     const deptData = await viewAll2('department');
    //                     console.log(deptData)
    //                 } catch (error) {
    //                     console.log(error)
    //                 } finally {
    //                     choosePath()
    //                 }
    //             })();* /
    //         }

    //         else if (response.pathChoice === 'Add a department') {
    //             addADepartment();
    //         }

    //         else {  //FINAL
    //             console.log("\x1b[41m\n\n Thank you for using this product\n\x1b[0m\n ");
    //             //  endFunction()
    //             process.exit(1);
    //         }
    //     })
    //     .catch((err) => {
    //         console.log('Error in choosePath()')
    //         console.log(err)
    //         //choosePath()
    //     })
    */
