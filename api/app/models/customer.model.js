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

Customer.getAll = (user, result) => {
  sql.query(
    `SELECT Email, Hash as hash, FirstName, LastName, PersonNumber, Address, PostCode, PostAddress, PhoneNumber, ProfilePicture FROM Customer WHERE Email = '${user.email}';`,
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

  sql.query(
    `SELECT Email, Hash as hash From Customer
  WHERE Email = '${email}';`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(res);
      if (res.length) {
        bcrypt.compare(password, res[0].hash, (err, isCorrect) => {
          if (isCorrect) {
            console.log("Found user", res);
            result(null, res);
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
    }
  );
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
      console.log("update customer", res);
      result(null, res);
    }
  );
};

Customer.changePassword = (user, result) => {
  console.log(user.hash);
  bcrypt.compare(user.oldPassword, user.hash, (err, isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) {
      bcrypt.hash(user.newPassword, SALT_ROUNDS, (err, hash) => {
        console.log(hash);
        sql.query(
          `UPDATE Customer SET Hash = '${hash}' WHERE Email = '${user.email}'`,
          (err, res) => {
            if (err) {
              console.log("Error", err);
              result(null, err);
              return;
            } else {
              console.log("change password", res);
              result(null, res);
            }
          }
        );
      });
    }
  });
};

Customer.resetPassword = (user, result) =>{
  bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
    console.log(hash);
    sql.query(
      `UPDATE Customer SET Hash = '${hash}' WHERE Email = '${user.email}'`,
      (err, res) => {
        if (err) {
          console.log("Error", err);
          result(null, err);
          return;
        } else {
          console.log("reset password", res);
          result(null, res);
        }
      }
    );
  });
};

Customer.getHash = (user, result) => {
  sql.query(`SELECT Hash as hash FROM Customer WHERE Email = '${user.email}'`,
  (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("hash", res);
    result(null, res);
  });
  
};

module.exports = Customer;
