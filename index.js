// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'employee_trackerDB',
});

// connect server and DB
connection.connect(function (err) {
  if (err) throw err;
  // function to start
  startTracker();
});

// action chosen
function startTracker() {

  inquirer
    .prompt({
      type: "list",
      name: "tablePrompt",
      message: "Choose your action.",
      choices: [
        "View All Employee Data",
		"View Average Salary",
		"Add Employee",
		"Delete Employee Where First Name = ",
        "End"]
    })
    .then(function ({ tablePrompt }) {
      switch (tablePrompt) {
        case "View All Employee Data":
          	viewEmployee();
	  break;
		case "View Average Salary":
			averageSalary();
	  break;
	    case "Add Employee":
			addEmployee();
	  break;
		case "Delete Employee Where First Name = ":
			deleteEmployee();	
  	  break;
        case "End":
        connection.end();
      break;
      }
    });
}

// View All

function viewEmployee() {
	console.log(
		chalk.yellow(`
    
---------------------------------------------------------------------------------------                                                
     ________                          __                                              
    /        |                        /  |                                             
    $$$$$$$$/  _____  ____    ______  $$ |  ______   __    __   ______    ______       
    $$ |__    /     \/    \  /      \ $$ | /      \ /  |  /  | /      \  /      \      
    $$    |   $$$$$$ $$$$  |/$$$$$$  |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |/$$$$$$  |     
    $$$$$/    $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$    $$ |     
    $$ |_____ $$ | $$ | $$ |$$ |__$$ |$$ |$$ \__$$ |$$ \__$$ |$$$$$$$$/ $$$$$$$$/      
    $$       |$$ | $$ | $$ |$$    $$/ $$ |$$    $$/ $$    $$ |$$       |$$       |     
    $$$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/  $$$$$$/   $$$$$$$ | $$$$$$$/  $$$$$$$/      
                            $$ |                    /  \__$$ |                         
                            $$ |                    $$    $$/                          
                            $$/                      $$$$$$/                           
     __       __                                                                       
    /  \     /  |                                                                      
    $$  \   /$$ |  ______   _______    ______    ______    ______    ______            
    $$$  \ /$$$ | /      \ /       \  /      \  /      \  /      \  /      \           
    $$$$  /$$$$ | $$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |          
    $$ $$ $$/$$ | /    $$ |$$ |  $$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/           
    $$ |$$$/ $$ |/$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |                
    $$ | $/  $$ |$$    $$ |$$ |  $$ |$$    $$ |$$    $$ |$$       |$$ |                
    $$/      $$/  $$$$$$$/ $$/   $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/                 
                                               /  \__$$ |                              
                                               $$    $$/                               
                                                $$$$$$/                                                                    
-----------------------------------------------------------------------------------------
                                                                                          
    `)
	);

  var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Completed");

    startTracker();
  });
}

// Average Salary
function averageSalary() {
	console.log(
		chalk.yellow(`
    
---------------------------------------------------------------------------------------                                                
     ________                          __                                              
    /        |                        /  |                                             
    $$$$$$$$/  _____  ____    ______  $$ |  ______   __    __   ______    ______       
    $$ |__    /     \/    \  /      \ $$ | /      \ /  |  /  | /      \  /      \      
    $$    |   $$$$$$ $$$$  |/$$$$$$  |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |/$$$$$$  |     
    $$$$$/    $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$    $$ |     
    $$ |_____ $$ | $$ | $$ |$$ |__$$ |$$ |$$ \__$$ |$$ \__$$ |$$$$$$$$/ $$$$$$$$/      
    $$       |$$ | $$ | $$ |$$    $$/ $$ |$$    $$/ $$    $$ |$$       |$$       |     
    $$$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/  $$$$$$/   $$$$$$$ | $$$$$$$/  $$$$$$$/      
                            $$ |                    /  \__$$ |                         
                            $$ |                    $$    $$/                          
                            $$/                      $$$$$$/                           
     __       __                                                                       
    /  \     /  |                                                                      
    $$  \   /$$ |  ______   _______    ______    ______    ______    ______            
    $$$  \ /$$$ | /      \ /       \  /      \  /      \  /      \  /      \           
    $$$$  /$$$$ | $$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |          
    $$ $$ $$/$$ | /    $$ |$$ |  $$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/           
    $$ |$$$/ $$ |/$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |                
    $$ | $/  $$ |$$    $$ |$$ |  $$ |$$    $$ |$$    $$ |$$       |$$ |                
    $$/      $$/  $$$$$$$/ $$/   $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/                 
                                               /  \__$$ |                              
                                               $$    $$/                               
                                                $$$$$$/                                                                    
-----------------------------------------------------------------------------------------
                                                                                          
    `)
	);

  var query =
    `SELECT AVG(salary) FROM role`

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Completed");

    startTracker();
  });
}

