const sql = require("./db");
const SALT_ROUNDS = 10;
const bcrypt = require("bcrypt");

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
  sql.query(
    "SELECT Email, Hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture FROM Customer WHERE id=1;",
    (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
        return;
      }
      console.log("customers", res);
      result(null, res);
    }
  );
};

Customer.register = (newUser, result) => {
  bcrypt.hash(newUser.password, SALT_ROUNDS, (err, hash) => {
    console.log(hash);
    const objUser = {
      email: newUser.email,
      hash: hash,
      fname: newUser.fname,
      lname: newUser.lname,
      perNum: newUser.perNum,
      address: newUser.address,
      postArea: newUser.postArea,
      postCode: newUser.postCode,
      telNum: newUser.telNum,
    };
    sql.query(
      `INSERT INTO Customer(Email, Hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture) VALUES('${objUser.email}', '${objUser.hash}', '${objUser.fname}', '${objUser.lname}', '${objUser.perNum}', '${objUser.address}', '${objUser.postCode}', '${objUser.postArea}', '${objUser.telNum}', 'hej');`,
      (err, res) => {
        if (err) {
          console.log("Error", err);
          result(null, err);
          return;
        }
        console.log("Created user", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
      }
    );
  });
};

Customer.login = (user, result) => {
  const { email, password } = user;

  sql.query(`SELECT * from Customer WHERE Email = '${email}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log(res);
    if (res.length) {
      bcrypt.compare(password, res[0].Hash, (err, isCorrect) => {
        if (isCorrect) {
          console.log("Found user", res[0]);
          result(null, res[0]);
          return;
        } else {
          console.log("Incorrect password");
          result({ type: "incorrect_password" }, null);
          return;
        }
      });
    } else {
      result({ type: "not_found" }, null);
    }
  });
};

Customer.update = (user, result) => {
  sql.query(
    `UPDATE Customer SET Email = '${user.email}', 
  FirstName = '${user.fname}', LastName = '${user.lname}', PersonNumber = '${user.perNum}', 
  Address = '${user.address}', PostCode = '${user.postCode}', PostAddress = '${user.postArea}', 
  PhoneNumber = '${user.telNum}', ProfilePicture = '${user.photo}' WHERE Email = '${user.oldEmail}' `,
    (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
        return;
      }
      console.log("customers", res);
      result(null, res);
    }
  );
};

Customer.changePassword = (user, result) => {
  const { email, newPassword } = user;
  sql.query(
    `UPDATE Customer SET Password = '${newPassword}' WHERE Email = '${email}'`,
    (err, res) => {
      if (err) {
        console.log("Error", err);
        result(null, err);
        return;
      }
      console.log("customers", res);
      result(null, res);
    }
  );
};

module.exports = Customer;
