const sql = require("./db");

const Customer = function (customer) {
  // (this.email = customer.Email),
  //   (this.firstName = customer.FirstName),
  //   (this.lastName = customer.LastName),
  //   (this.personNumber = customer.PersonNumber),
  //   (this.address = customer.Address),
  //   (this.postCode = customer.PostCode),
  //   (this.postAddress = customer.PostAddress),
  //   (this.phoneNumber = customer.PhoneNumber);
};

Customer.getAll = (result) => {
  sql.query("SELECT Email, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber FROM Customer WHERE id=1;", (err, res) => {
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