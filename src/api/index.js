const { Router } = require("express");
const userRoutes = require("./userRoutes");
const infoRoutes = require("./infoRoutes");

const rootRouter = Router();

rootRouter.use("/users", userRoutes);

rootRouter.use("/info", infoRoutes);

module.exports = rootRouter;
