const inquirer = require("inquirer");
const questions = require('./assets/questions.js');
const Departments = require("./models/departments.js");
const Role = require("./models/role.js");
const Employee = require("./models/employee.js");


const init = () => {
    inquirer
    .prompt(questions.main)
        .then(async answers => {
            console.log(answers.operation)
            switch (answers.operation){
                case 'View all employees':
                         await Employee.selectAll()
                        .then(results => console.table(results))    
                        .catch(err => console.log(err))
                        .then(init)
                    break;
                case 'View all departments':
                        await Departments.selectAll()
                        .then(results => console.table(results))    
                        .catch(err => console.log(err))
                        .then(init)
                    break;
                case 'View all roles':
                        await Role.selectAll()
                        .then(results => console.table(results))    
                        .catch(err => console.log(err))
                        .then(init)
                    break;
                    case 'Add Employee':
                        inquirer.prompt(questions.employee)
                        await Employee.add()
                        .then(results => console.table(results))    
                        .catch(err => console.log(err))
                        .then(init)
                    break;
                default:
                    break;
            }
            
        })
    .catch(err => console.log(err))
}

init();