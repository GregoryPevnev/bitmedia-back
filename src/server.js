const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http = require("http");
const api = require("./api");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(helmet());

app.use("/api", api);

exports.start = ({ port, host }) => server.listen(port, host);
