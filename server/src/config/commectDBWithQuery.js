const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "30012003",
  database: "booking_ticket_movie",
});

module.exports = pool;
