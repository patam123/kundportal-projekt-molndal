const Share = require("../models/share.model");

exports.findShares = (req, res) => {
  Share.getShares((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.send(data);
    }
  });
};