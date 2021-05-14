const path = require("path");
const data = require(path.resolve('data.json'));
const match = require('../lib/matchByParameter');
const pub = require("./public/public")
const favicon = require('serve-favicon')


var appRouter = function (app) {
  app.use("/public", pub);

  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

  app.get("/api", (req, res) => {
    res.status(200).sendFile(path.resolve('README.html'))
  })

  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });
  
  app.get("/search", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.query, nominee);
    });

    if (result.length === 0) res.status(404).send();
    else res.status(200).json(result);
  });

  app.get(["/movies/categories/:category/year/:year_film",
           "/movies/categories/:category",
           "/movies/year/:year_film"], (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.params, nominee);
    });
    
    if (result.length === 0) res.status(404).send();
    else res.status(200).json(result);
  });

  app.get("/movies/categories/:category/year/:year_film/winner", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.params, nominee) && nominee.winner;
    });

    if (result.length === 0) res.status(404).send();
    else res.status(200).json(result);
  });
}

  module.exports = appRouter;
