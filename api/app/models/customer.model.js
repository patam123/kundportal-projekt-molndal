const sql = require("./db");

const Customer = function (customer) {
  (this.email = customer.email),
    (this.name = customer.name),
    (this.active = customer.active);
};

Customer.getAll = (result) => {
  sql.query("SELECT Email, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber FROM Customer WHERE Id=2", (err, res) => {
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