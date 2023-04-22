const express = require("express");
const routes = express.Router();

const basePath = __dirname + "/views";

routes.get("/", (req, res) => {
  return res.sendFile(basePath + "/index.html");
});
routes.get("/job", (req, res) => {
  return res.sendFile(basePath + "/job.html");
});
routes.get("/job/edit", (req, res) => {
  return res.sendFile(basePath + "/job-edit.html");
});
routes.get("/profile", (req, res) => {
  return res.sendFile(basePath + "/profile.html");
});

module.exports = routes;