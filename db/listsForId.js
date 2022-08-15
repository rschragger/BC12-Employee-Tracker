const getConnection = require('../config/connection');


const departmentNameList = async () => {
    try {
        const db = await getConnection();
        resultList = await db.query(`SELECT DISTINCT name FROM department ORDER BY name`);
        let arr = [];
        resultList[0].forEach(item => {
            arr.push(item.name)
        })        //return resultList;
        return arr
      
    } catch (error) {
        console.log('departmentNameList: ' + error);
    }
};

const roleTitleList = async () => {
    try {
        const db = await getConnection();
        resultList = await db.query(`SELECT DISTINCT title FROM role ORDER BY title`);
        let arr = [];
        resultList[0].forEach(item => {
            arr.push(item.title)
        })        //return resultList;
        return arr
      
    } catch (error) {
        console.log('roleTitleList: ' + error);
    }
};

// Employee names also works for Manager names as list is the same (cannot pre-define manager)
const employeeNameList = async () => {
    try {
        const db = await getConnection();
        resultList = await db.query(`SELECT DISTINCT CONCAT(first_name," ",last_name) as name FROM employee ORDER BY name`);
        let arr = [];
        resultList[0].forEach(item => {
            arr.push(item.name)
        })        //return resultList;
        return arr
      
    } catch (error) {
        console.log('employeeNameList: ' + error);
    }
};


module.exports = { departmentNameList, roleTitleList, employeeNameList }