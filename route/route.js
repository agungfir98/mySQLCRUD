const router = require("express").Router();
const {
  getMenus,
  addMenu,
  delMenu,
  updateMenu,
} = require("../controller/controller.js");
// const ini = require("../controller/controller");
// console.log(ini);

router.route("/").get(getMenus).post(addMenu).delete(delMenu).put(updateMenu);

module.exports = router;
