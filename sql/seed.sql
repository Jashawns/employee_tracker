USE employee_trackerDB;

INSERT INTO departments (name)
VALUES ("Docket");
INSERT INTO departments (name)
VALUES ("Procurement");
INSERT INTO departments (name)
VALUES ("Front Office");
INSERT INTO departments (name)
VALUES ("Human Resource");
INSERT INTO departments (name)
VALUES ("IT");
INSERT INTO departments (name)
VALUES ("Support Staff");
INSERT INTO departments (name)
VALUES ("District Office");
INSERT INTO departments (name)
VALUES ("Mediation");
INSERT INTO departments (name)
VALUES ("Judicial");
INSERT INTO departments (name)
VALUES ("Mailroom");

INSERT INTO roles (title, salary, department_id)
VALUES ("Docket Clerk", 45000.00, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Budget Officer", 68000.00, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Director", 150000.00, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("HR Specialist", 60000.00, 4);
INSERT INTO roles (title, salary, department_id)
VALUES ("IT Specialist", 75000.00, 5);
INSERT INTO roles (title, salary, department_id)
VALUES ("Legal Tech", 55000.00, 6);
INSERT INTO roles (title, salary, department_id)
VALUES ("Staff Attorney", 80000.00, 7);
INSERT INTO roles (title, salary, department_id)
VALUES ("Mediator", 80000.00, 8);
INSERT INTO roles (title, salary, department_id)
VALUES ("Judge", 175000.00, 9);
INSERT INTO roles (title, salary, department_id)
VALUES ("Mail Clerk", 35000.00, 10);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Patricia", "Cloud", 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Karen", "Cook", 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Lewis", 10, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tonya", "Smith", 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Wheel", 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sheila", "Noon", 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Alyssa", "Key", 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Beth", "Sales", 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Stephen", "Hat", 10, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Moore", 1, 1);
