import { connect } from "tls";

var connection = require("../config/connection.js");

// methods to be created:

//selectAll()

//insertONe()

//updateOne()

// Looping through to create an array of question marks

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function to convert to SQL syntax

function objToSql(ob) {
    var arr = [];

    //looping through an pushing value as a string to the array

    for (var key in ob) {
        var value = ob[key];
        //checking to skip hidden prop.
        if (Object.hasOwnProperty.call(ob, key)) {
            //if the string contains spaces, add quotes
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    //changes array of strings to a single string.
    return arr.toString();
}

//SQL function object
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //next function here INSERToNE()
    insertONe: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
//example of objColVals; {name: cheeseburger, devoured: true}

updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE" + table;

    queryString += "SET";
    queryString += objToSql(objColVals);
    queryString += "WERE";
    queryString += condition;

    console.log("The queryString is: " + queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},
};

// syntax to export
module.exports = orm;