const express = require("express");
// express => biblioteca para criar servidor
const routes = express.Router();
// função do express para criar as rotas

const views = __dirname + "/views/";

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
  return res.render(views + "profile");
});

module.exports = routes;