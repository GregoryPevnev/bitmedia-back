const { Router } = require("express");
const { userStats } = require("../controllers/statControllers");
const { userList, userDetails } = require("../controllers/userControllers");

const userRouter = Router();

userRouter
  .route("/")
  .get(userList);

userRouter
  .route("/:id")
  .get(userDetails);

userRouter
  .route("/:id/stats")
  .get(userStats);

module.exports = userRouter;
