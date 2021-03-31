var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/search", function(req, res) {
        res.status(200).send("Welcome to the search");
    });
  }
  
  module.exports = appRouter;