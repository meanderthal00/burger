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
        password: "toorresu",
        database:"burgers_db"
    });
};
connection.connect();
module.exports = connection;


