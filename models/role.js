const orm = require('../config/orm.js')

class Role {
    selectAll(){
        return orm.selectAll('role')
    }

    create(title,salary,department_id){
        return orm('role',['title','salary','deparment_id'],[title,salary,department_id])
    }

}

module.exports = new Role()