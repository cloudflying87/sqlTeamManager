const { connection } = require("../config/orm")


findRoles('name','title','id','role','department','department_id','id')
findManagers('first_name','last_name','employee','manager_id')

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
            'Delete department',
            'Delete role'
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

    }

