const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, cb) {
      return db.User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }

          return user.isValidPassword(password, (error, isMatch) => {
            console.log(isMatch);
            if (error || !isMatch) {
              return cb(null, false, {
                message: "Incorrect email or password."
              });
            }
            return cb(null, user, { message: "Logged In Successfully" });
          });
        })
        .catch(err => cb(err));
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(user, cb) {
      return db.User.findOne({ id: user.id })
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);
