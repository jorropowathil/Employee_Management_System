// Required
const inquirer = require('inquirer');
const table = require('./table_data');
const mainMenu = require('./library/questions');


async function addDepartment(){
    console.log("this is working up to here!");
    const response = 'Add Department';
    const name = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Name of the department:'
    })
    newDepartment = {
        name : name.departmentName,
    }
    table.createTable(response, newDepartment);
    mainMenu();
}


module.exports = {addDepartment}