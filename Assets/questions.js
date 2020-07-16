const questions = [
    {
        type: 'list',
        message: 'Choose an operation?',
        name: 'operation',
        choices: ['View','Add','Update']
    },
    {
        type: 'list',
        message: 'To which group would you like to add records?',
        name: 'add',
        choices: ['Departments','Roles','Employees'],
        when: (answers) => {
            return answers.operation == 'Add'
          }  
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
    }    
]

module.exports = questions;