const inquirer = require('inquirer');
const table = require('./table_data');

async function startQuestions(){
    inquirer.prompt([{
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
        type: 'list',
        message: 'What do you want to do?',
        name: 'title',
        choices: [
            {name: "View all departments"},
            {name: "View all roles"},
            {name: "View all employees"},
            {name: "Add a department"},
            {name: "Add a role"},
            {name: "Update employee role"}
        ]}])
        .then ((response) => {
            console.log(response.title);
            table.createTable(response);

            // }})}
        })}

module.exports = {startQuestions}