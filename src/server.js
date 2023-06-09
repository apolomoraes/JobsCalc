const express = require("express");
const server = express();
const routes = require("./routes");

server.set("view engine", "ejs");

server.use(express.static("public"));

// usar req.body
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});