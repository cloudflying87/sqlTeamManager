const orm = require('../config/orm.js')

class Role {
    selectAll(){
        return orm.selectAll('role')
    }

    create(title,salary,department_id){
        return orm.create('role',['title','salary','department_id'],[title,salary,department_id])
    }

}

module.exports = new Role()