module.exports = questions = 
    {
    main: {
        type: "list",
        name: "operation",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee"
        ]
    },

employee:[
    {
        type: 'input',
        message: 'First Name',
        name: 'firstName',
    }, 
    {
        type: 'input',
        message: 'Last Name',
        name: 'lastName',
    },
    {
        type: 'list',
        message: 'Which records would you like to view?',
        name: 'view',
        choices: ['Departments','Roles','Employees'],
        when: (answers) => {
            return answers.operation == 'View'
          }  
    },
    {
        type: 'list',
        message: 'Which group would you to update?',
        name: 'update',
        choices: ['Departments','Roles','Employees'],
        when: (answers) => {
            return answers.operation == 'Update'
          }  
    },
    {
        type: 'confirm',
        message: 'Continue working?',
        name: 'end',
        default: true
    }
]
    }

module.exports = questions;
