const orm = require('../config/orm.js')

class Base {

    selectAll(table){
        return orm.selectAll(table)
    }
}

module.exports = new Base();