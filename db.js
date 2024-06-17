const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin1234",
    database: "testdb"
});

db.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to mysql database')
    }
});

module.exports = db;