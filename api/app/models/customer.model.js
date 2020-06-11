const sql = require("./db");

const Customer = function (customer) {
  (this.email = customer.email),
    (this.name = customer.name),
    (this.active = customer.active);
};

Customer.getAll = (result) => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  });
};

module.exports = Customer;