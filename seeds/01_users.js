const populate = require("./utils/populate");
const USERS = require("../data/users.json");

exports.seed = populate("users")(USERS);
