const mssql = require("mssql");
const dbConfig = require("../config/db.config");

var connection = mssql.ConnectionPool({
  server: dbConfig.server,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

module.exports = connection;