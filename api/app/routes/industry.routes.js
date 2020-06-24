module.exports = (app) => {

    const industries = require("../controllers/industry.controller");
  
    app.post("/industries", industries.getContent);
    app.post("/suggestedindustries", industries.getSuggestedIndustries);
    app.get("/allindustries", industries.getAll);
  };