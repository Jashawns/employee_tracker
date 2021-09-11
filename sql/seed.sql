USE employee_trackerDB;

INSERT INTO department (name)
VALUES ("Docket");
INSERT INTO department (name)
VALUES ("Procurement");
INSERT INTO department (name)
VALUES ("Front Office");
INSERT INTO department (name)
VALUES ("Human Resource");
INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Support Staff");
INSERT INTO department (name)
VALUES ("District Office");
INSERT INTO department (name)
VALUES ("Mediation");
INSERT INTO department (name)
VALUES ("Judicial");
INSERT INTO department (name)
VALUES ("Mailroom");

INSERT INTO role (title, salary, department_id, id)
VALUES ("Docket Clerk", 45000.00, 1, 1);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Budget Officer", 68000.00, 2, 2);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Director", 150000.00, 3, 3);
INSERT INTO role (title, salary, department_id, id)
VALUES ("HR Specialist", 60000.00, 4, 4);
INSERT INTO role (title, salary, department_id, id)
VALUES ("IT Specialist", 75000.00, 5, 5);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Legal Tech", 55000.00, 6, 6);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Staff Attorney", 80000.00, 7, 7);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Mediator", 80000.00, 8, 8);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Judge", 175000.00, 9, 9);
INSERT INTO role (title, salary, department_id, id)
VALUES ("Mail Clerk", 35000.00, 10, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Patricia", "Cloud", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Karen", "Cook", 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Lewis", 10, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tonya", "Smith", 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Wheel", 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sheila", "Noon", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alyssa", "Key", 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Beth", "Sales", 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Stephen", "Hat", 10, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Moore", 1, 1);
