let columns = [
  'year_film',
  // 'year_ceremony',
  // 'ceremony',
  'category',
  'name',
  'film',
  'winner',
];

// Create cells for table header row.
let headers = columns.map(column => {
  return `<td>${column}</td>`;
}).join('');

/**
 * Formats a search result object as an HTML page.
 *
 * @param {object} result Search result.
 *
 * @return {string} HTML page for the search result.
 */
function formatSearchResult(result) {
  let table = result.map(val => {
    let row = '<tr>';
    columns.forEach(column => {
      row += `<td>${val[column]}</td>`;
    });
    row += '</tr>';
    return row;
  }).join('');

  let html = '<!DOCTYPE html>\n' +
    '<html>\n' +
    ' <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\n' +
    ' <meta content="utf-8" http-equiv="encoding">\n' +
    '    <style>\n' +
    '        body {\n' +
    '            font-size: medium;\n' +
    '            font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;}\n' +
    '    </style>\n' +
    '<body>\n' +
    '<h1>Search</h1>' +
    '  <form action="/search" method="GET">\n' +
    '    <label for="fyear">Year of film</label>\n' +
    '    <input type="text" name="year_film" id="fyear"><br>\n' +
    '    <label for="name">Name of nominee</label>\n' +
    '    <input type="text" name="name" id="name"><br>\n' +
    '    <label for="film">Name of Film</label>\n' +
    '    <input type="text" name="film" id="film"><br>\n' +
    '    <label for="category">Category</label>' +
    '    <input type="text" name="category" id="category"><br>\n' +
    '    <label for="winner">Show only winners</label>\n' +
    '    <input type="checkbox" name="winner" id="winner"><br>\n' +
    '    <button>Search</button>\n' +
    '  </form>\n' +
    '  <h1>Search Results</h1>\n' +
    `  <table>\n` +
    //`    <tr>${headers}</tr>` +
    `    <tr>` + `<th>Year</th>` + `<th>Category</th>` + `<th>Name</th>` + `<th>Film</th>` + `<th>Winner?</th>` + `</tr>` +
    `    ${table}\n` +
    '  </table>\n' +
    '</body>\n' +
    '</html>';

  return html;
}




module.exports = {
  formatSearchResult,
};
