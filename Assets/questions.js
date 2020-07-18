const { connection } = require("../config/orm")

var findRolesArray = []
var findRoleValue = []
// SELECT name, title, id FROM role
// INNER JOIN department ON role.department_id = department.id
const findRoles = (col1,col2,col3,table1,table2,id1,id2) =>{
    const queryString = 'SELECT ??, ??, ??.?? FROM ?? INNER JOIN ?? ON ??.?? = ??.??';
    const role = connection.query(queryString,[col1,col2,table1,col3,table1,table2,table1,id1,table2,id2])
    .then(results => {
        for (let i = 0; i < results.length; i++) {
            findRolesArray.push(results[i].name+' '+results[i].title)
            findRoleValue.push(results[i])    
        }
        // console.table(findRoleValue) 
    })
    .catch(console.error)
}

var findManagerArray=[]
var findManagerValue=[]
const findManagers = (col1,col2,table,id) =>{
    const queryString = 'SELECT ??, ?? FROM ?? WHERE ?? IS NULL';
    const role = connection.query(queryString,[col1,col2,table,id])
    .then(results => {
        for (let i = 0; i < results.length; i++) {
            findManagerArray.push(results[i].first_name+' '+results[i].last_name)
            findManagerValue.push(results[i])    
        }
        // console.table(findManagerValue) 
    })
    .catch(console.error)
}
var listDepartmentArray = []
var listDepartmentArrayValue = []
const listDepartment = (col,table) =>{
    const queryString = 'SELECT ?? FROM ??';
    const role = connection.query(queryString,[col,table])
    .then(results => {
        for (let i = 0; i < results.length; i++) {
            listDepartmentArray.push(results[i].name)
            listDepartmentArrayValue.push(results[i])    
        }
        // console.table(listDepartmentArrayValue) 
    })
    .catch(console.error)
}

listDepartment('name','department')
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

employeeQ:[
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
        choices: findRolesArray,
        filter: function () {
            console.log(findRolesArray[value])
        }
    },
    {
        type: 'list',
        message: 'Who is the manager?',
        name: 'manage_id', 
        choices: findManagerArray
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
        name:'departmentList',
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

