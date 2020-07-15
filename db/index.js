const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }

    getBooks(){
        return connection.query("SELECT * FROM books RIGHT JOIN authors ON authors.id = books.authorId WHERE authorId = ?", [1])
    }

    // TODO: create addBook method that invokes an INSERT INTO statement
}

module.exports = new DB(connection)

// const test = new DB(connection);

// test.getBooks()
//     .then(response => console.log(response))