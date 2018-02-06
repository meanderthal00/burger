// THIS PAGE IS DONE

var mysql = require("mysql");

// creating the connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000, 

    user:"root",
    password:"toorresu",
    database:"burgers_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // call functions here
})
module.exports = connection;
