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
  // This returns the data in the promise and writes to the database in one breath
      return this.connection.query(queryString, [table, ...values])
    }

    selectAll(table){
      const queryString = 'SELECT * from ??'
      return this.connection.query(queryString,[table])
    }
    selectAllEmployees(){
        const queryString = 'SELECT emp.id, emp.first_name, emp.last_name, concat(dept.name," ", role.title) as Employee_Title, dept.name, role.salary, concat(mng.first_name, " ", mng.last_name) as ManagerName from employee emp left outer join employee mng on emp.manager_id = mng.id left outer join role on emp.role_id = role.id left outer join department dept on role.department_id = dept.id order by emp.last_name;';
        return this.connection.query(queryString)
    }

    update(table, objCol,Col, colName, id) {
      var queryString = `UPDATE ?? SET ??=? WHERE ??=?`;
      console.log(queryString);
  
      return this.connection.query(queryString, [table, objCol,Col, colName, id])
    }
    
    remove(tableInput, colToSearch, valOfCol) {
      const queryString = "DELETE FROM ?? WHERE ?? = ?";
      return this.connection.query(queryString, [tableInput, colToSearch, valOfCol])
    }

    findRolesI(col1,col2,col3,table1,table2,id1,id2){
      const queryString = 'SELECT ??, ??, ??.?? FROM ?? INNER JOIN ?? ON ??.?? = ??.??';
      const role = connection.query(queryString,[col1,col2,table1,col3,table1,table2,table1,id1,table2,id2])
    }

    viewDepartmentINQ() {
      const queryString = "SELECT id as value, name FROM department"
      return this.connection.query(queryString);
    };

    viewRoleDept(){
      const queryString = "select role.id as value, concat(name,' ',title) as name from department inner join role on department_id = department.id;"
      return this.connection.query(queryString);
   }

    selectManagers(){
      const queryString = "SELECT id as value, concat(first_name,' ', last_name) as name from employee where manager_id is null;"
      return this.connection.query(queryString);
    }

    findEmployee(){
      const queryString = "SELECT id as value, concat(first_name,' ', last_name) name from employee;"
      return this.connection.query(queryString);
    }
}


module.exports = new ORM(connection)