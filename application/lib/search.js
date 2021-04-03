var columns = [
  'year_film',
  // 'year_ceremony',
  // 'ceremony',
  'category',
  'name',
  'film',
  'winner',
];

// Create cells for table header row.
var headers = columns.map(column => {
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
  var table = result.map(val => {
    var row = '<tr>';
    columns.forEach(column => {
      row += `<td>${val[column]}</td>`;
    });
    row += '</tr>';
    return row;
  }).join('');

  var html = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<body>\n' +
    '  <h1>Search Results</h1>\n' +
    `  <table>\n` +
    `    <tr>${headers}</tr>` +
    `    ${table}\n` +
    '  </table>\n' +
    '</body>\n' +
    '</html>';

  return html;
}

module.exports = {
  formatSearchResult,
};
