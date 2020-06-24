const sql = require("./db");

const Industry = function (industry) {
};

Industry.getContent = (user, result) => {
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
  WHERE c.Email = '${user.email}'
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
Industry.getSuggestedIndustries = (user, result) => {
    sql.query(`SELECT i.Name AS industry,  
    SUM(co.ShareWorth) as shareValue,
    i.Color as color 
    FROM Industry i
    INNER JOIN Company co
    ON i.Id = co.Industry
    INNER JOIN Share s
    ON s.CompanyId = co.Id
    INNER JOIN Customer c
    ON c.Id = s.Owner
    WHERE c.Email = '${user.email}'
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

  Industry.getAll = (result) => {
    sql.query(`SELECT Name AS name, Color AS color From Industry`, (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
        return;
      }
      console.log("industries", res);
      result(null, res);
    });
  };

  // Industry.getSuggestedIndustries = (user, result) => {
  
  //   sql.query(`SELECT i.Name AS industry,  
  //   SUM(co.ShareWorth) as shareValue,
  //   i.Color as color 
  //   FROM Industry i
  //   INNER JOIN Company co
  //   ON i.Id = co.Industry
  //   INNER JOIN Share s
  //   ON s.CompanyId = co.Id
  //   INNER JOIN Customer c
  //   ON c.Id = s.Owner
  //   WHERE c.Email = ${user.email}
  //   group by i.Name`, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(err, null);
  //       return;
  //     }
  //     console.log(res);
  //     if (res.length) {
  //           console.log("Found user", res);
  //           result(null, res);
  //           return;
  //     } else {
  //       result({ type: "not_found" }, null);
  //     }
  //   });
  // };

module.exports = Industry;