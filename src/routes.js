const express = require("express");
// express => biblioteca para criar servidor
const routes = express.Router();
// função do express para criar as rotas

const views = __dirname + "/views/";

const profile = {
  name: "Apolo Moraes",
  avatar: "https://avatars.githubusercontent.com/u/85043318?v=4",
  "monthly-budget": 3000,
  "days-per-week": 6,
  "hours-per-day": 6,
  "vacation-per-year": 4
}

routes.get("/", (req, res) => {
  return res.render(views + "index");
});
routes.get("/job", (req, res) => {
  return res.render(views + "job");
});
routes.get("/job/edit", (req, res) => {
  return res.render(views + "job-edit");
});
routes.get("/profile", (req, res) => {
  return res.render(views + "profile", { profile });
});

module.exports = routes;