const sql = require("./db");

const Customer = function (customer) {
  // (this.email = customer.Email),
  // (this.password = customer.Password),
  //   (this.firstName = customer.FirstName),
  //   (this.lastName = customer.LastName),
  //   (this.personNumber = customer.PersonNumber),
  //   (this.address = customer.Address),
  //   (this.postCode = customer.PostCode),
  //   (this.postAddress = customer.PostAddress),
  //   (this.phoneNumber = customer.PhoneNumber);
};

Customer.getAll = (result) => {
  sql.query("SELECT Email, Hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture FROM Customer WHERE id=1;", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  });
};

Customer.register = (result) => {
  sql.query("INSERT INTO Customer(Email, Hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture) VALUES('p.h@example.com', '123456789', 'Patrik', 'Hammarstrand', '188012010110', 'Väg 1', '41555', 'Göteborg', '0731525252', 'Value');", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  });
};

Customer.login = (result) => {
  sql.query("SELECT 1 FROM Customer WHERE Email = '' AND Hash = ''", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  })
}

Customer.update = (user, result) => {
  sql.query(`UPDATE Customer SET Email = '${user.email}', 
  FirstName = '${user.fname}', LastName = '${user.lname}', PersonNumber = '${user.perNum}', 
  Address = '${user.address}', PostCode = '${user.postCode}', PostAddress = '${user.postArea}', 
  PhoneNumber = '${user.telNum}', ProfilePicture = '${user.photo}' WHERE Email = '${user.oldEmail}' `, (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  })
}

Customer.changePassword = (user, result) => {
  const {email, newPassword} = user;
  sql.query(`UPDATE Customer SET Password = '${newPassword}' WHERE Email = '${email}'`, (err, res) =>{
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