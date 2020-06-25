module.exports = (app) => {
    const shares = require("../controllers/share.controller");
  
    app.post("/shares", shares.findShares);

  };