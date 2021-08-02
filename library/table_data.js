const db = require('./connection');
const inquirer = require('inquirer');

async function createTable(response, obj){
    console.log(response);
    switch(response) {
        // DEPARTMENT CASES
        // Add a department case
        case 'Add a department':
            console.log("random stuff here!");
            db.query(`INSERT INTO department (name)
            VALUES ("${obj.name}");`,)
            break;

        // Add a role case 
        case 'Add a role':
            console.log('Add a role stuff!');
            db.query(`INSERT INTO role (title, salary, department_id)
            VALUES ("${obj.title}", "${obj.salary}", ${obj.department_id});`)
            break;

        // Update a role case 
        case 'Update employee role':
            console.log('this is update employee role stuff');
            db.query(`UPDATE employee SET role_id = ${obj.newID} WHERE id = ${obj.selected_employee};`)
            break;

        // EMPLOYEES CASES
            // Add an employee
            case 'Add an employee':
                db.query(`
                INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${obj.first_name}", "${obj.last_name}", ${obj.role_id}, ${obj.manager_id}); 
                `)
                break;
}}


module.exports = {createTable};