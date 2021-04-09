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

    let html = search.formatSearchResult(result);

    res.status(200).set('Content-Type', 'text/html').send(html);
  });






}

  module.exports = appRouter;
