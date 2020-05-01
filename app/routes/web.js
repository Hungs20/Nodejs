import express from "express";
import users from "../controllers/UsersController";

let router = express.Router();

let initRoutes = (app) => {
  router.get("/", users.index);
  router.get("/login", users.login);
  router.post("/login", users.login);
  return app.use("/", router);
};

module.exports = initRoutes;