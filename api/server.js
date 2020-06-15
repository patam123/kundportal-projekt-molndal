const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3300;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/customer.routes")(app);
require("./app/routes/share.routes")(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});