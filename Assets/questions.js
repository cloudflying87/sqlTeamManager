const { connection } = require("../config/orm")

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
            "Update employee",
            'Delete employee',
        ]
    },

employeeQ: (roleArr,mangArr) => [
    {
        type: 'input',
        message: 'Enter First Name',
        name: 'first_name',
    }, 
    {
        type: 'input',
        message: 'Enter Last Name',
        name: 'last_name',
    },
    {
        type: 'list',
        message: 'What is the role?',
        name: 'role_id', 
        choices: roleArr
    },
    {
        type: 'list',
        message: 'Who is the manager?',
        name: 'manager_id', 
        choices: mangArr
    },
],

updateEmployeeQ: (employee,roleArr,mangArr) => [
    {
        type: 'list',
        message: 'Which employee do you want to update?',
        name: 'update_Id', 
        choices: employee
    },
    {
        type: 'list',
        message: 'What is their new role?',
        name: 'role_id', 
        choices: roleArr
    },
],
    
roleQ:(deptArr) => [
    {
        type: 'input',
        message: 'Employee Role',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the salary?',
        name: 'salary',
    },
    {
        type:'list',
        message:'What department does this belong to?',
        name:'deptId',
        choices: deptArr
    }
],
departmentQ:[
    {
        type: 'input',
        message: 'Name of Department',
        name: 'departmentName',
    }

],

employeeDelete: (employee) =>[
    {
        type:'list',
        message:'Which employee would you like to remove?',
        name:'delete',
        choices: employee
    }    
    ]

    }

