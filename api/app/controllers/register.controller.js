const Customer = require("../models/customer.model");

exports.handleRegister = (req, res) => {
  Customer.register((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};