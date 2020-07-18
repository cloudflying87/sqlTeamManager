const orm = require('../config/orm.js')

class Employee {
    selectAll(){
        return orm.selectAllEmployees()
    }

    create(firstName,lastName,roleId,managerId){
        return orm.create('employee',['first_name','last_name','role_id','manager_id'],[firstName,lastName,roleId,managerId])
    }

}

module.exports = new Employee();