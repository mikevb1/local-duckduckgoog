var express = require('express');
var http = require('http');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('searchEngine', process.env.SEARCH_ENGINE || 'https://www.google.com/search?q=');
  app.use(app.router);
});

app.get('/', function(req, res) {
  query = req.query['q'];
  encodedQuery = encodeURIComponent(query);

  if (query.match(/![A-Za-z0-9]+/) ||
      query.substring(0, 2) === '! ' ||
      query.substring(0, 1) === '\\') {
    console.log('Searched DuckDuckGo');
    res.redirect('https://duckduckgo.com?q=' + encodedQuery);

  } else {
    if (app.get('searchEngine').indexOf('google.com') != -1) {
      console.log('Searched Google');
    } else {
      console.log('Searched custom');
    }

    res.redirect(app.get('searchEngine') + encodedQuery);
  }
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
