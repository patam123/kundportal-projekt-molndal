const Industry = require("../models/industry.model");

exports.getContent = (req, res) => {
  Industry.getContent((err, data) => {
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
    Industry.getSuggestedIndustries((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send(data);
      }
    });
  };