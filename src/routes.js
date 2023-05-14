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

routes.get("/", (req, res) => res.render(views + "index"));

routes.get("/job", (req, res) => res.render(views + "job"));

routes.post("/job", (req, res) => console.log(req.body));

routes.get("/job/edit", (req, res) => res.render(views + "job-edit"));

routes.get("/profile", (req, res) => res.render(views + "profile", { profile }));

module.exports = routes;