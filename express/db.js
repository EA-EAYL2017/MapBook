const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "MapBook"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
})
exports.getCourses = function(callback) {
    db.query(
        "SELECT * FROM Courses ORDER BY date, title",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    );
}
exports.getCourse = function(id, callback) {
    db.query(
        "SELECT * FROM Courses WHERE id = ?",
        [id],
        function(err, rows) {
            if (err) throw err;
            if (rows.length == 1) rows = rows[0]; // array -> single object
            callback(rows);
        }
    );
}
exports.addCourse = function(data, ready) {
    db.query(
        "INSERT INTO Courses SET ?",
        data, 
        function(err, results, fields) {
            if (err) throw err;
            ready(results.insertId);
        }
    );
}
exports.updateCourse = function(data, ready) {
    db.query(
        "UPDATE Courses SET ? WHERE id = ?",
        [data, data.id], 
        function(err, results, fields) {
            if (err) throw err;
            ready(results.insertId);
        }
    );
}
exports.deleteCourse = function(id, ready) {
    db.query(
        "DELETE FROM Courses WHERE id = ?",
        [id], 
        function(err, results, fields) {
            if (err) throw err;
            ready();
        }
    );
}
exports.getEmployees = function(callback) {
    db.query(
        "SELECT * FROM Course_Employee",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    );
}
exports.addEmployee = function(data, ready) {
    db.query(
        "INSERT INTO Course_Employee SET ?",
        data, 
        function(err, results, fields) {
            if (err) throw err;
            ready(results.insertId);
        }
    );
}
