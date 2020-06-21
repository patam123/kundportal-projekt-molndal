const sql = require("./db");

const Share = function (share) {
};

Share.getShares = (result) => {
  sql.query(`SELECT co.Name as companyName,
  s.Type as type, SUM(co.ShareWorth) as shareValue,
  Count(0) as amount,
  i.Name as industry,
  co.ShareNumber as shareNumber,
  ((SELECT COUNT(0) * 1.0 FROM Share WHERE Owner = c.Id AND CompanyId = s.CompanyId) / co.TotalShares) * 100 as sharePct,
  ((SELECT COUNT(0) * 1.0 FROM Share WHERE Owner = c.Id AND CompanyId = s.CompanyId) / co.TotalShares) * 100 as votePct
  FROM Share s 
  INNER JOIN Company co ON co.Id = s.CompanyId
  Inner JOIN Customer c ON s.Owner = c.Id
  Inner JOIN Industry i ON i.Id = co.Industry
  WHERE c.Email = 'example.person@example.com'
  Group by co.Name;`, (err, res) => {
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