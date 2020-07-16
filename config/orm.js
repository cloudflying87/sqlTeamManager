const connection = require('./connection');

class ORM {
    constructor(connection){
        this.connection = connection;
    }

    printQuestionMarks(numberOfValues){
        const questionMarks = [];
    
        for (var i = 0; i < numberOfValues; i++) {
          questionMarks.push("?");
        }
    
        return questionMarks.join(', ');
      }

    selectAll(table){
        const queryString = 'SELECT * FROM  ??';
        return this.connection.query(queryString, [table])
    }

    // TODO: create addBook method that invokes an INSERT INTO statement
}

module.exports = new ORM(connection)