module.exports = (app) => {
    //Retrieve all customers
    const customers = require("../controllers/customer.controller");
  
    app.post("/customers", customers.findAll);
    app.post("/register", customers.register)
    app.put("/changepassword", customers.changePassword);
    app.put("/update", customers.update);
    app.post("/login", customers.login);
    // app.post("/customers", customers.insert);
  };