$(document).ready(function() {
  $('#search').submit(function(e) {
    e.preventDefault
    $.ajax({
      type: 'GET',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(response) {
        dispResults(response);
      }
    });
    return false;
  });
})

function dispResults(db) {
    var table = "<tr><th>Category</th><th>Name</th><th>Film</th><th>Year</th><th>Winner</th></tr>";
    for(var i=0; i<db.length; ++i) {
        table += "<tr>";
        table += "<td> " + String(db[i]["category"]) + " </td>";
        table += "<td> " + String(db[i]["name"]) + " </td>";
        table += "<td> " + String(db[i]["film"]) + " </td>";
        table += "<td> " + String(db[i]["year_film"]) + " </td>";
        table += "<td> " + String(db[i]["winner"]) + " </td>";
        table += "</tr>";
    }
    document.getElementById('output_table').innerHTML  = table;
}

function addFields(){
  var container = document.getElementById("container");
    // Append a node with a random text
    var a = document.createElement("a");

    container.appendChild(a.appendChild(document.createTextNode("Category")));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "category";
    container.appendChild(input);
    // Append a line break 
    container.appendChild(document.createElement("br"));
}

function clearFields() {
  var container = document.getElementById("container");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
}