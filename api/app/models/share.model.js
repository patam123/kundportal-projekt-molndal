const sql = require("./db");

const Share = function (share) {
};

Share.getShares = (result) => {
  sql.query("SELECT s.Type as type, co.Name as name, co.Industry as industry, co.ShareNumber as shareNumber, co.ShareWorth as shareWorth FROM Share s INNER JOIN Company co ON s.CompanyId = co.Id WHERE s.Owner = 1;", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("shares", res);
    result(null, res);
  });
};

module.exports = Share;