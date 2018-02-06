// THIS PAGE IS DONE

var mysql = require("mysql");



// adding the JawsDB functions, not sure if this is right.

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password: "t00rresu",
        database:"burgers_db"
    });
};
connection.connect();
module.exports = connection;

// creating the connection

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3000, 
//     user:"root",
//     password:"toorresu",
//     database:"burgers_db"
// });
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // call functions here
})
module.exports = connection;
