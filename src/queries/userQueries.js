const config = require("config");
const knex = require("knex")(require("../../knexfile"));

const PAGE_SIZE = config.get("application").pageSize;

const DATA_COLUMNS = [
  "users.id",
  "users.first_name",
  "users.last_name",
  "users.email",
  "users.gender",
  "users.ip_address"
];

exports.findUsers = (page) => {
  const from = (page - 1) * PAGE_SIZE;
  const to = page * PAGE_SIZE;

  return knex("users")
    .select(DATA_COLUMNS)
    .sum({
      clicks: "users_statistic.clicks",
      views: "users_statistic.page_views"
    }).leftJoin("users_statistic", {
      "users.id": "users_statistic.user_id"
    }).groupBy(DATA_COLUMNS)
    .orderBy("users.id", "asc")
    .offset(from)
    .limit(to - from);
}

exports.findUser = userId =>
  knex("users").select(DATA_COLUMNS)
    .where({ id: userId })
    .then(results => {
      if (results.length === 0) return null;

      return results[0];
    })

exports.countUsers = () =>
  knex("users").count({ count: "*" })
    .then(results => results[0].count);
