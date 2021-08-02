const inquirer = require('inquirer');
const table = require('./table_data');
const db = require('./connection');
const functions = require('./functions');


async function startQuestions(){
    inquirer.prompt([{
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
        type: 'list',
        message: 'What do you want to do?',
        name: 'title',
        choices: [
            {name: "View all departments"},
            {name: "View all employees"},
            {name: "View all roles"},
            {name: "Add a department"},
            {name: "Add an employee"},   
            {name: "Add a role"},
            {name: "Update employee role"},
            {name: "Quit"}
        ]}])
        .then ((response) => {
            switch(response.title){
                case 'View all departments':
                    console.log('List of departments');
                    db.query(`
                    SELECT department.id AS ID, name AS Department FROM department;
                    `,
                    function(err, results) {
                        if (err) {
                            console.log(err);
                        }
                        console.log(' ');
                        console.table(results);
                    })
                    startQuestions();
                break;
                case 'Add a department':
                    functions.addDepartment();
                break;
                case 'Add a role':
                    functions.addRole();
                break;
                case 'Update employee role':
                    functions.updateRole();
                break;
                case 'Add an employee':
                    functions.addEmployee();
                break;
                
                case 'View all roles':
                    console.log('List of roles');
                    db.query(`SELECT role.department_id AS ID, department.name AS Department, title AS Title, salary AS Salary 
                    FROM role
                    INNER JOIN department
                    ON role.id = department.id;
                    `,
                    function(err, results) {
                        if (err) {
                            console.log(err);
                        }
                        console.log(' ');
                        console.table(results);
                    })
                    startQuestions();
                    break;
                case 'View all employees':
                    console.log('List of employees');
                    db.query(`
                        SELECT employee.id AS ID, CONCAT(first_name, ' ', last_name) AS Name, title AS Title, department.name AS Department, salary AS Salary, manager_id AS Manager_ID
                        FROM employee 
                        INNER JOIN role 
                        ON role.id = employee.role_id 
                        INNER JOIN department 
                        ON role.department_id = department.id;`,
                        function(err, results) {
                            if (err) {
                            console.log(err);
                            }
                            console.log(' ');
                            console.table(results);
                        })
                        startQuestions();
                    break;
                case 'Quit':
                    console.log('Goodbye friend!');
                break;
        }})}
 

module.exports = {startQuestions};