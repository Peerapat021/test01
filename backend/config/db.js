const mysql = require("mysql");

// หากใช้ mysql
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL connection error:", err);
    process.exit(1);
  }
  console.log("MySQL connected");
  connection.release();
});

module.exports = pool;
