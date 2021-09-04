// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Managing Data
const departments = require('./data/departments');
const employees = require('./data/employees');
const roles = require('./data/roles');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'employee_trackerDB',
});

