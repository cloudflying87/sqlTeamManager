const orm = require('../config/orm.js')

class Role {
    selectAll(){
        return orm.selectAll('role')
    }
    

}

module.exports = new Role()