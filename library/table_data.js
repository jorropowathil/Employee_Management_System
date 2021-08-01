const db = require('./connection');

function createTable(response){
    console.log('randomstuff');
    switch(response.title) {
        case 'View all employees':
            console.log('randomstuff');
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
                    // break;
            })}}


module.exports = {createTable}