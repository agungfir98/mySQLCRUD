const router = require("express").Router();

router.route("/").get((req, res) => {
  let sql = "SELECT * FROM menus";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
