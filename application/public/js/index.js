$(document).ready(function() {
    $("#sub_button").click(function(){
        $.get("/search",
          {
          year_film : document.getElementById("fyear").value,
          name : document.getElementById("name").value,
          category : document.getElementById("category").value,
          winner : document.getElementById("winner").checked,
        },
    
          function(data, status){
          dispResults(data);
        });
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