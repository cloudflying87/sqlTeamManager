const inquirer = require("inquirer");
const questions = require('./assets/questions.js');
const Departments = require("./models/departments.js");
const Role = require("./models/role.js");
const Employee = require("./models/employee.js");
const orm = require('./config/orm.js')

const init = () => {
    inquirer
    .prompt(questions.main)
        .then(async answers => {
            
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
                case 'Add employee':
                    await inquirer.prompt(questions.employeeQ)
                    .then(async employeeInfo => {
                        console.table(employeeInfo.role_id)
                        await Employee.create(employeeInfo.first_name,employeeInfo.last_name,employeeInfo.role_id,employeeInfo.manager_id)
                        .then(results => console.table(results))    
                        .catch(console.error)
                        .then(init)
                    })
                case 'Add department': 
                    await inquirer.prompt(questions.departmentQ)
                    .then(async departmentName => {

                        await Departments.create(departmentName.departmentName)
                        .then(departmentName => console.table(departmentName))
                        .catch(console.error)
                        .then(init)
                    })
                break;
                case 'Add role':
                        await addRole() 
                    // await inquirer.prompt(questions.roleQ)
                    // .then(async roleInfo => {

                    //     await Role.create(roleInfo.title,roleInfo.salary,roleInfo.department_id)
                    //     .then(console.log('Success'))
                    //     .catch(console.error)
                        .then(init)
                    // })    
                break;
                case 'Update employee':    
                break;
                case 'Delete employee':    
                break;
                default:
                break;
            }
            
        })
    .catch(err => console.log(err))
}

const addRole = async () => {
    try {
        const departments = await orm.viewDepartmentINQ();
        const result = await inquirer.prompt(questions.roleQ(departments))
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
};

init();