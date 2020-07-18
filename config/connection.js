const mysql = require('mysql');
const util = require('util');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // Your port; if not 3306
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "employeetracker_db"
});

connection.query = util.promisify(connection.query)

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;