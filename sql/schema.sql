DROP DATABASE IF EXISTS employee_trackerDB;

CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY (department_id) REFERENCES department(id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL ,
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT,
  PRIMARY KEY (id)
);

-- Adding values
INSERT INTO department (name)
VALUES 	('Docketing'),
				('Budget'),
				('Executive');

INSERT INTO role (title, salary, id, department_id)
VALUES  ('Docket Clerk', 55500.00, 4, 1),
        ('Payroll', 75000.00, 7, 2),
		('Chief', 108000.00, 10, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('John', 'Doe', 4),
        ('Joe', 'Fawn',  7),
		('Jane', 'Deer', 10);
	
-- setting manager id
UPDATE employee
SET manager_id = 1
WHERE role_id  <= 5;

UPDATE employee
SET manager_id = 2
WHERE role_id  = 7;

-- Changing Roles just select which title and fill in where and at set type new title 
UPDATE role
SET title = ""
WHERE title = "";

UPDATE role
SET title = "Human Resource Specialist"
WHERE title = "Payroll";

UPDATE employee
SET role_id = 3
WHERE role_id = 4;

-- view each table  
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;

-- searching by manager 
SELECT * FROM employee
WHERE manager_id IS NOT NULL;

SELECT * FROM employee
WHERE manager_id = 1;

SELECT * FROM employee
WHERE manager_id = 2;

SELECT * FROM employee
WHERE manager_id IS NULL;

-- --deleting; choose what to delete after WHERE or remove WHERE to delete everything
DELETE FROM department WHERE "";
DELETE FROM employee WHERE "";

-- total budget by sum of salary
SELECT SUM(salary) FROM role;

-- average salary
SELECT AVG(salary) FROM role;

-- join
SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
LEFT JOIN role r
  ON e.role_id = r.id
LEFT JOIN department d
ON d.id = r.department_id
LEFT JOIN employee m
  ON m.id = e.manager_id







    