// Add employee
function addEmployee() {
	console.log(
		chalk.yellow(`
	
---------------------------------------------------------------------------------------                                                
	 ________                          __                                              
	/        |                        /  |                                             
	$$$$$$$$/  _____  ____    ______  $$ |  ______   __    __   ______    ______       
	$$ |__    /     \/    \  /      \ $$ | /      \ /  |  /  | /      \  /      \      
	$$    |   $$$$$$ $$$$  |/$$$$$$  |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |/$$$$$$  |     
	$$$$$/    $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$    $$ |     
	$$ |_____ $$ | $$ | $$ |$$ |__$$ |$$ |$$ \__$$ |$$ \__$$ |$$$$$$$$/ $$$$$$$$/      
	$$       |$$ | $$ | $$ |$$    $$/ $$ |$$    $$/ $$    $$ |$$       |$$       |     
	$$$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/  $$$$$$/   $$$$$$$ | $$$$$$$/  $$$$$$$/      
							$$ |                    /  \__$$ |                         
							$$ |                    $$    $$/                          
							$$/                      $$$$$$/                           
	 __       __                                                                       
	/  \     /  |                                                                      
	$$  \   /$$ |  ______   _______    ______    ______    ______    ______            
	$$$  \ /$$$ | /      \ /       \  /      \  /      \  /      \  /      \           
	$$$$  /$$$$ | $$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |          
	$$ $$ $$/$$ | /    $$ |$$ |  $$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/           
	$$ |$$$/ $$ |/$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |                
	$$ | $/  $$ |$$    $$ |$$ |  $$ |$$    $$ |$$    $$ |$$       |$$ |                
	$$/      $$/  $$$$$$$/ $$/   $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/                 
											   /  \__$$ |                              
											   $$    $$/                               
												$$$$$$/                                                                    
-----------------------------------------------------------------------------------------
																						  
	`)
	);
	inquirer
	  .prompt([
		{
		  type: "response",
		  name: "first_name",
		  message: "What is the employee's first name?"
		},
		{
		  type: "response",
		  name: "last_name",
		  message: "What is the employee's last name?"
		},
		{
		  type: "list",
		  name: "role_id",
		  message: "What is the employee's role?",
		  choices: [
			"1",
			"10",
			"7",
			"2",
			"3",
			"End"]
		},
		{
			type: "list",
			name: "manager_id",
			message: "What is the employee's role?",
			choices: [
			  "1",
			  "2",
			  "null",
			  "End"]
		  },
	  ])
	  .then(function (answer) {
		console.log(answer.first_name);
		console.log(answer.last_name);
		console.log(answer.role_id);
		console.log(answer.manager_id);
  
		var query = `INSERT INTO employee SET ?`
		connection.query(query,
		  {
			first_name: answer.first_name,
			last_name: answer.last_name,
			role_id: answer.role_id,
			manager_id: answer.manager_id,
		  },
		  function (err, res) {
			if (err) throw err;
  
			console.table(res);
			console.log("Completed");
  
			startTracker();
		  });
	  });
  }

  // Delete employee
  function deleteEmployee() {
	console.log(
		chalk.yellow(`
	
		---------------------------------------------------------------------------------------                                                
			 ________                          __                                              
			/        |                        /  |                                             
			$$$$$$$$/  _____  ____    ______  $$ |  ______   __    __   ______    ______       
			$$ |__    /     \/    \  /      \ $$ | /      \ /  |  /  | /      \  /      \      
			$$    |   $$$$$$ $$$$  |/$$$$$$  |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |/$$$$$$  |     
			$$$$$/    $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$    $$ |     
			$$ |_____ $$ | $$ | $$ |$$ |__$$ |$$ |$$ \__$$ |$$ \__$$ |$$$$$$$$/ $$$$$$$$/      
			$$       |$$ | $$ | $$ |$$    $$/ $$ |$$    $$/ $$    $$ |$$       |$$       |     
			$$$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/  $$$$$$/   $$$$$$$ | $$$$$$$/  $$$$$$$/      
									$$ |                    /  \__$$ |                         
									$$ |                    $$    $$/                          
									$$/                      $$$$$$/                           
			 __       __                                                                       
			/  \     /  |                                                                      
			$$  \   /$$ |  ______   _______    ______    ______    ______    ______            
			$$$  \ /$$$ | /      \ /       \  /      \  /      \  /      \  /      \           
			$$$$  /$$$$ | $$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |          
			$$ $$ $$/$$ | /    $$ |$$ |  $$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/           
			$$ |$$$/ $$ |/$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |                
			$$ | $/  $$ |$$    $$ |$$ |  $$ |$$    $$ |$$    $$ |$$       |$$ |                
			$$/      $$/  $$$$$$$/ $$/   $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/                 
													   /  \__$$ |                              
													   $$    $$/                               
														$$$$$$/                                                                    
		-----------------------------------------------------------------------------------------
																								  
	`)
	);

	inquirer
	  .prompt([
	{
		type: "input",
		name: "first_name",
		message: "Delete Employee Where First Name = ",
	  },
	  ])
	  .then(function (answer) {
		console.log('answer.first_name Deleted');

		var query = `DELETE FROM employee WHERE ?`
		connection.query(query,
		  {
			first_name: answer.first_name,
		  },
		  function (err, res) {
			if (err) throw err;
  
			console.table(res);
			console.log("Completed");
  
			startTracker();
		  });
	  });
  }