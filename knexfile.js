const config = require("config");

module.exports = {
  client: "sqlite3",
  connection: config.get("database"),
};
