const { Router } = require("express");

const infoRouter = Router();

infoRouter
  .route("/health")
  .get((req, res) => res.send(200));

module.exports = infoRouter;
