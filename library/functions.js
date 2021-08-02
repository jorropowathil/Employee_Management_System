// Required
const inquirer = require('inquirer');
const table = require('./table_data');
const questions = require('./questions');
// const mainMenu = require('./library/questions');



async function addDepartment(){
    console.log("add a department stuff here!");
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
    // questions.startQuestions();
}

async function addRole(){
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
    const roleID = await inquirer.prompt({
        type: 'input',
        name: 'roleID',
        message: 'Enter employee role ID:'
    })
    const managerID = await inquirer.prompt({
        type: 'input',
        name: 'managerID',
        message: "Enter employee's manager ID"
    })
    const newEmployee = {
        firstName: firstName.firstName,
        lastName: lastName.lastName,
        roleID: roleID.roleID,
        managerID: managerID.managerID,
    }
    table.createTable(response, newEmployee);
}



module.exports = {addDepartment, addRole, updateRole, addEmployee}