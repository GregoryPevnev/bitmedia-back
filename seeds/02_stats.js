const populate = require("./utils/populate");
const STATS = require("../data/users_statistic.json");

exports.seed = populate("users_statistic")(STATS);