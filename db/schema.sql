DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
SELECT company_db;
USE company_db;


-- Create Table for department
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL, 
    -- Primary key because it is a unique id (No repeats)
    PRIMARY KEY (id)
);

-- Create Table for roles
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR (30) NOT NULL, 
    Salary INT NOT NULL,  
    -- Foreign key because we are referencing department ID from another table
    -- Not sure why ON DELETE SET NULL WORKS
    FOREIGN KEY (departments_id) REFERENCES departments(id) ON DELETE SET NULL
);

-- Create Table for employee
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(20) NOT NULL, 
    last_Name VARCHAR(20) NOT NULL, 
    supervisor VARCHAR(30) NOT NULL,
    roles_id INT, 
    supervisor_id INT,
    FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (supervisor_id) REFERENCES supervisor(id)
);