

module.exports = function(app, path){

    app.get("/", function(req, res) {
      
      res.sendFile(path.join(__dirname, "../public/home.html"));
      console.log("home")
    });
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
      console.log("survey")
    });
   
    
   }
   
   