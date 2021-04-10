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
    '<head>\n' +
    '  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\n' +
    '  <meta content="utf-8" http-equiv="encoding">\n' +
    '  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>\n' +
    '  <script type="text/javascript">\n' +
    '    $(document).ready(function() {\n' +
    '    $("#searchbar").load("/public/searchbar");\n' +
    '    });\n' +
    '  </script>\n' +
    '</head>\n' +
    '<body>\n' +
    '  <h1>Oscr Search</h1>\n' +
    '  <div id="searchbar"></div>\n' +
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
