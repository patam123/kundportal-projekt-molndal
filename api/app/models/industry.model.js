const sql = require("./db");

const Industry = function (industry) {
};

Industry.getContent = (result) => {
  sql.query(`SELECT i.Name AS industry, 
  co.Name AS company, 
  SUM(co.ShareWorth) as shareValue 
  FROM Industry i
  INNER JOIN Company co
  ON i.Id = co.Industry
  INNER JOIN Share s
  ON s.CompanyId = co.Id
  INNER JOIN Customer c
  ON c.Id = s.Owner
  WHERE c.Id = 1
  group by i.Name, co.Name`, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("industries", res);
    result(null, res);
  });
};
Industry.getSuggestedIndustries = (result) => {
    sql.query(`SELECT i.Name AS industry,  
    SUM(co.ShareWorth) as shareValue 
    FROM Industry i
    INNER JOIN Company co
    ON i.Id = co.Industry
    INNER JOIN Share s
    ON s.CompanyId = co.Id
    INNER JOIN Customer c
    ON c.Id = s.Owner
    WHERE c.Id = 1
    group by i.Name`, (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
        return;
      }
      console.log("industries", res);
      result(null, res);
    });
  };


module.exports = Industry;