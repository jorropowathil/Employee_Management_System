const db = require('./connection');

async function createTable(response, obj){
    console.log(response);
    switch(response) {
        // DEPARTMENT CASES
        // View all departments
        case 'View all departments':
            db.query(`SELECT department.id AS ID, name AS Department FROM department;`)
            console.table(results);
            break;

        // Add a department case
        case 'Add a department':
            console.log("random stuff here!");
            db.query(`INSERT INTO department (name)
            VALUES ("${obj.name}");`,)
            break;

        // View all roles case
        case 'View all roles':
            console.log('View all roles stuff ');
            db.query(`SELECT role.department_id AS ID, department.name AS Department, title AS Title, salary AS Salary 
            FROM role
            INNER JOIN department
            ON role.id = department.id;
            `)
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
        // View all employees
        case 'View all employees':
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
                    console.log('');
                    console.table(results);
            })
            break;
            // Add an employee
            case 'Add an employee':
                db.query(`
                INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${obj.first_name}", "${obj.last_name}", ${obj.role_id}, ${obj.manager_id}); 
                `)
                break;
}}


module.exports = {createTable}