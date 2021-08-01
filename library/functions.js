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

async function updateRole(){
    console.log('Update role stuff!');
    const response = 'Update a role';
    const selectEmployee = await inquirer.prompt({
        type: 'input',
        name: 'selectEmployee',
        message: 'Input the employee by ID to update:'
    })
    const newID = await inquirer.prompt({
        type: 'input',
        name: 'newID',
        message: 'Input the new employee ID:'
    })
    const updatedEmployee = {
        selectEmployee: selectEmployee.selectEmployee,
        newID: newID.newID
    }
    table.createTable(response, updatedEmployee);
}

async function addEmployee(){
    console.log("add employee here!");
    const response = 'Add an employee';
    const firstName = await inquirer.prompt({
        type: 'input',
        name: 'firstName',
        message: 'Enter new employees first name:',
    })
    const lastName = await inquirer.prompt({
        type: 'input',
        name: 'lastName',
        message: 'Enter new employees last name:',
    })
    
}
module.exports = {addDepartment, addRole, updateRole}