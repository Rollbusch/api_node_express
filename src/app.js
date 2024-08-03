const express = require("express");
const config = require("config");
const consign = require("consign");

module.exports = () => {
  const app = express();

  app.set("port", process.env.port || config.get("server.port"));

  consign({cwd: 'src'})
    .then("data")
    .then("controllers")
    .then("routes")
    .into(app)

  return app;
};