module.exports = (app) => {

    const industries = require("../controllers/industry.controller");
  
    app.get("/industries", industries.getContent);
    app.get("/suggestedindustries", industries.getSuggestedIndustries);
    app.get("/allindustries", industries.getAll);
  };