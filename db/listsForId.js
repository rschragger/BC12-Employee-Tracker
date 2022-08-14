const getConnection = require('../config/connection');


const departmentNameList = async () => {
    try {
        const db = await getConnection();
        resultList = await db.query(`SELECT DISTINCT name FROM department ORDER BY name;`);
        let arr = [];
        resultList[0].forEach(item => {
            arr.push(item.name)
        })        //return resultList;
        return arr
        //Object.keys(resultList).map(name => obj[name])
        //return JSON.parse(JSON.stringify(resultList[0]));
    } catch (error) {
        console.log('departmentNameList' + error);
    }
};


module.exports = { departmentNameList }