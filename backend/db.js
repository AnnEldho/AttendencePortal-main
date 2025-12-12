const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'attendance_app',
  dateStrings: true
});

module.exports = pool;
