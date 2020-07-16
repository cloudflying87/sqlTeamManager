// const Base = require('./base')
const orm = require('../config/orm.js')

class Department {

    selectAll(){
        return orm.selectAll('department')
    }

    update(){
        return orm.update('department',objColVals,value)
    }
}

module.exports = new Department();