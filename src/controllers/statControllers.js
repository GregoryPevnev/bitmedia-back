const config = require("config");
const { findUser } = require("../queries/userQueries");
const { findStats } = require("../queries/statQueries");
const { validateDates } = require("../services/dates");

const {
  defaultStartDate: DEFAULT_FROM_DATE,
  defaultEndDate: DEFAULT_TO_DATE
} = config.get("application");

exports.userStats = async (req, res) => {
  const userId = String(req.params.id);
  const from = req.query.from || DEFAULT_FROM_DATE;
  const to = req.query.to || DEFAULT_TO_DATE;

  const errors = validateDates(from, to);

  if (errors.length > 0)
    return res.status(400).json({
      message: "Invalid dates",
      description: errors,
    });

  const user = await findUser(userId);

  if (user === null)
    return res.status(404).json({
      message: "User not found"
    });

  const stats = await findStats(userId, { from, to });

  return res.status(200).json({ stats });
};
