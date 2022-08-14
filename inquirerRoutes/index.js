const choosePath = require('./choosePath');
//const {chooseAddDept} = require('./addQuestions')


function inquirerRouter(){
    choosePath()
}

module.exports =  inquirerRouter ;

