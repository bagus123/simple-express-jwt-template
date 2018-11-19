const db = require("./app/models");
function initData() {
  db.Role.findAll().then(roles => {
    if (roles.length == 0) {
      var arrRole = [
        {
          name: "ROLE_USER"
        },
        {
          name: "ROLE_ADMIN"
        }
      ];
      db.Role.bulkCreate(arrRole).then(() => {});
    }
  });
}

module.exports = {
  initData: initData
};
