var appRouter = function (app) {
    /*app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });*/

    app.get("/search/?year=:year", (req, res) => {
        res.status(200).send("req.params.year");
    });

    app.get("/", (req, res) => {
      res.status(200).sendFile('/index.html', {root: __dirname})
    });
  }
  
  module.exports = appRouter;