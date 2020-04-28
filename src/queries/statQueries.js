const knex = require("knex")(require("../../knexfile"));

const DATA_COLUMNS = {
  "date": "date",
  "clicks": "clicks",
  "views": "page_views",
};


exports.findStats = (userId, {
  from,
  to,
}) =>
  knex("users_statistic").select(DATA_COLUMNS).where({
    user_id: userId
  }).whereBetween("date", [from, to]);
