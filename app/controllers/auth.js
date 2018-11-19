const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const roleName = require("../constants/role_name").roleName;
const HttpStatus = require("http-status-codes");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = app => {
  app.use("/api/auth", router);
};

router.post("/signin", function(req, res, next) {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().required()
  });

  return Joi.validate(req.body, schema, function(error, value) {
    if (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "BAD_REQUEST"
      });
    }

    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: "Something is not right",
          user: user
        });
      }
      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign(user.toJSON(), "your_jwt_secret");
        return res.json({ token: token });
      });
    })(req, res);
  });
});

router.post("/signup", function(req, res, next) {
  let body = req.body;
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().required()
  });

  db.User.findOne({ where: { email: body.email } }).then(user => {
    if (user) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "email already exist" });
    }

    db.User.create(body).then(user => {
      if (user) {
        var newUserRole = {
          user_id: user.id,
          role_id: roleName.ROLE_USER.value
        };

        db.UserRole.create(newUserRole).then(userRole => {
          res.json({ message: "user createad successfully" });
        });
      }
    });
  });
});
