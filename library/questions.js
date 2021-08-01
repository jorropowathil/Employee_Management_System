const inquirer = require('inquirer');
const table = require('./table_data');
// const importFunctions = require('./functions');

async function startQuestions(){
    inquirer.prompt([{
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
        type: 'list',
        message: 'What do you want to do?',
        name: 'title',
        choices: [
            {name: "View all departments"},
            {name: "Add a department"},
            {name: "View all roles"},
            {name: "Add a role"},
            {name: "View all employees"},
            {name: "Update employee role"},
            {name: "Add an employee"},   
            {name: "Quit"}
        ]}])
        .then ((response) => {
            const obj = {}
            switch(response.title){
                case 'Add a department':
                    addDepartment();
                case 'Add a role':
                case 'Update employee role':
                case 'Add an employee':
                case 'Quit':
                    console.log('See you next time!');
            }
        })}

module.exports = {startQuestions}