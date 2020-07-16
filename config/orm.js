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
    
    
      create(table, columns, values) {
      const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

      console.log(queryString);
  // This returns the data in the promise and writes to the database in one breath
      return this.connection.query(queryString, [table, ...values])
    }

    selectAll(table){
        const queryString = 'SELECT * FROM  ??';
        
    update(table, objColVals, id) {
      var queryString = `UPDATE ?? SET ? WHERE ?`;
      console.log(queryString);
  
      return this.connection.query(queryString, [table, objColVals, id])
    }
    
    remove(tableInput, colToSearch, valOfCol) {
      const queryString = "DELETE FROM ?? WHERE ?? = ?";
      return this.connection.query(queryString, [tableInput, colToSearch, valOfCol])
    }

}

module.exports = new ORM(connection)