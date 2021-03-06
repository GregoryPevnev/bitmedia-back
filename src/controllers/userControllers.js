const config = require("config");
const { findUsers, findUser, countUsers } = require("../queries/userQueries");

const PAGE_SIZE = config.get("application").pageSize;

exports.userList = async (req, res) => {
  const page = Number(req.query.page || 1);

  if (page < 1)
    return res.status(400).json({
      message: "Invalid page number (Starting from 1)"
    });

  const [users, count] = await Promise.all([
    findUsers(page),
    countUsers()
  ]);

  const pages = Math.ceil(count / PAGE_SIZE);

  return res.status(200).json({
    users,
    page,
    pages,
    isFirst: page === 1,
    isLast: page === pages,
  });
};

exports.userDetails = async (req, res) => {
  const userId = String(req.params.id);

  const user = await findUser(userId);

  if (user === null)
    return res.status(404).json({
      message: "User not found"
    });

  return res.status(200).json({
    user,
  });
};
