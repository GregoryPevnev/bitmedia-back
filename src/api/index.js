const { Router } = require("express");
const userRoutes = require("./userRoutes");

const rootRouter = Router();

rootRouter.use("/users", userRoutes);

module.exports = rootRouter;
