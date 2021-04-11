const path = require("path");
const data = require(path.resolve('data.json'));
const search = require('../lib/search');
const match = require('../lib/matchByParameter');

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = data.filter(nominee => {
      return match.matchByParameter(req.query, nominee);
    });

    res.status(200).json(result);
    //let html = search.formatSearchResult(result);

    //res.status(200).set('Content-Type', 'text/html').send(html);
  });

  app.get("/categories/:category*", (req, res, next) => {
    let db = undefined;
    if(res.hasOwnProperty("result")) {
      db = res.result;
    } else {
      db = data;
    }
    res.result = db.filter(nominee => {
      return match.matchByParameter(req.params, nominee);
    });
    next();
  })

  app.get("/year/:year_film*", (req, res, next) => {
    let db = undefined;
    if(res.hasOwnProperty("result")) {
      db = res.result;
    } else {
      db = data;
    }
    res.result = db.filter(nominee => {
      return match.matchByParameter(req.params, nominee);
    });
    next();
  })

  app.get("/*", (req, res, next) => {
    if(res.hasOwnProperty("result")) {
      res.status(200).json(res.result);
    } else {
      next();
    };

  })

  app.get("/public/searchbar", (req, res) => {
    res.status(200).sendFile(path.resolve('public/searchbar.html'));
  });

  app.get("/public/js/index", (req, res) => {
    res.status(200).sendFile(path.resolve('public/js/index.js'))
  })
  
}

  module.exports = appRouter;
