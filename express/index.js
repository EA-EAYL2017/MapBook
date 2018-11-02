const express = require("express");
const app = express();
app.use(express.json());
const db = require("./db.js");

courses = [];
employees = [];

function updateCourses(callback) {
    db.getCourses(function(rows) {
        courses = rows;
        callback();
    })
}

app.get("/courses", function (req, res) {
    updateCourses(function() {
        res.send(courses);
    });
});

app.get("/course/:id", function (req, res) {
    db.getCourse(req.params.id, function(course) {
        res.send(course);
    });
});

app.post("/course", function (req, res) {
    db.addCourse(req.body, function(insertedKey) {
        updateCourses(function() {
            res.send(courses);
        });
    });
});

app.put("/course", function (req, res) {
    db.updateCourse(req.body, function(insertedKey) {
        updateCourses(function() {
            res.send(courses);
        });
    });
});

app.delete("/course/:id", function (req, res) {
    db.deleteCourse(req.params.id, function() {
        updateCourses(function() {
            res.send(courses);
        });
    });
});

app.post("/course/:id/:name/:email", function (req, res) {
    db.addEmployee(req.params.id,req.params.name,req.params.email, function(employee) {
        res.send(employee);
    });
});

app.listen(8002, function () {
    console.log("Map Book API listening on port 8002...");
});