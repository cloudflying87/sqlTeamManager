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
                    await addEmployee()
                        .then(init)
                    
                case 'Add department': 
                    await inquirer.prompt(questions.departmentQ)
                    .then(async departmentName => {

                        await Departments.create(departmentName.departmentName)
                        .then("Success")
                        .catch(console.error)
                        .then(init)
                    })
                break;
                case 'Add role':
                    await addRole() 
                    .then(init)    
                break;
                case 'Update employee':    
                break;
                case 'Delete employee':
                    deleteEmployee()    
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
        await Role.create(result.title,result.salary,result.deptId)
        console.log('Success')
    } catch (error) {
        console.log(error.message)
    }
};

const addEmployee = async () => {
        const role = await orm.viewRoleDept();
        const manager = await orm.selectManagers();
        const employeeInfo = await inquirer.prompt(questions.employeeQ(role,manager));
        await Employee.create(employeeInfo.first_name,employeeInfo.last_name,employeeInfo.role_id,employeeInfo.manager_id)
        .then(console.log(employeeInfo.manager_id))    
        .catch(console.error)
};
init();