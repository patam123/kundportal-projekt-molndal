const Customer = require("../models/customer.model");

exports.findAll = (req, res) => {
  Customer.getAll(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.register = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Customer.register(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some occur while creating a user",
      });
    } else {
      res.send(data);
    }
  });
};

exports.login = (req, res) => {

  Customer.login(req.body, (err, data) => {
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

exports.changePassword = (req, res) => {
  
  Customer.changePassword(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.update = (req, res) => {
  
  Customer.update(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.resetPassword = (req, res) => {
  
  Customer.resetPassword(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.getHash = (req, res) => {
  
  Customer.getHash(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

// exports.insert = (req, res) => {

//   console.log(req.body)

// };