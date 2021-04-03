const path = require("path");
const data = require(path.resolve('data.json'));
const search = require('../lib/search');

var appRouter = function (app) {
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('public/index.html'));
  });

  app.get("/search", (req, res) => {
    let result = [];
    for(const nominee of data) {
        if(parseInt(nominee.year_film) === parseInt(req.query.year)) {
            result.push(nominee);
        }
    }

    var html = search.formatSearchResult(result);

    res.status(200).set('Content-Type', 'text/html').send(html);
  });
}

  module.exports = appRouter;
