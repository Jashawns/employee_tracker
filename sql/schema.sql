DROP DATABASE IF EXISTS employee_trackerDB;

CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY (department_id) REFERENCES departments(id),
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL ,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  manager_id INT,
  PRIMARY KEY (id)
);

-- Adding values
INSERT INTO departments (name)
VALUES 	('Docketing'),
				('Budget'),
				('Executive');

INSERT INTO roles (title, salary, id, department_id)
VALUES  ('Docket Clerk', 55500.00, 4, 1),
        ('Payroll', 75000.00, 7, 2),
		('Chief', 108000.00, 10, 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES  ('John', 'Doe', 4),
        ('Joe', 'Fawn',  7),
		('Jane', 'Deer', 10);
	
-- setting manager id
UPDATE employees
SET manager_id = 1
WHERE role_id  <= 5;

UPDATE employees
SET manager_id = 2
WHERE role_id  = 7;

-- Changing Roles just select which title and fill in where and at set type new title 
UPDATE roles
SET title = ""
WHERE title = "";

UPDATE roles
SET title = "Human Resource Specialist"
WHERE title = "Payroll";

UPDATE employees
SET role_id = 3
WHERE role_id = 4;

-- view each table  
SELECT * FROM employees;
SELECT * FROM roles;
SELECT * FROM departments;

-- searching by manager 
SELECT * FROM employees
WHERE manager_id IS NOT NULL;

SELECT * FROM employees
WHERE manager_id = 1;

SELECT * FROM employees
WHERE manager_id = 2;

SELECT * FROM employees
WHERE manager_id IS NULL;

-- --deleting; choose what to delete after WHERE or remove WHERE to delete everything
DELETE FROM departments WHERE "";
DELETE FROM roles WHERE "";
DELETE FROM employees WHERE "";

-- total budget by sum of salary
SELECT SUM(salary) FROM roles;

-- average salary
SELECT AVG(salary) FROM roles;







    