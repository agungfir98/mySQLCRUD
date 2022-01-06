const getMenus = async (req, res) => {
  let sql = "SELECT * FROM menus";
  connection.query(sql, (err, results) => {
    let json = {};
    if (err) {
      throw err;
    } else {
      // res.status(200).send(results);
      json = { data: results };
      // res.send(json);
      res.render("index", json);
    }
  });
};

const addMenu = (req, res) => {
  const { menu, price, stock, description } = req.body;
  let sql = `INSERT INTO menus (menu, price, stock, description) VALUES ("${menu}", ${price}, ${stock}, "${description}");`;
  connection.query(sql, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).redirect("/");
    }
  });
};

const delMenu = (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM menus WHERE id= ${id};`;
  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(["sukses menghapus data", results]);
    }
  });
};

const updateMenu = (req, res) => {
  const { id, menu, price, stock, description } = req.body;
  // console.log("haloo", id, menu, price, stock, description);
  const sql = `UPDATE menus SET menu = "${menu}", description = "${description}" , price = ${price}, stock = ${stock} WHERE id = ${id};`;

  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(["Data berhasil diupdate", results]);
    }
  });
};

module.exports = {
  getMenus,
  addMenu,
  delMenu,
  updateMenu,
};
