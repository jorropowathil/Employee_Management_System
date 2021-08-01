// Required
const inquirer = require('inquirer');
const table = require('./table_data');
// const mainMenu = require('./library/questions');



async function addDepartment(){
    const response = 'Add a department';
    const name = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Name of the department:'
    })
    newDepartment = {
        name : name.departmentName,
    }
    console.log(newDepartment);
    table.createTable(response, newDepartment);
}

async function addRole(){
    console.log('Add role stuff!');
    const response = 'Add a role';
    const nameOfRole = await inquirer.prompt({
        type: 'input',
        name: 'nameOfRole',
        message: 'Name of the role:'
    })
    const salary = await inquirer.prompt({
        type: 'input',
        name: 'salary',
        message: 'Salary paid:'
    })
    const department_id = await inquirer.prompt({
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the role:'
    })
    const newRole = {
        title: nameOfRole.nameOfRole,
        salary: salary.salary,
        department_id: department_id.departmentId
    }
    table.createTable(response, newRole);
}


module.exports = {addDepartment, addRole}