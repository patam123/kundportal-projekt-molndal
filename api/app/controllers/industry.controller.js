const Industry = require("../models/industry.model");

exports.getContent = (req, res) => {
  Industry.getContent(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};

exports.getSuggestedIndustries = (req, res) => {
    Industry.getSuggestedIndustries(req.body, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  };

  exports.getAll = (req, res) => {
    Industry.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  };