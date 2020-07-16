const inquirer = require("inquirer");
const questions = require('./assets/questions.js');
const Departments = require("./models/departments.js");
const Roles = require("./models/role.js");
const Employees = require("./models/departments.js");
const departments = require("./models/departments.js");


const init = () => {
    inquirer
    .prompt(questions.main)
        .then(({operation}) => {
            console.log(operation)
            switch (operation){
                case 'View all Employees':
                // view()    
                
                    Employees.selectAll()
                    .then(results => console.table(results))
                    .catch(console.error)
                    break;
                case 'View all Departments':
                    Departments.selectAll()
                    .then(results => console.table(results))    
                    .catch(err => console.log(err))
                    break;
                case 'Update':
                    update();
                    
                    break;
                default:
                    break;
            }
            
        })
    .catch(err => console.log(err))
}

init();

const view = () => {
    inquirer
    .prompt(
        {
        type: 'list',
        message: 'Which table do you want to view?',
        name: 'view',
        choices: ['Departments','Roles','Employees'],
        }  
    )
    .then(async ({view}) => {
        console.log(view)
        await Departments.selectAll()
        .then(results => console.table(results))    
        .catch(err => console.log(err))
    })
    .then(init)
    
}

const update = () => {
    
        Departments.update()
        .then(results => console.table(results))    
        .catch(err => console.log(err))
    
}

const add = () => {
    
        Departments.add()
        .then(results => console.table(results))    
        .catch(err => console.log(err))
    
}

const remove = () => {

}