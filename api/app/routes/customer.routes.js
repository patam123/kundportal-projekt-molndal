module.exports = (app) => {
    //Retrieve all customers
    const customers = require("../controllers/customer.controller");
  
    app.get("/customers", customers.findAll);
    // app.post("/customers", customers.insert);

  };