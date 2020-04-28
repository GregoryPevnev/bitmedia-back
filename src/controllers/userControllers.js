const config = require("config");
const { findUsers, findUser, countUsers } = require("../queries/userQueries");
const { findStats } = require("../queries/statQueries");

const PAGE_SIZE = config.get("application").pageSize;

// TODO: Think about moving logic away to Queries

exports.userList = async (req, res) => {
  const pageNumber = Number(req.query.page || 0);
  const page = Math.max(pageNumber, 1);

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = page * PAGE_SIZE;

  const [users, count] = await Promise.all([
    findUsers(startIndex, endIndex),
    countUsers()
  ]);

  const pages = Math.ceil(count / PAGE_SIZE);

  return res.status(200).json({
    users,
    page,
    pages,
  });
};

exports.userDetails = async (req, res) => {
  const userId = String(req.params.id);

  const user = await findUser(userId);

  if (user === null)
    return res.status(404).json({
      user: null,
      stats: [],
    });

  const stats = await findStats(userId);

  return res.status(200).json({
    user,
    stats,
  });
};
