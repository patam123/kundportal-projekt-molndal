module.exports = (app) => {
    //Retrieve all customers
    const shares = require("../controllers/share.controller");
  
    app.get("/shares", shares.findShares);
    // app.post("/customers", customers.insert);

  };