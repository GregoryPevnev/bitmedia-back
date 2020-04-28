const config = require("config");

console.log(config.get("application"));
console.log(config.get("database"));
console.log(config.get("server"));