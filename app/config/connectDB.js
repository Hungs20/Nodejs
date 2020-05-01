var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456"
});

let connectDB = () => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Mysql Connected!");
  });
};
module.exports = connectDB;