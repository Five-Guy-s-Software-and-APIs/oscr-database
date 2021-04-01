var appRouter = function (app) {
    /*app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });*/

    app.get("/", (req, res) => {
      res.status(200).sendFile('/index.html', {root: __dirname})
    });

    app.get("/search", (req, res) => {
      res.send(req.query);
  });
  }
  
  module.exports = appRouter;