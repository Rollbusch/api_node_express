const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");

module.exports = () => {
  const app = express();

  app.set("port", process.env.port || config.get("server.port"));

  app.use(bodyParser);

  consign({cwd: 'src'})
    .then("routes")
    .into(app)

  return app;
};