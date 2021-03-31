var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/search", function(req, res) {
        res.status(200).send("Welcome to the search");
    });

    app.get("/index", function(req, res) {
      res.status(200).sendFile('/index.html', {root: __dirname})
    });
  }
  
  module.exports = appRouter;