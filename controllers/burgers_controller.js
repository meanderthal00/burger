// requiring dependencies
var express = require("express");

var router = express.Router();

//importing the burger databse
var burger = require("../models/burger.js");

//creating routes and logic set up
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject + " is the burgerObject");
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        //returning the ID# 
        res.json({
            id: result.insertId
        });
    });
});
router.put("/api/burgers/:id", function (req, res) {
    var conditon = "id = " + req.params.id;
    console.log("The condition of the condition is ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            //if there was no change in the row numbers (meaning the ID doesn't exsist, then return an error)
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


//export for server use (server.js)
module.exports = router;