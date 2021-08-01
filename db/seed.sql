-- Need to change strings

INSERT INTO department (name)
VALUES ("Management"),
       ("Research and Development"),
       ("Accounting"),
       ("Human Resource"),
       ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 120000, 1),
       ("Analyst", 70000, 2),
       ("Accountant", 90000, 3),
       ("Human Resource Representative", 30000, 4),
       ("Warehouse Manager", 60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dana", "Harrington", 1, null),
       ("Leon", "Ross", 2, 1),
       ("Josh", "Burton", 2, 5),
       ("Adam", "Holland", 4, 1),
       ("Jisha", "John", 3, 5),
       ("Mark", "Hampton", 5, null);