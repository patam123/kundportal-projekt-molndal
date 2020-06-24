module.exports = (app) => {
    //Retrieve all customers
    const shares = require("../controllers/share.controller");
  
    app.post("/shares", shares.findShares);
    // app.post("/customers", customers.insert);

  };