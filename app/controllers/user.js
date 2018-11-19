const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("passport");

module.exports = app => {
  app.use("/api/user", passport.authenticate("jwt", { session: false }), router);
};

router.get("/profile", function(req, res, next) {
  res.send(req.user);
});
