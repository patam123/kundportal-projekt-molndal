const Customer = require("../models/customer.model");

exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.changePassword = (req, res) => {
  
  Customer.changePassword(req.body, (err, data) => {
    if (err) {
      if (err.type === "not_found" || err.type === "incorrect_password") {
        res.status(404).send({
          message: "Wrong email or password",
        });
      } else {
        res.status(500).send({
          message: "Error when fething user...",
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.update = (req, res) => {
  
  Customer.update(req.body, (err, data) => {
    if (err) {
      if (err.type === "not_found" || err.type === "incorrect_password") {
        res.status(404).send({
          message: "Wrong email or password",
        });
      } else {
        res.status(500).send({
          message: "Error when fething user...",
        });
      }
    } else {
      res.send(data);
    }
  });
};

// exports.insert = (req, res) => {

//   console.log(req.body)

// };