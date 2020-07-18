// const Base = require('./base')
const orm = require('../config/orm.js')

class Department {

    selectAll(){
        return orm.selectAll('department')
    }

    create(name){
        return orm.create('department',['name'],[name])
    }
}

module.exports = new Department();