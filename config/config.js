const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "loginjwt"
    },
    port: process.env.PORT || 3000,
    db: "postgres://jwtuser:jwt@localhost:5432/loginjwt-dev"
  },

  test: {
    root: rootPath,
    app: {
      name: "loginjwt"
    },
    port: process.env.PORT || 3000,
    db: "postgres://jwtuser:jwt@localhost:5432/loginjwt-test"
  },

  production: {
    root: rootPath,
    app: {
      name: "loginjwt"
    },
    port: process.env.PORT || 3000,
    db: "postgres://jwtuser:jwt@localhost:5432/loginjwt-prod"
  }
};

module.exports = config[env];
