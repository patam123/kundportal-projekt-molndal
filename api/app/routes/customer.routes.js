module.exports = (app) => {
    //Retrieve all customers
    const customers = require("../controllers/customer.controller");
    const register = require("../controllers/register.controller")
  
    app.get("/customers", customers.findAll);
    app.post("/register", register.handleRegister)
    // app.post("/customers", customers.insert);
  };