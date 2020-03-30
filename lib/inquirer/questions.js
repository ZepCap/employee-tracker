const questions = {
	// Need questions for what they want to do
	// choices will need to include:
	// add department, roles, employees (each needs to be its own line)
	// view department, roles, employees (each needs to be its own line)
	// update employee roles
	start: [
		{
			type: 'list',
			name: 'toDo',
			message: 'What would you like to do?',
			choices: [
				'View All Employees',
				'View All Employees By Department',
				'View All Employees By Manager',
				'Add Employee',
				'Remove Employee',
				'Update Employee Role',
				'Update Employee Manager',
				'Quit Program'
			]
		}
	],
	viewDepart: [
		{
			type: 'list',
			name: 'department',
			message: 'What department would you like to see?',
			choices: [ 'Sales', 'Engineering', 'Finance', 'Legal' ]
		}
	],
	viewManager: [
		{
			type: 'list',
			name: 'man',
			message: 'Select the manager to see his employees',
			choices: [ 'Yoda', 'Obi-Wan Kenobi', 'Mace Windu' ]
		}
	],
	addEmploy: [
		{
			type: 'input',
			name: 'fname',
			message: 'What is the first name of the employee?'
		},
		{
			type: 'input',
			name: 'lname',
			message: 'What is the last name of the employee?'
		},
		{
			type: 'list',
			name: 'role',
			message: 'What is the role of the employee?',
			choices: [
				'1. Sales Lead',
				'2. Salesperson',
				'3. Lead Engineer',
				'4. Software Engineer',
				'5. Accountant',
				'6. Legal Team Lead',
				'7. Lawyer'
			]
		},
		{
			type: 'list',
			name: 'manager',
			message: 'Who is the manager of the employee?',
			choices: [ '1. Yoda', '2. Obi-Wan Kenobi', '3. Mace Windu' ]
		}
	],
	removeEmploy: [
		{
			type: 'list',
			name: 'remove',
			message: 'Which employee would you like to remove?',
			choices: [
				'Luke Skywalker',
				'Rey Skywalker',
				'Leia Organa',
				'Ben Solo',
				'Lando Calrissian',
				'Finn Schwartz',
				'Poe Dameron'
			]
		}
	],
	updateEmployRole: [
		{
			type: 'list',
			name: 'selectEmp',
			message: 'Which employee would you like to update?',
			choices: [
				'1. Luke Skywalker',
				'2. Rey Skywalker',
				'3. Leia Organa',
				'4. Ben Solo',
				'5. Lando Calrissian',
				'6. Finn Schwartz',
				'7. Poe Dameron'
			]
		},
		{
			type: 'list',
			name: 'newRole',
			message: 'What will be the new role of this employee?',
			choices: [
				'1. Sales Lead',
				'2. Salesperson',
				'3. Lead Engineer',
				'4. Software Engineer',
				'5. Accountant',
				'6. Legal Team Lead',
				'7. Lawyer'
			]
		}
	],
	updateEmployMan: [
		{
			type: 'list',
			name: 'selectEm',
			message: 'Which employee would you like to update?',
			choices: [
				'1. Luke Skywalker',
				'2. Rey Skywalker',
				'3. Leia Organa',
				'4. Ben Solo',
				'5. Lando Calrissian',
				'6. Finn Schwartz',
				'7. Poe Dameron'
			]
		},
		{
			type: 'list',
			name: 'newMan',
			message: 'Who will be the new manager of this employee?',
			choices: [ '1. Yoda', '2. Obi-Wan Kenobi', '3. Mace Windu' ]
		}
	]
};

module.exports = questions;
// [ 'Yoda', 'Obi-Wan Kenobi', 'Mace Windu' ]